import TweetList from "@/components/TweetList";
import { Profile, Tweet } from "@/types";
import React, { useEffect, useState } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";

const Index = () => {

      const [profiles, setProfiles] = useState<Profile[]>([])
      const [tweets, setTweets] = useState<Tweet[]>([])
      const [error, setError] = useState<Error>()
      const [loading, setLoading] = useState<boolean>(true)

      useEffect(() => {

        let cancelled = false;
        const loadData = async () => {
            setLoading(true)
            try {

                let response = await fetch("https://my-json-server.typicode.com/similonap/twitter-json-server/profiles")
                if (!response.ok) throw new Error ("Response is not ok!")
                if (cancelled) return;
                let profiles : Profile[] = await response.json()
                setProfiles(profiles)

                response = await fetch("https://my-json-server.typicode.com/similonap/twitter-json-server/tweets")
                if (!response.ok) throw new Error ("Response is not ok!")
                let tweets : Tweet[] = await response.json()
                tweets = tweets.map((tweet) => {
                  tweet.profile = profiles.find((profile) => profile.handle === tweet.handle)!
                  return tweet;
                })
                setTweets(tweets)

            } catch (e) {
                setError(e as Error)

            } finally {
                setLoading(false)

            }
        };

        loadData();

        return () => {
            cancelled = true;
        }
    }, []);

  return (
    <View style={styles.container}>
      <TweetList tweets={tweets}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
  }
});

export default Index;