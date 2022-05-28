import { StyleSheet } from "react-native";

import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    padding: 20,
    justifyContent: "space-between",
    backgroundColor: theme.colors.white,
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    borderTopWidth: 1,
    borderTopColor: theme.colors.gray,
  },
  icon: {
    marginRight: 15,
  },
  profile: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 150,
  }
});
