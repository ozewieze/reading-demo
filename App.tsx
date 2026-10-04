import { StyleSheet, Text, View } from "react-native";
import ReadingHomeScreen from "@/features/reading/screens/ReadingHomeScreen";

export default function App() {
  return <ReadingHomeScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#5bcf21",
  },
  title: { fontSize: 28, fontWeight: "700" },
});
