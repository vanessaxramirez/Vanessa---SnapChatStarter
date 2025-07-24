import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import { Button } from "react-native";
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AddEvent from "../components/AddEvent";

import * as Location from "expo-location";

import Ionicons from "react-native-vector-icons/Ionicons";

export default function MapScreen({ navigation }) {
  const tabBarHeight = useBottomTabBarHeight();
  const insets = useSafeAreaInsets();
  const [location, setLocation] = useState();
  const [errorMsg, setErrorMsg] = useState();
  const [markerLocation, setMarker] = useState([]);
  const [addEventvisible, setAddEventvisible] = useState(false);
  const [mapPop, setMapPop] = useState(false);
  const [popupCoords, setPopupCoords] = useState();

  const [currentRegion, setCurrentRegion] = useState({
    latitude: 34.0211573,
    longitude: -118.4503864,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setCurrentRegion({
        latitude: 34.0211573,
        longitude: -118.4503864,
        // latitude: location.coords.latitude,
        // longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    })();
  }, []);

  function toggleComponent() {
    setAddEventvisible(!addEventvisible);
  }

  const refreshEvents = async () => {
    await fetchData();
  };

  const handleMapPress = (event) => {
    // console.log(event.nativeEvent.coordinate);
    const lat = event.nativeEvent.coordinate.latitude;
    const long = event.nativeEvent.coordinate.longitude;
    // console.log("Latitude:", lat);
    // console.log("Longitude:", long);
    setMapPop(true);
    setPopupCoords({ latitude: lat, longitude: long });
    // console.log("setting map pop to", mapPop);
    setMarker([lat, long]);
    setAddEventvisible(true);
  };

  let text = "Waiting...";
  text = JSON.stringify(location);

  return (
    <View style={[styles.container, { marginBottom: tabBarHeight }]}>
      <MapView
        style={styles.map}
        region={currentRegion}
        showsUserLocation={true}
        showsMyLocationButton={true}
        onLongPress={handleMapPress}
      >
        {/* <Marker
          coordinate={{ latitude: 34.0211573, longitude: -118.4503864 }}
          title="Pinpoint"
          description="This is a pinned location"
        >
          <Image
            source={require("../../assets/marker.jpg")}
            style={{ width: 30, height: 30 }}
            resizeMode="contain"
          />
        </Marker> */}
        {mapPop && popupCoords && (
          <Marker
            coordinate={popupCoords}
            pinColor="red"
          >
            <Ionicons name="location-sharp" size={40} color="red" />
            <Button
            title="Create Event"
            onLongPress={() => {
              setAddEventvisible(true);
            }}
          />
          </Marker>
        )}
      </MapView>

      <View style={[styles.mapFooter]}>
        <View style={styles.locationContainer}>
          <AddEvent
            isVisible={addEventvisible}
            coordinates={location}
            onClose={() => {
              toggleComponent();
              refreshEvents();
              console.log(location);
            }}
          />
          <TouchableOpacity
            style={[styles.userLocation, styles.shadow]}
            onPress={() => {
              console.log("Go to user location!");
              const { latitude, longitude } = location.coords;
              setCurrentRegion({ ...currentRegion, latitude, longitude });
            }}
          >
            <Ionicons name="navigate" size={15} color="black" />
          </TouchableOpacity>
        </View>
        <View style={[styles.bitmojiContainer, styles.shadow]}>
          <Pressable
            onPress={() => {
              navigation.navigate("Event");
            }}
          >
            <View style={styles.myBitmoji}>
              <Ionicons name="calendar-outline" size={50} color="gray" />
              <View style={styles.bitmojiTextContainer}>
                <Text style={styles.bitmojiText}>Events</Text>
              </View>
            </View>
          </Pressable>

          <View style={styles.places}>
            <Image
              style={styles.bitmojiImage}
              source={require("../../assets/snapchat/personalBitmoji.png")}
            />
            <View style={styles.bitmojiTextContainer}>
              <Text style={styles.bitmojiText}>Places</Text>
            </View>
          </View>
          <View style={styles.myFriends}>
            <Image
              style={styles.bitmojiImage}
              source={require("../../assets/snapchat/personalBitmoji.png")}
            />
            <View style={styles.bitmojiTextContainer}>
              <Text style={styles.bitmojiText}>Friends</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapFooter: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
    bottom: 0,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  locationContainer: {
    backgroundColor: "transparent",
    width: "100%",
    paddingBottom: 8,
    alignItems: "center",
  },
  userLocation: {
    backgroundColor: "white",
    borderRadius: 100,
    height: 36,
    width: 36,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
  shadow: {
    shadowColor: "rgba(0, 0, 0)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 3,
    shadowOpacity: 0.5,
    elevation: 4,
  },
  bitmojiContainer: {
    width: "100%",
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  myBitmoji: {
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 5,
  },
  bitmojiImage: {
    width: 50,
    height: 50,
  },
  bitmojiTextContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 4,
  },
  bitmojiText: {
    fontSize: 10,
    fontWeight: "700",
  },
  places: {
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  myFriends: {
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  calendarIcon: {},
  mapPopUpButton: {
    width: 20,
    height: 10,
    color: "#90D5FF",
    backgroundColor: "white",
    borderRadius: 3,
    textAlign: "center",
    shadowColor: "#000",
  },
});
