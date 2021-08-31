import React, { useState } from "react";
import { View, StyleSheet, TextInput, Dimensions } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const height = Dimensions.get("window").height;

//cofig
import colors from "../../config/colors";

function InputFields({ placeholder, handleFeild, value, ...otherProps }) {
  //   const [fieldValue, handleFeild] = useState("");
  return (
    <View style={styles.inputFieldContainer}>
      <TextInput
        style={styles.inputText}
        placeholder={placeholder}
        placeholderTextColor={colors.lightWhite}
        onChangeText={(text) => handleFeild(text)}
        value={value}
        {...otherProps}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  inputFieldContainer: {
    backgroundColor: colors.light,
    padding: RFValue(12, height),
    borderRadius: RFPercentage(1),
    marginVertical: RFValue(5, height),
  },
  inputText: {
    color: colors.white,
  },
});
export default InputFields;
