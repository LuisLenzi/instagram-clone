import React from "react";

import { View, Image, Text, SafeAreaView, ScrollView } from "react-native";
import { StoryData } from "../../@types/context";
import { styles } from "./styles";

import AddStoryIcon from "../../assets/icons/add-story.svg";

interface StoryProps {
  stories: StoryData[];
}

export default function Story({ stories }: StoryProps) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView horizontal={true} style={styles.images}>
        {stories.map((story) => {
          return (
            <View style={styles.image} key={story.id}>
              <View style={styles.border}>
                <Image
                  style={styles.story}
                  source={story.image}
                  resizeMode="contain"
                />
              </View>
              {story.id === 1 && (
                <View style={styles.addStory}>
                  <AddStoryIcon width={32} height={32} />
                </View>
              )}
              <Text style={styles.name}>{story.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
