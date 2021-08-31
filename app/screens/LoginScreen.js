import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

//config
import colors from "../config/colors";

//components
import AppButton from "../components/common/AppButton";
import InputFields from "../components/common/InputFields";
import Screen from "../components/Screen";
import SocialMediaLinks from "../components/SocialMediaLinks";

function LoginScreen(props) {
  const [fields, setFields] = useState([
    {
      placeHolder: "username",
      value: "",
    },
    {
      placeHolder: "password",
      value: "",
      secure: true,
    },
  ]);

  const handleChange = (text, i) => {
    if (i === 1 && text.length >= 3) {
      alert("length suceeded");
      return;
    }
    let tempfeilds = [...fields];
    tempfeilds[i].value = text;
    setFields(tempfeilds);
  };

  return (
    <Screen style={styles.container}>
      <Text style={styles.mainHeading}>Duolingo</Text>
      <Text style={styles.subHeading1}>Login to</Text>
      <Text style={styles.subHeading2}>your Account</Text>

      <View style={styles.fieldsContainer}>
        {fields.map((item, i) => (
          <InputFields
            key={i}
            placeholder={item.placeHolder}
            handleFeild={(text) => handleChange(text, i)}
            secureTextEntry={item.secure}
            value={item.value}
            maxLength={8}
          />
        ))}
        <Text style={styles.forgetPassText}>Forget your Password ?</Text>
      </View>

      <View style={styles.buttonContainer}>
        <AppButton
          title="Login"
          backgroundColor={colors.yellow}
          onPress={() => props.navigation.navigate("HomeTab")}
        />
        <Text style={styles.loginAgainText}>or log in with</Text>
      </View>

      <View style={styles.socialLinksContainer}>
        <SocialMediaLinks />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    alignItems: "center",
  },
  mainHeading: {
    color: colors.white,
    fontSize: 37,
    top: 10,
  },
  subHeading1: {
    color: colors.white,
    fontSize: 22,
    top: 30,
  },
  subHeading2: {
    color: colors.white,
    fontSize: 22,
    top: 34,
  },
  fieldsContainer: {
    width: "85%",
    top: 80,
  },
  forgetPassText: {
    color: colors.lightWhite,
    alignSelf: "flex-end",
    top: 5,
  },
  buttonContainer: {
    width: "85%",
    top: 125,
  },
  loginAgainText: {
    color: colors.lightWhite,
    alignSelf: "center",
    top: 10,
  },
  socialLinksContainer: {
    width: "85%",
    top: 180,
  },
});

export default LoginScreen;
