import React from "react";
import { View, Image } from "react-native";

const ImageComponent = ({source}) => {
  return (
    <View>
      <Image source={source} />
    </View>
  );
};

export default ImageComponent;
