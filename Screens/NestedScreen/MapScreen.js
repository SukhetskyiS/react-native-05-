import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          longitude: -122.0849872,
          latitude: 37.4226711,
          latitudeDelta: 0.001,
          longitudeDelta: 0.006,
        }}
        region={{
          longitude: -122.0849872,
          latitude: 37.4226711,
          latitudeDelta: 0.001,
          longitudeDelta: 0.006,
        }}
      >
        <Marker
          coordinate={{
            longitude: -122.0849872,
            latitude: 37.4226711,
          }}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MapScreen;
