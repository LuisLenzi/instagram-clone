import React from "react";

import { Image, View } from "react-native";

import HomeIcon from "../../assets/icons/home.svg";
import SearchIcon from "../../assets/icons/search.svg";
import ReelsIcon from "../../assets/icons/reels.svg";
import StoreIcon from "../../assets/icons/store.svg";
import ProfileIcon from "../../assets/icons/profile.svg";

import { styles } from "./styles";

export default function Menu() {
  return (
    <View style={styles.container}>
      <HomeIcon style={styles.icon} width={25} height={25} />
      <SearchIcon style={styles.icon} width={25} height={25} />
      <ReelsIcon style={styles.icon} width={25} height={25} />
      <StoreIcon style={styles.icon} width={25} height={25} />
      <View style={styles.profile}>
        <ProfileIcon width={25} height={25} />
      </View>
    </View>
  );
}
