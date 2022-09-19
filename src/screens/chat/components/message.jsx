import { Image, StyleSheet, View } from "react-native";
import React from "react";
import Text from "../../../components/Text";
import { colors } from "../../../utils/colors";
import { heightRes, widthRes } from "../../../utils/responsiveness";

const Message = ({ item, userId }) => {
  return (
    <>
      {item.image === "" ? (
        <View
          style={{
            backgroundColor:
              item.user === userId ? colors.variant : colors.white,
            maxWidth: "80%",
            padding: heightRes(1.5),
            marginVertical: heightRes(0.4),
            alignSelf: item.user === userId ? "flex-end" : "flex-start",
            borderRadius: 15,
            borderTopLeftRadius: item.user === userId ? 15 : 0,
            borderTopRightRadius: item.user === userId ? 0 : 15
          }}
        >
          <Text
            value={item.message}
            color={item.user === userId ? colors.white : "#757571"}
          />
        </View>
      ) : (
        <View
          style={{
            width: widthRes(50),
            height: widthRes(50),
            marginVertical: heightRes(0.4),
            alignSelf: item.user === userId ? "flex-end" : "flex-start"
          }}
        >
          <Image
            source={{ uri: item.image }}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 10,
              resizeMode: "contain"
            }}
          />
        </View>
      )}
    </>
  );
};

export default Message;

const styles = StyleSheet.create({});
