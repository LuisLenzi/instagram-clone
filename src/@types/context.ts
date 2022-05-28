import { ImageSourcePropType } from "react-native";

export type StoryData = {
  id: number;
  image: ImageSourcePropType;
  name: string;
};

export type ProfileData = {
  id: number;
  image: ImageSourcePropType;
  name: string;
};

export type PostData = {
  id: number;
  location: string;
  image: ImageSourcePropType;
  description: string;
  profile: ProfileData;
};
