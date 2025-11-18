import { Profile, Tweet } from "@/types";
import React from "react";
import { View, Text, Image, FlatList, Pressable } from "react-native";
import { tweetStyles as styles } from "./tweetStyles";

interface TweetViewProps {
  tweet: Tweet;
}

const TweetView = ({ tweet }: TweetViewProps) => {
  const profile = tweet.profile!;

  return (
    <View style={styles.container}>
      <Image source={{ uri: profile.avatar }} style={styles.avatar} />

      <Pressable onPress={() => {}}>
        <View style={styles.body}>
          <View style={styles.headerRow}>
            <Text style={styles.name}>{profile.name}</Text>
            <Text style={styles.handle}>@{tweet.handle}</Text>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.date}>{tweet.createdOn}</Text>
          </View>
          <Text style={styles.text}>{tweet.text}</Text>
        </View>
      </Pressable>
    </View>
  );
};

interface TweetListProps {
  tweets: Tweet[];
}

const TweetList = ({ tweets }: TweetListProps) => {
  return (
    <View>
      <FlatList
        data={tweets}
        renderItem={({ item }) => <TweetView tweet={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default TweetList;
