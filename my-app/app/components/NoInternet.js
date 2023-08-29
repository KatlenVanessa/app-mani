import { View, Text, Pressable } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

const NoInternet = ({ onRefreshPress }) => {
  return (
    <View style={styles.container}>
      <Feather name="wifi-off" size={35} color="#383838"></Feather>
      <Text style={{ fontSize: 18, color: "#383838", paddingVertical: 5 }}>
        Sem conexão com a Internet
      </Text>
      <Pressable
        onPress={onRefreshPress}
        style={{ flexDirection: "row", alignItems: "center" }}
      >
        <Feather name="refresh-cw" size={18} color="#383838">
          <Text style={{ fontSize: 18, paddingVertical: 5, marginLeft: 5 }}>
            Tente Novamente
          </Text>
        </Feather>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default NoInternet;
