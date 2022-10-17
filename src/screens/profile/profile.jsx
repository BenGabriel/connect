import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import React, { useEffect, useState } from "react";
import { appStyle } from "../../utils/appStyle";
import Text from "../../components/Text";
import { Ionicons } from "@expo/vector-icons";
import { heightRes, widthRes } from "../../utils/responsiveness";
import { colors } from "../../utils/colors";
import Button from "../../components/button";
import ModalPopup from "./components/modalPopup";
import * as ImagePicker from "expo-image-picker";

const Profile = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [status, requestPermission] = ImagePicker.useCameraPermissions();

  useEffect(() => {
    status?.granted ? null: requestPermission()
  },[])

  const gallery = async () => {
    setModalVisible(false);
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });
    console.log(result);
  };
  const camera = async () => {
    setModalVisible(false);
    status?.granted ? null: requestPermission()
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });
    console.log(result);
  };

  return (
    <View style={appStyle.container}>
      <Ionicons
        name="chevron-back"
        size={widthRes(7)}
        color={colors.textColor}
        onPress={() => navigation.goBack()}
      />
      <ScrollView
        style={{ flex: 1, paddingHorizontal: heightRes(2) }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ alignSelf: "center", alignItems: "center" }}>
          <TouchableOpacity
            style={styles.imageContainer}
            activeOpacity={0.7}
            onPress={() => setModalVisible(true)}
          >
            <Image
              source={require("../../../assets/userimg.png")}
              style={appStyle.image}
            />
          </TouchableOpacity>
          <View style={styles.icon}>
            <Ionicons name="md-pencil-outline" color={colors.textColor} />
          </View>
          <Text value="User name" bold color={colors.white} size={2.5} />
        </View>
        <Button
          border
          style={styles.button}
          color={colors.textColor}
          value="Edit Profile"
          textColor={colors.textColor}
          onPress={() => navigation.navigate("EditProfile")}
        />

        <View style={styles.textContainer}>
          <Text value="Phone number" size={2.4} bold color={colors.white} />
          <Text value="+234808780957" size={2} color={colors.textColor} />
        </View>
        <View style={styles.textContainer}>
          <Text value="Email Address" size={2.4} bold color={colors.white} />
          <Text
            value="annarob233@gmail.com"
            size={2}
            color={colors.textColor}
          />
        </View>
        <View style={styles.textContainer}>
          <Text value="Car Details" size={2.4} bold color={colors.white} />
          <Text value="Name : " size={2} color={colors.textColor} />
          <Text value="Colour: " size={2} color={colors.textColor} />
          <Text value="Vehicle reg no : " size={2} color={colors.textColor} />
          <Text
            value="Vehicle chasis number : "
            size={2}
            color={colors.textColor}
          />
        </View>
        <View style={styles.textContainer}>
          <Text
            value="Emergency contact"
            size={2.4}
            bold
            color={colors.white}
          />
          <Text value="+234808780957" size={2} color={colors.textColor} />
        </View>
      </ScrollView>
      <ModalPopup
        modalVisible={modalVisible}
        onCancel={() => setModalVisible(false)}
      >
        <View style={styles.modal}>
          <Text value="Profile photo" bold color={colors.white} size={2.4} />
          <View style={appStyle.flexRowCenter}>
            <TouchableOpacity
              style={styles.modalIconContainer}
              activeOpacity={0.7}
              onPress={camera}
            >
              <View style={styles.modalIcon}>
                <Ionicons
                  name="camera-outline"
                  size={widthRes(7)}
                  color={colors.textColor}
                />
              </View>
              <Text value="Camera" color={colors.white} bold />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalIconContainer}
              activeOpacity={0.7}
              onPress={gallery}
            >
              <View style={styles.modalIcon}>
                <Ionicons
                  name="image-outline"
                  size={widthRes(7)}
                  color={colors.textColor}
                />
              </View>
              <Text value="Gallery" color={colors.white} bold />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalIconContainer}
              activeOpacity={0.7}
              onPress={() => setModalVisible(false)}
            >
              <View
                style={[
                  styles.modalIcon,
                  { backgroundColor: "#D9D9D9", borderWidth: 0 }
                ]}
              >
                <Ionicons
                  name="close"
                  size={widthRes(7)}
                  color={colors.black}
                />
              </View>
              <Text value="Remove" color={colors.white} bold />
            </TouchableOpacity>
          </View>
        </View>
      </ModalPopup>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 100,
    width: widthRes(26),
    height: widthRes(26),
    marginBottom: heightRes(1)
  },
  icon: {
    backgroundColor: colors.appBlack,
    padding: 5,
    borderRadius: 100,
    position: "absolute",
    right: 5,
    bottom: 40
  },
  button: {
    borderRadius: 100,
    width: "50%",
    alignSelf: "flex-start",
    marginTop: heightRes(3),
    marginBottom: heightRes(2)
  },
  textContainer: {
    marginTop: heightRes(2.5)
  },
  modal: {
    backgroundColor: colors.primary,
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: heightRes(2.5)
  },
  modalIcon: {
    ...appStyle.flexAllCenter,
    width: widthRes(15),
    height: widthRes(15),
    borderRadius: 100,
    borderWidth: 2,
    borderColor: colors.textColor,
    marginTop: heightRes(2),
    marginBottom: 5
  },
  modalIconContainer: { alignItems: "center", marginRight: heightRes(4) }
});
