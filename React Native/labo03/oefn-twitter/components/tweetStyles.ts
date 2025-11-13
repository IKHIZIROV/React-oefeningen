import { StyleSheet } from "react-native";

export const tweetStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e6e6e6",
    backgroundColor: "white",
  },

  avatar: {
    width: 48,
    height: 48,
    borderRadius: 48,
    marginRight: 12,
  },

  body: {
    flex: 1,
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },

  name: {
    fontWeight: "600",
    fontSize: 15,
    marginRight: 6,
    color: "#000",
  },

  handle: {
    fontSize: 14,
    color: "#555",
    marginRight: 6,
  },

  dot: {
    fontSize: 14,
    color: "#555",
    marginRight: 6,
  },

  date: {
    fontSize: 14,
    color: "#777",
  },

  text: {
    fontSize: 15,
    color: "#000",
    marginTop: 4,
    lineHeight: 20,
  },
});
