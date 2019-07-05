import React from "react";
import { View } from "react-native";

const EnterPinView = props => (
  <View style={{ flexDirection: "row", marginTop: 40 }}>
    <View
      style={
        props.pinLength > 0
          ? {
              backgroundColor: "#9d3262",
              borderWidth: 2,
              padding: 10,
              borderRadius: 20,
              marginRight: 20
            }
          : {
              borderColor: "#9d3262",
              borderWidth: 2,
              padding: 10,
              borderRadius: 20,
              marginRight: 20
            }
      }
    />
    <View
      style={
        props.pinLength > 1
          ? {
              backgroundColor: "#9d3262",
              borderWidth: 2,
              padding: 10,
              borderRadius: 20,
              marginRight: 20
            }
          : {
              borderColor: "#9d3262",
              borderWidth: 2,
              padding: 10,
              borderRadius: 20,
              marginRight: 20
            }
      }
    />
    <View
      style={
        props.pinLength > 2
          ? {
              backgroundColor: "#9d3262",
              borderWidth: 2,
              padding: 10,
              borderRadius: 20,
              marginRight: 20
            }
          : {
              borderColor: "#9d3262",
              borderWidth: 2,
              padding: 10,
              borderRadius: 20,
              marginRight: 20
            }
      }
    />
    <View
      style={
        props.pinLength > 3
          ? {
              backgroundColor: "#9d3262",
              borderWidth: 2,
              padding: 10,
              borderRadius: 20,
              marginRight: 20
            }
          : {
              borderColor: "#9d3262",
              borderWidth: 2,
              padding: 10,
              borderRadius: 20
            }
      }
    />
  </View>
);

export default EnterPinView;
