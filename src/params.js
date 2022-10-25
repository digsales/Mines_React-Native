import { Dimensions } from "react-native";

const params = {
  blockSice: 30,
  borderSizer: 5,
  fontSizer: 15,
  headerRatio: 0.15, // Header proportion on the top of the screen
  difficultLevel: 0.1, // % of mines on the battlefield
  getColumnsAmount() {
    const width = Dimensions.get("window").width;
    return Math.floor(width / this.blockSice);
  },
  getRowsAmount() {
    const totalHeight = Dimensions.get("window").height;
    const boarderHeight = totalHeight * (1 - this.headerRatio);
    return Math.floor(boarderHeight / this.blockSice);
  },
};

export default params;
