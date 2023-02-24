import React from "react";
import { StyleSheet, Text, View } from "react-native";

const GuessLogItem = ({ roundNo, children }) => {
  return (
    <View style={styles.listItem}>
      <Text>#{roundNo}</Text>
      <Text>{children}</Text>
    </View>
  );
};

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    alignItems: "center",
    flexDirection: 'row',
    justifyContent: 'space-between',

    margin: 8,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#ddd",
    // shadow property for android
    elevation: 9,
    // shadow property for IOS
    shadowColor: "black",
    shadowOffset: { height: 2, width: 2 },
    shadowOpacity: 0.25,
  },
});
