import { put } from 'redux-saga/effects'; 
import { locationReceived, getTrucks } from "../../actions/index";

export function* fetchLocation() {

    var response = yield new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                console.log("Latitude: " + position.coords.latitude +
            "<br>Longitude: " + position.coords.longitude);

                resolve({
                    center: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    },
                    zoom: 17
                });
            }, 
            theerror => {
                resolve({noGeo: true, reason: theerror, center: {
                    lat: 51.4934,
                    lng: 0.0098
                },
                zoom: 17});
            });
        } else {
            resolve({noGeo: true, center: {
                lat: 51.4934,
                lng: 0.0098
            },
            zoom: 17, reason: 'no location object'});
        }
    });
    
    yield put(locationReceived(response));

    yield put(getTrucks());
}


