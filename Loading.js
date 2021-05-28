import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='dark-content' />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#333333",
    paddingHorizontal: 30,
    paddingVertical: 100,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 30,
  },
});
