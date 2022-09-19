import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import { appStyle } from "../../utils/appStyle";
import { Ionicons } from "@expo/vector-icons";
import Text from "../../components/Text";
import { heightRes, widthRes } from "../../utils/responsiveness";
import { colors } from "../../utils/colors";
import { useNavigation } from "@react-navigation/native";
import ListItem from "./components/listItem";

const AutoShopList = () => {
  const navigation = useNavigation();
  const data = [...Array(10)];
  return (
    <View style={{ ...appStyle.container, padding: 0 }}>
      <View
        style={{
          ...appStyle.flexRowCenter,
          padding: heightRes(2),
          paddingTop: heightRes(3.4)
        }}
      >
        <Ionicons
          name="menu"
          size={widthRes(7)}
          color={colors.textColor}
          onPress={() => navigation.toggleDrawer()}
        />
        <Text
          value="List of auto-shops nearby"
          bold
          size={2.5}
          color={colors.textColor}
          style={{
            paddingLeft: heightRes(2)
          }}
        />
      </View>
      <View style={styles.listContainer}>
        <FlatList data={data} renderItem={({ item }) => <ListItem />} />
      </View>
    </View>
  );
};

export default AutoShopList;

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: colors.variant,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: heightRes(1)
  }
});
