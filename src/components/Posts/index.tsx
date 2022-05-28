import React from "react";

import { View, Image, Text, SafeAreaView, ScrollView } from "react-native";
import { PostData } from "../../@types/context";
import { styles } from "./styles";

interface PostProps {
  posts: PostData[];
}

import DotsIcon from "../../assets/icons/dots.svg";
import HeartIcon from "../../assets/icons/heart.svg";
import ShareIcon from "../../assets/icons/share.svg";
import CommentIcon from "../../assets/icons/comment.svg";
import BookmarkIcon from "../../assets/icons/bookmark.svg";

export default function Posts({ posts }: PostProps) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.posts}>
        {posts.map((post) => {
          return (
            <View style={styles.post} key={post.profile.id}>
              <View style={styles.profile}>
                <View style={styles.left}>
                  <Image
                    style={styles.profileImage}
                    source={post.profile.image}
                    resizeMode="contain"
                  />
                  <View style={styles.profileContent}>
                    <Text style={styles.profileName}>{post.profile.name}</Text>
                    <Text style={styles.location}>{post.location}</Text>
                  </View>
                </View>
                <DotsIcon width={20} height={20} />
              </View>
              <Image
                style={styles.image}
                source={post.image}
                resizeMode="cover"
              />
              <View style={styles.imageFooter}>
                <View style={styles.imageFooterLeft}>
                  <HeartIcon style={styles.icon} width={25} height={25} />
                  <CommentIcon style={styles.icon} width={25} height={25} />
                  <ShareIcon style={styles.icon} width={25} height={25} />
                </View>
                <View style={styles.imageFooterRight}>
                  <BookmarkIcon width={25} height={25} />
                </View>
              </View>
              <View style={styles.description}>
                <Text style={styles.descriptionText}>{post.description}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
