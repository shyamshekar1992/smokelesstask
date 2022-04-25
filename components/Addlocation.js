import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    height: 58,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 15,
    letterSpacing: 0.5,
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: "100%",
    textAlign: "center",
  },

  input: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "#D463F0",
    flex: 1,
  },
  back: {
    backgroundColor: "white",
    width: 40,
    height: 40,
    borderRadius: 20,
    padding: 10,
  },
  save: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
export default function Addlocation({ navigation }) {
  const [name, setName] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [flavour, setFlavour] = React.useState("");

  //To add information to local storage
  const addLocation = async () => {
    let locationList =
      JSON.parse(await AsyncStorage.getItem("@locationObj")) || [];
    locationList.push({
      name: name,
      location: location,
      flavour: flavour,
    });

    await AsyncStorage.setItem("@locationObj", JSON.stringify(locationList));
    navigation.push("Home");
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.back}
        >
          <Image
            source={require("../asset/arrow.png")}
            style={{ height: 20, width: 20 }}
          />
        </TouchableOpacity>
        <>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setName(text)}
            value={name}
            placeholder="Name"
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => setLocation(text)}
            value={location}
            placeholder="Location"
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => setFlavour(text)}
            value={flavour}
            placeholder="flavour (comma seperated)"
          />
        </>
      </View>
      <View style={styles.save}>
        <TouchableOpacity style={styles.button} onPress={() => addLocation()}>
          <Text style={{ color: "#D463F0" }}>Save</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
