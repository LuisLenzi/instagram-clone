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
    paddingBottom: 280,
  },
  posts: {
    width: "100%",
  },
  post: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  profile: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    flexDirection: "row",
  },
  left: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 150,
  },
  profileContent: {
    marginLeft: 10,
  },
  profileName: {
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: 18,
  },
  location: {
    fontSize: 12,
    fontWeight: "normal",
    lineHeight: 14,
  },
  image: {
    width: "100%",
    height: 400,
  },
  imageFooter: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 20
  },
  imageFooterLeft: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  imageFooterRight: {},
  description: {
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingLeft: 20,
    paddingRight: 20,
  },
  descriptionText: {
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: 18,
  }
});
