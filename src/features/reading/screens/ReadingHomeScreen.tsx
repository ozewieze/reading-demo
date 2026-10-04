import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ReadingHomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welkom in je leeshoekje</Text>
      <Text>Neem vandaag even tijd voor een goed boek.</Text>
    </View>
  );
};

export default ReadingHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#5bcf21",
  },
  title: { fontSize: 28, fontWeight: "700" },
});
