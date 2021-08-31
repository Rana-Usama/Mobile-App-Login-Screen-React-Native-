import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import colors from "../config/colors";
import Screen from "./../components/Screen";

function HomeScreen(props) {
  return (
    <Screen style={styles.container}>
      <View style={styles.tabContainer}></View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flex: 1,
  },
  tabContainer: {
    backgroundColor: colors.white,
    width: "100%",
    height: RFPercentage(11),
    borderRadius: RFPercentage(20),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default HomeScreen;
