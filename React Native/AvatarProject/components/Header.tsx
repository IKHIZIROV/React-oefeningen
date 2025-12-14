import { View, Text, Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";
import { Colors } from "../styles/theme";

interface HeaderProps {
  title: string;
  showBack?: boolean;
}

export default function Header({ title, showBack }: HeaderProps) {
  return (
    <View style={styles.container}>
      {showBack ? (
        <Pressable onPress={() => router.back()}>
          <Text style={styles.back}>←</Text>
        </Pressable>
      ) : (
        <View style={{ width: 30 }} />
      )}

      <Text style={styles.title}>{title}</Text>

      {/* spacer for symmetry */}
      <View style={{ width: 30 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: Colors.parchmentDark,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    borderBottomWidth: 2,
    borderBottomColor: "#a89763",
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "800",
    color: Colors.inkDark,
    letterSpacing: 1,
    paddingTop: 15
  },
  back: {
    fontSize: 24,
    color: Colors.inkDark,
    fontWeight: "800",
  },
});
