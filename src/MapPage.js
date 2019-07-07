import React from 'react';
import './App.css';
import { Icon, AlertDialog, Button } from 'react-onsenui';
import GoogleMapReact from 'google-map-react';
import { thisTypeAnnotation } from '@babel/types';

const AnyReactComponent = ({ text }) => <Icon
    size={{ default: 32, material: 40 }}
    icon={{ default: 'md-gps-dot' }}
/>;

class SimpleMap extends React.Component {
    static defaultProps = {
        defCenter: {
            lat: 0,
            lng: 0
        },
        defZoom: 1
    };

    render() {

        return (
            // Important! Always set the container height explicitly
            <div style={{ height: 'calc(100vh - 50px)', width: '100%' }}>
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
                lat: 0,
                lng: 0
            },
            zoom: 1
        };

        this.showPosition = this.showPosition.bind(this);
        this.geoerror = this.geoerror.bind(this);
        this.getLocation();
    }

    handleCancel() {
        return;
    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition, this.geoerror);
        } else {
            alert("Geolocation is not supported by this browser.");
            this.setState({isOpen:true});
        }
    }

    geoerror(theerror) {
        this.setState({isOpen:true, theerror: {code: theerror.code, message: theerror.message}});
    }

    showPosition(position) {
        console.log("Latitude: " + position.coords.latitude +
            "<br>Longitude: " + position.coords.longitude);

        this.setState({
            center: {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            },
            zoom: 17
        });

        var theerror = {
            code: 1,
            message: 'working?'
        };

        this.setState({isOpen:true, theerror: {code: theerror.code, message: theerror.message}});
    }

    render() {
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
                            Cancel</Button>
                        <Button onClick={this.handleCancel.bind(this)} className="alert-dialog-button">
                            Ok</Button>
                    </div>
                </AlertDialog>

            <SimpleMap center={this.state.center} zoom={this.state.zoom}>
                
            </SimpleMap>
            </div>
        );
    }
}

export default MapPage;
