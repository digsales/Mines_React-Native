import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Flag from "./Flag";
import params from "../params";

export default (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.flagContainer}>
        <TouchableOpacity onPress={props.onFlagPress} style={styles.flagButton}>
          <Flag bigger />
        </TouchableOpacity>
        <Text style={styles.flagsLeft}>= {props.flagsLeft}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={props.onNewGame}>
        <Text style={styles.buttonLabel}>New Game</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  flagContainer: {
    flexDirection: "row",
  },
  flagButton: {
    marginTop: 10,
    minWidth: 30,
  },
  flagsLeft: {
    fontSize: 30,
    fontFamily: "monospace",
    fontWeight: "bold",
    paddingTop: 5,
    marginLeft: 20,
  },
  button: {
    backgroundColor: "#999",
    borderLeftColor: "#ccc",
    borderTopColor: "#ccc",
    borderRightColor: "#333",
    borderBottomColor: "#333",
    borderWidth: params.borderSize,
    elevation: 5,
    padding: 5,
  },
  buttonLabel: {
    fontFamily: "monospace",
    fontSize: 20,
    fontWeight: "bold",
  },
});
