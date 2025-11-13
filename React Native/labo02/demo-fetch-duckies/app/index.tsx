import { useEffect, useState } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import { Duckie } from "@/types";
import DuckieView from "@/components/DuckieView";

const Index = () => {

  const [duckies, setDuckies] = useState<Duckie[]>([])
  const [error, setError] = useState<Error>()
  const [loading, setLoading] = useState<boolean>(true)
  const [trigger, setTrigger] = useState(0)

  useEffect(() => {

    let cancelled = false;
    const fetchDuckies = async () => {
    setLoading(true)
      try {
        const response = await fetch("https://raw.githubusercontent.com/similonap/json/refs/heads/master/duckies/duckies.json")
        if (!response.ok) throw new Error ("Response is not ok!")
        if (cancelled) return;
        setDuckies(await response.json())

      } catch (e) {
        setError(e as Error)

      } finally {
        setLoading(false)

      }
    }
    fetchDuckies();

    return () => {
      cancelled = true;
    }
  }, [trigger]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/*
        <ScrollView>
          {
            duckies.map(duckie => <DuckieView key={duckie.id} duckie={duckie}/>)
          }
        </ScrollView>
      */}

      <FlatList
        refreshing={() => {setTrigger(1)}}
        horizontal={false}
        data={duckies}
        keyExtractor={item => item.id}
        renderItem={(props) => <DuckieView  duckie={props.item}/>}
      />

    </View>
  );
}

export default Index;