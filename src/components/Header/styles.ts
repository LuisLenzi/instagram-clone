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
  },
  logo: {},
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    marginRight: 15,
  },
});
