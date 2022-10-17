import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Modal from "react-native-modal";

const ModalPopup = ({ children, modalVisible, onCancel }) => {
  return (
    <Modal
      style={{ margin: 0 }}
      isVisible={modalVisible}
      onBackdropPress={onCancel}
      onBackButtonPress={onCancel}
    >
      <View style={styles.centeredView}>{children}</View>
    </Modal>
  );
};

export default ModalPopup;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 10
  }
});
