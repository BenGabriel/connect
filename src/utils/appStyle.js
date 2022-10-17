import { StyleSheet } from "react-native";
import { colors } from "./colors";
import { heightRes } from "./responsiveness";

export const appStyle = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    padding: heightRes(2)
  },
  flexRowCenter: {
    flexDirection: "row",
    alignItems: "center"
  },
  flexRowSpaceCenter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  flexRowAroundCenter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  flexAllCenter: {
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  }
});
