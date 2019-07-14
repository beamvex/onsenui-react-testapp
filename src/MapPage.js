import React from 'react';
import './App.css';
import { Icon, AlertDialog, Button } from 'react-onsenui';
import GoogleMapReact from 'google-map-react';
import { connect } from "react-redux";

const mapStateToProps = state => {
  return state;
};

const AnyReactComponent = ({ text }) => <Icon
    size={{ default: 32, material: 40 }}
    icon={{ default: 'md-gps-dot' }}
/>;

const Truck = ({ document }) => <Icon
    size={{ default: 32, material: 40 }}
    icon={{ default: 'md-gps-dot' }}>{document.fields.name.stringValue}</Icon>;

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

                    {this.props.documents.map(doc => {

                        

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

    handleCancel() {
        this.setState({isOpen:false});
        return;
    }

    render() {
        console.log('mappage', this.props);

            return (
            <div>
            <AlertDialog isOpen={this.state.isOpen} onCancel={this.handleCancel.bind(this)} cancelable>
                    <div className="alert-dialog-title">Warning!</div>
                    <div className="alert-dialog-content">
                        An error has occurred!<br/>
                        {this.state.theerror && <p>
                        {this.state.theerror.code}<br/>
                        {this.state.theerror.message}</p>
                        }
                    </div>
                    <div className="alert-dialog-footer">
                        <Button onClick={this.handleCancel.bind(this)} className="alert-dialog-button">
                            Ok</Button>
                    </div>
                </AlertDialog>

            <SimpleMap center={this.props.location.center} zoom={this.props.location.zoom} documents={this.props.documents}>
                
            </SimpleMap>
            </div>
        );
    }
}

export default connect(mapStateToProps)(MapPage);
