import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

//config
import colors from "../config/colors";

function SocialMediaLinks(props) {
  return (
    <View style={styles.container}>
      <AntDesign
        name="google"
        size={24}
        color={colors.white}
        style={styles.googleIcon}
        onPress={() => console.log("Google Link pressed")}
      />
      <Text
        style={styles.googleText}
        onPress={() => console.log("Google Link pressed")}
      >
        Google
      </Text>

      <View style={styles.line}></View>
      <EvilIcons
        name="sc-facebook"
        size={24}
        color={colors.white}
        style={styles.facebookIcon}
        onPress={() => console.log("Facebook Link Pressed")}
      />
      <Text
        style={styles.facebookText}
        onPress={() => console.log("Facebook Link Pressed")}
      >
        Facebook
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  googleIcon: {
    left: 35,
  },
  googleText: {
    color: colors.white,
    left: 40,
    fontSize: 15,
  },
  line: {
    height: 52,
    backgroundColor: colors.primary,
    width: 2,
    left: 82,
  },
  facebookIcon: {
    left: 100,
    fontSize: 30,
  },
  facebookText: {
    color: colors.white,
    left: 100,
    fontSize: 15,
  },
});

export default SocialMediaLinks;
