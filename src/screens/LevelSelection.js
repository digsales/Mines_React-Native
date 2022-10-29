import React from "react";
import { View, StyleSheet, Text, Modal } from "react-native";
import Difficulty from "../components/Difficulty";

export default (props) => {
  const onLevelSelected = props.onLevelSelected;
  return (
    <Modal
      onRequestClose={props.onCancel}
      visible={props.isVisible}
      animationType={"slide"}
      transparent={true}
    >
      <View style={styles.frame}>
        <View style={styles.container}>
          <Text style={styles.title}>Choose the diffficulty level:</Text>
          <Difficulty easy onLevelSelected={onLevelSelected} />
          <Difficulty normal onLevelSelected={onLevelSelected} />
          <Difficulty hard onLevelSelected={onLevelSelected} />
          <Difficulty veryHard onLevelSelected={onLevelSelected} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.6",
  },
  container: {
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
