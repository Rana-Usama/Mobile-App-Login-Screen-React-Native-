import React from "react";
import { TouchableOpacity, Text } from "react-native";

//config
import colors from "../../config/colors";

function AppButton({ title, backgroundColor, onPress }) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: backgroundColor,
        borderRadius: 10,
        padding: 11,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          color: colors.white,
          fontWeight: "bold",
          alignSelf: "center",
          fontSize: 15,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default AppButton;
