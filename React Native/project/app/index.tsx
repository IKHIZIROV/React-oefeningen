import { Question } from "@/types";
import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

const Index = () => {

  const [questions, setQuestions] = useState<Question[]>([])
  const [error, setError] = useState<Error>()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {

    let cancelled = false;
    const fetchQuestions = async () => {
    setLoading(true)
      try {
        const response = await fetch("https://sampleapis.assimilate.be/avatar/questions")
        if (!response.ok) throw new Error ("Response is not ok!")
        if (cancelled) return;
        setQuestions(await response.json())

      } catch (e) {
        setError(e as Error)

      } finally {
        setLoading(false)

      }
    }
    fetchQuestions();

    return () => {
      cancelled = true;
    }
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      <FlatList
        data={questions}
        renderItem={({ item }) => item.question}
        keyExtractor={(item) => item.id.toString()}
      />

    </View>
  );
}

export default Index;