/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import MapView from 'react-native-maps';

export default class App extends Component<{}> {

    constructor(props) {
        super(props);

        this.initialRegion = {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        };
        this.state = {
            markers: [
                { id: 1, coordinate: { latitude: 37.796, longitude: -122.434 }, color: 'green' },
                { id: 2, coordinate: { latitude: 37.804, longitude: -122.427 }, color: 'blue' },
                { id: 3, coordinate: { latitude: 37.8, longitude: -122.43 }, color: 'red' }
            ]
        };

        setInterval(() => {
            this.state.markers.forEach((marker) => {
                // Randomly setting callout every 0.2 sec
                marker.callout = Math.floor(Math.random() * 10) % 2 === 1;
            });
            this.setState({ markers: this.state.markers });
        }, 200);
    }

    getMarkers() {
        return this.state.markers.map((markerData) => (
            <MapView.Marker
                coordinate={markerData.coordinate}
                identifier={markerData.id.toString()}
                key={markerData.id}
            >
                <View style={[styles.marker, {backgroundColor: markerData.color}]} />
                {markerData.callout ? <MapView.Callout tooltip><Text>Abc</Text> </MapView.Callout> : null }
            </MapView.Marker>));
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Removing a view with index above child</Text>
                <MapView style={styles.map}
                         initialRegion={this.initialRegion}
                         provider={MapView.PROVIDER_GOOGLE}
                >
                    {this.getMarkers()}
                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        marginTop: 20,
    },
    map: {
        width: 375,
        height: 600,
    },
    marker: {
        backgroundColor: 'red',
        width: 30,
        height: 30,
    },
});

