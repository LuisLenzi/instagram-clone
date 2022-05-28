import React from "react";

import { View } from "react-native";

import AddIcon from "../../assets/icons/add-icon.svg";
import HeartIcon from "../../assets/icons/heart.svg";
import ShareIcon from "../../assets/icons/share.svg";
import Logo from "../../assets/icons/instagram-logo.svg";

import { styles } from "./styles";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Logo width={135} height={50} />
      </View>

      <View style={styles.buttons}>
        <AddIcon style={styles.icon} width={25} height={25} />
        <HeartIcon style={styles.icon} width={25} height={25} />
        <ShareIcon style={styles.icon} width={25} height={25} />
      </View>
    </View>
  );
}
