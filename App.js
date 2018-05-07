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
                <Text>Polyline</Text>
                <MapView style={styles.map}
                         initialRegion={{
                             latitude: 37.78825,
                             longitude: -122.4324,
                             latitudeDelta: 0.0922,
                             longitudeDelta: 0.0421,
                         }}
                         provider={MapView.PROVIDER_GOOGLE}
                >
                    <MapView.Polyline coordinates={[
                        {latitude: 37.88045, longitude: -122.3903},
                        {latitude: 37.78825, longitude: -122.4324},
                        ]}
                                      lineDashPattern={[30, 30]}
                    />

                    <MapView.Polyline coordinates={[
                        {latitude: 37.88045, longitude: -122.4324},
                        {latitude: 37.78825, longitude: -122.3903},
                    ]}
                                      lineDashPattern={[30, 30, 15, 30]}
                    />
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
});

