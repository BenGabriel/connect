import { Dimensions, Platform, PixelRatio, StatusBar } from "react-native";

let screenWidth = Dimensions.get("window").width;
let screenHeight = Dimensions.get("window").height;
const scale = screenWidth / 375;

//this is for font sizes
const fontRes = (size) => {
  const standardLength =
    screenWidth > screenHeight ? screenWidth : screenHeight;
  const offset =
    screenWidth > screenHeight
      ? 0
      : Platform.OS === "ios"
      ? 78
      : StatusBar.currentHeight;

  const deviceHeight =
    Platform.OS === "android" ? standardLength - offset : standardLength;

  const heightPercent = (size * deviceHeight) / 100;
  return Math.round(heightPercent);
};

//this is for width
const widthRes = (widthPercent) => {
  const elemWidth =
    typeof widthPercent === "number" ? widthPercent : parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

//this is for height
const heightRes = (heightPercent) => {
  const elemHeight =
    typeof heightPercent === "number"
      ? heightPercent
      : parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

export { widthRes, heightRes, fontRes };
