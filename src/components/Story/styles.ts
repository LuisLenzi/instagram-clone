import { StyleSheet } from "react-native";

import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: theme.colors.white,
    flexDirection: "row",
    overflow: "scroll",
  },
  images: {
    width: "100%",
    height: 125,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.gray,
  },
  image: {
    marginLeft: 15,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  border: {
    borderWidth: 2,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
    borderColor: theme.colors.storyGradient,
  },
  story: {
    width: 65,
    height: 65,
    borderRadius: 150,
  },
  addStory: {
    position: "absolute",
    right: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "normal",
    marginBottom: 20,
  },
});
