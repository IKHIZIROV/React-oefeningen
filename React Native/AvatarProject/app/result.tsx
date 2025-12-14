import { View, Text, Pressable, StyleSheet, Animated } from "react-native";
import { Image } from "expo-image";
import { useLocalSearchParams, router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import { Colors } from "@/styles/theme";
import { loadProfile } from "@/storage/profileStorage";
import { getRank } from "@/utils/rank";
import { rankImages } from "@/utils/images";
import { Profile } from "@/types/profile";
import { Rank } from "@/types/rank";

export default function ResultScreen() {
  const { score } = useLocalSearchParams<{ score?: string }>();
  const numericScore = Number(score);

  const [highScore, setHighScore] = useState<number | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;

  useEffect(() => {
    loadProfile().then(setProfile);

    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 5,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  useEffect(() => {
    if (!Number.isNaN(numericScore)) checkHighScore();
  }, [score]);

  const checkHighScore = async () => {
    const stored = await AsyncStorage.getItem("highScore");
    if (stored === null || numericScore > Number(stored)) {
      await AsyncStorage.setItem("highScore", String(numericScore));
      setHighScore(numericScore);
    } else {
      setHighScore(Number(stored));
    }
  };

  const rank: Rank = profile
    ? getRank(profile.correctAnswers)
    : "Student";

  return (
    <View style={{ flex: 1, backgroundColor: Colors.parchment }}>
      <Header title="Resultaat" showBack />

      <Animated.View
        style={[
          styles.container,
          { opacity: fadeAnim, transform: [{ scale: scaleAnim }] },
        ]}
      >
        <Image
          source={rankImages[rank]}
          style={styles.rankImage}
          contentFit="contain"
        />

        <Text style={styles.score}>
          Score: {numericScore} / 5
        </Text>

        <Text style={styles.rank}>🏅 {rank}</Text>

        {highScore !== null && (
          <Text style={styles.highScore}>
            High score: {highScore} / 5
          </Text>
        )}

        <Pressable
          style={styles.button}
          onPress={() => router.replace("/")}
        >
          <Text style={styles.buttonText}>Terug naar Home</Text>
        </Pressable>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  rankImage: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  score: {
    fontSize: 22,
    marginBottom: 10,
  },
  rank: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 16,
  },
  highScore: {
    fontSize: 18,
    marginBottom: 30,
  },
  button: {
    backgroundColor: Colors.water,
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonText: {
    color: "white",
    fontWeight: "800",
  },
});
