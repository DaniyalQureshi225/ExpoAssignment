import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import {useRoute} from '@react-navigation/native';

export default function Map(props) {

  

  const { initialRegion, markerCoordinate, markerTitle, markerDescription } = props;

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={initialRegion}>
        <Marker coordinate={markerCoordinate} title={markerTitle} description={markerDescription} />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
