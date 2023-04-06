import React from "react";
import { View, Image } from "react-native";
let source = require("src/download.jpeg");

const ImageComponent = () => {
  return (
    <View>
      <Image source={source} />
    </View>
  );
};

export default ImageComponent;
