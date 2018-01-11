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
            ]
        };
    }

    getMarkers() {
        return this.state.markers.map((markerData) => (
            <MapView.Marker
                coordinate={markerData.coordinate}
                identifier={markerData.id.toString()}
                key={markerData.id}
            >
                <View style={[styles.marker, {backgroundColor: markerData.color}]} />
                <MapView.Callout tooltip><Text>This text should be one-liner</Text></MapView.Callout>
            </MapView.Marker>));
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Text in callout</Text>
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

