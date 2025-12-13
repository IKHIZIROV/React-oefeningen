import { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { fetchQuestions } from "../api/questionsApi";
import { Question } from "../types/question";

export default function QuestionDetailScreen() {

  const params = useLocalSearchParams<{ id?: string | string[] }>();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const [question, setQuestion] = useState<Question | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      loadQuestion();
    }  
  }, [id]);

  const loadQuestion = async () => {
    if (!id) {
      setQuestion(null);
      setLoading(false);
      return;
    }

    try {
      const data = await fetchQuestions();
      const found = data.find((q) => q.id === Number(id));
      setQuestion(found || null);
    } finally {
      setLoading(false);
    }
  };


  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text>Vraag laden...</Text>
      </View>
    );
  }

  if (!question) {
    return (
      <View style={styles.center}>
        <Text>Vraag niet gevonden</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question.question}</Text>
      <Text style={styles.answer}>{question.answer}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  question: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 16,
  },
  answer: {
    fontSize: 16,
    lineHeight: 22,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
