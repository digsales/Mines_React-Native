import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

export default (props) => {
  const { easy, normal, hard, veryHard, onLevelSelected } = props;
  let title, difficulty;

  const buttonStyle = [styles.button];
  if (easy) {
    buttonStyle.push(styles.bgEasy);
    title = "Easy";
    difficulty = 0.1;
  }
  if (normal) {
    buttonStyle.push(styles.bgNormal);
    title = "Normal";
    difficulty = 0.2;
  }
  if (hard) {
    buttonStyle.push(styles.bgHard);
    title = "Hard";
    difficulty = 0.3;
  }
  if (veryHard) {
    buttonStyle.push(styles.bgVeryHard);
    title = "Very Hard";
    difficulty = 0.4;
  }
  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={() => onLevelSelected(difficulty)}
    >
      <Text style={styles.buttonLabel}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    padding: 5,
    alignItems: "center",
    width: 100,
  },
  buttonLabel: {
    fontSize: 20,
    color: "#eee",
    fontWeight: "bold",
  },
  bgEasy: {
    backgroundColor: "#00008B",
  },
  bgNormal: {
    backgroundColor: "#008000",
  },
  bgHard: {
    backgroundColor: "#f26337",
  },
  bgVeryHard: {
    backgroundColor: "#B22222",
  },
});
