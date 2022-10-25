import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import params from "./src/params";
import Field from "./src/components/Field";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Initializing Mines!</Text>
      <Text style={styles.introduction}>
        Grade size: {params.getRowsAmount()}x{params.getColumnsAmount()}
      </Text>
      <Field />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});
