import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  FlatList,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: "#D463F0",
    margin: 10,
    borderRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#49DCFF",
    height: 48,
    borderRadius: 50,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: 0.5,
    paddingVertical: 14,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 20,
    letterSpacing: 0.5,
    lineHeight: 30,
    fontWeight: "bold",
    color: "white",
  },
  location: {
    fontWeight: "normal",
    lineHeight: 20,
    fontSize: 15,
  },

  header: {
    position: "absolute",
    fontSize: 25,
    paddingVertical: 50,
    paddingHorizontal: 100,
    top: 100,
    color: "white",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height: 240,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    width: "100%",
    lineHeight: 80,
    fontSize: 24,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
  },
});

export default function Listlocation({ navigation }) {
  const [list, setList] = useState([]);
//get information from local storage
  useEffect(async () => {
    let locationList =
      JSON.parse(await AsyncStorage.getItem("@locationObj")) || [];
    setList(locationList);
  }, []);

  const Item = (obj) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.push("details", obj)}
    >
      <Text style={styles.title}>{obj.item.name}</Text>
      <Text style={styles.location}>{obj.item.location}</Text>
    </TouchableOpacity>
  );
  return (
    <View>
      <View style={styles.container}>
        <ImageBackground
          source={require("../asset/heroimage.png")}
          resizeMode="cover"
          style={styles.image}
        >
          <Text style={styles.text}>BUILDUP YOUR ICECREAM UNIVERSE</Text>
        </ImageBackground>
      </View>
      <View style={{ marginTop: 240 }}>
        <FlatList
          data={list}
          renderItem={Item}
          keyExtractor={(item) => item.id}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.push("add")
        }
        >
          <Text style={{ color: "white" }}> ADD LOCATION</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
