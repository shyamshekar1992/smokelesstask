import React from "react";

import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "#D463F0",
    flex: 1,
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
  flavour: {
    fontWeight: "normal",
    fontSize: 15,
    padding: 2,
  },
  back: {
    backgroundColor: "white",
    width: 40,
    height: 40,
    borderRadius: 20,
    padding: 10,
  },
});
export default function Detailpage({ route, navigation }) {
  console.log("details", route);
  let { name, location, flavour } = route.params.item;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
        <Image
          source={require("../asset/arrow.png")}
          style={{ height: 20, width: 20 }}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.location}>{location}</Text>
      <View style={{ marginTop: 20 }}>
        {flavour.split(",").map((obj) => (
          <Text style={styles.flavour}>
            {"\u2B24"}
            {obj}
          </Text>
        ))}
      </View>
    </View>
  );
}
