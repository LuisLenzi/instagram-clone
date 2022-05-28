import React, { useEffect, useState } from "react";

import { View } from "react-native";

import { styles } from "./styles";

import Menu from "../../components/Menu";
import Story from "../../components/Story";
import Header from "../../components/Header";

import { PostData, StoryData } from "../../@types/context";

import { handlePostData, handleStoryData } from "../../api/data";
import Posts from "../../components/Posts";

export default function Home() {
  const [storyData, setStoryData] = useState<StoryData[]>([]);
  const [postData, setPostData] = useState<PostData[]>([]);

  async function getStoryData() {
    const data = await handleStoryData();
    return setStoryData(data);
  }

  async function getPostData() {
    const data = await handlePostData();
    return setPostData(data);
  }

  useEffect(() => {
    getPostData();
    getStoryData();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <Story stories={storyData} />
      <Posts posts={postData} />
      <Menu />
    </View>
  );
}
