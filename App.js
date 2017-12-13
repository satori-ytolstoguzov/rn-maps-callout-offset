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
    render() {
        return (
            <View style={styles.container}>
                <Text>Callout</Text>
                <MapView style={styles.map}
                         initialRegion={{
                             latitude: 37.78825,
                             longitude: -122.4324,
                             latitudeDelta: 0.0922,
                             longitudeDelta: 0.0421,
                         }}
                         provider={MapView.PROVIDER_GOOGLE}
                >
                    <MapView.Marker coordinate={{
                        latitude: 37.8,
                        longitude: -122.43
                    }}
                                    calloutOffset={{x: 100, y: 0}}
                    >
                        <View style={styles.marker} />
                        <MapView.Callout>
                            <Text style={styles.callout}>Callout</Text>
                        </MapView.Callout>
                    </MapView.Marker>
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
    callout: {
        backgroundColor: 'blue',
    }
});

