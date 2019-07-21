import React from 'react';
import './App.css';
import { Icon, AlertDialog, Button, Popover } from 'react-onsenui';
import GoogleMapReact from 'google-map-react';
import { connect } from "react-redux";
import { openPopUp, closePopUp } from "./actions/index"

const mapStateToProps = state => {
    console.log(state);
    return state;
};

function mapDispatchToProps(dispatch) {
    return {
        openPopUp: (target, text) => dispatch(openPopUp(target, text)),
        closePopUp: () => dispatch(closePopUp())
    };
}


const AnyReactComponent = ({ text }) => <Icon
    size={{ default: 32, material: 40 }}
    icon={{ default: 'md-gps-dot' }}
/>;

class TruckBase extends React.Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
        };
    }

    render() {
        return (
            <Icon
                size={{ default: 32, material: 40 }}
                icon={{ default: 'md-truck' }}
                onClick={() => {
                    console.log("clicked!");
                    this.props.openPopUp(this.btn, this.props.document.fields.name.stringValue);
                }}
                ref={(btn) => { this.btn = btn; }}
            >
            </Icon>);
    }

}

const Truck = connect(mapStateToProps, mapDispatchToProps)(TruckBase);

class MapPopoverBase extends React.Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
        };
    }

    render() {
        console.log('map popover render', this.props.uiReducer.isOpen);
        return (
            <Popover
                isOpen={this.props.uiReducer.isOpen}
                onCancel={() => { console.log('cancelled'); this.props.closePopUp(); }}
                getTarget={() => this.props.uiReducer.target} isCancelable={true}
            >
                <div style={{ textAlign: 'center', opacity: 0.5 }}>
                    <p>{this.props.uiReducer.text}</p>
                    <p><small>Click the background to remove the popover.</small></p>
                </div>
            </Popover>
        )
    }
}

const MapPopover = connect(mapStateToProps, mapDispatchToProps)(MapPopoverBase);

class SimpleMap extends React.Component {
    static defaultProps = {
        defCenter: {
            lat: 0,
            lng: 51
        },
        defZoom: 1
    };

    render() {

        return (
            // Important! Always set the container height explicitly
            <div style={{ height: 'calc(100vh - 100px)', width: '100%', paddingTop: '45px' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyCI47PgInts5BBEQ8UypZYHqpf-zLeHiDY' }}
                    center={this.props.center}
                    zoom={this.props.zoom}
                    defaultCenter={this.props.defCenter}
                    defaultZoom={this.props.defZoom}
                >
                    <AnyReactComponent
                        lat={this.props.center.lat}
                        lng={this.props.center.lng}
                        text="My Marker"
                    />

                    {this.props.trucks.map(doc => {



                        return (<Truck key={doc.name} lat={doc.fields.lat.doubleValue} lng={doc.fields.lng.doubleValue} document={doc} />);
                    }
                    )}

                </GoogleMapReact>
            </div>
        );
    }
}

class MapPage extends React.Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            center: {
                lat: 51.4934,
                lng: 0.0098
            },
            zoom: 1,
            isOpen: false
        };
    }

    render() {
        console.log('mappage', this.props);

        return (
            <div>
                <SimpleMap center={this.props.locationReducer.center} zoom={this.props.locationReducer.zoom} trucks={this.props.truckReducer.trucks}>

                </SimpleMap>
                <MapPopover />
            </div>
        );
    }
}

export default connect(mapStateToProps)(MapPage);
