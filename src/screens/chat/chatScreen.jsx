import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import ChatHeader from "./components/chatHeader";
import Message from "./components/message";
import { heightRes, widthRes } from "../../utils/responsiveness";
import { colors } from "../../utils/colors";
import { Ionicons } from "@expo/vector-icons";
import { appStyle } from "../../utils/appStyle";
import * as ImagePicker from "expo-image-picker";

const ChatScreen = () => {
  const [value, setValue] = useState("");
  const userId = "123";
  const [message, setMessage] = useState([
    {
      id: 8,
      user: "234",
      message: "",
      image:
        "file:///data/user/0/host.exp.exponent/cache/ImagePicker/c4baef06-bdc9-47c4-b5fc-e06a033fcdf6.jpeg"
    },
    {
      id: 1,
      user: "123",
      message:
        "Okay i am waiting, just try sending it before 4 o clock because i will be going to my uncles place by 4 o clock",
      image: ""
    },
    {
      id: 2,
      user: "234",
      message: "i will send a screen shot now ",
      image: ""
    },
    {
      id: 3,
      user: "234",
      message:
        "I am okay, thank you Been working on a code and i would love your input on it if you are free perhaps ?",
      image: ""
    },
    {
      id: 4,
      user: "123",
      message: "I am okay, you?",
      image: ""
    },
    {
      id: 5,
      user: "234",
      message: "Hi ben whats up",
      image: ""
    }
  ]);

  const sendMessage = () => {
    if (value === "") {
      null;
    } else {
      setMessage((prev) => [
        {
          id: Date.now(),
          image: "",
          user: userId,
          message: value
        },
        ...prev
      ]);
      setValue("");
    }
  };

  const launchGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    if (!result.cancelled) {
      setMessage((prev) => [
        {
          id: Date.now(),
          image: result.uri,
          user: userId,
          message: ""
        },
        ...prev
      ]);
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <ChatHeader />
      <View
        style={{
          flex: 1,
          backgroundColor: "#e5e5e5",
          paddingBottom: heightRes(2)
        }}
      >
        <FlatList
          inverted
          data={message}
          keyExtractor={(i) => i.id.toString()}
          renderItem={({ item }) => <Message item={item} userId={userId} />}
          contentContainerStyle={{ marginHorizontal: heightRes(2) }}
        />
      </View>
      <View style={styles.bottom}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={(text) => setValue(text)}
          />
          <Ionicons
            name="camera-outline"
            size={widthRes(4)}
            color={colors.textColor}
            onPress={launchGallery}
          />
        </View>
        <Ionicons
          name="send"
          color={colors.textColor}
          size={widthRes(5)}
          onPress={sendMessage}
        />
      </View>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  bottom: {
    ...appStyle.flexRowCenter,
    backgroundColor: colors.variant,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    padding: heightRes(2),
    paddingVertical: heightRes(2.4)
  },
  inputContainer: {
    ...appStyle.flexRowCenter,
    borderWidth: 1,
    borderColor: colors.textColor,
    flex: 1,
    marginRight: heightRes(2),
    borderRadius: 50
  },
  input: {
    height: 46,
    paddingLeft: heightRes(2),
    color: colors.textColor,
    width: "90%"
  }
});
