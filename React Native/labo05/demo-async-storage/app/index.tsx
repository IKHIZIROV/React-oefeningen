import { useEffect, useState } from "react";
import { Button, Pressable, ScrollView, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"

const Cookie = () => {
  return(
    <Pressable>
      <View
        style={{
          width: 200, height: 200, borderRadius: 100, backgroundColor: "brown"
        }}
      />
    </Pressable>
  )
}

interface Item {
  id: number;
  price: number;
  name: string;
  amount: number;
  cps: number;
}

const DEFAULT_ITEMS : Item[] = [
  {id: 0, price: 15, name: "pointer", amount: 0, cps: 0.1},
  {id: 1, price: 100, name: "grandma", amount: 0, cps: 1},
  {id: 2, price: 500, name: "farm", amount: 0, cps: 8},
]

const Index = () => {

  const [cookies, setCookies] = useState<number>(0);
  const [inventory, setInventory] = useState<Item[]>(DEFAULT_ITEMS);

  useEffect(() => {
    const interval = setInterval(() => {
      setCookies(cookies => cookies +1)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    const loadData = async() => {
      const value = AsyncStorage.getItem("cookies")
      if (value !== undefined) {
        setCookies(Number(value))
      }
    }; loadData();
  }, [])

  useEffect(() => {
    AsyncStorage.setItem("cookies", cookies.toString());
  }, [cookies])

  const reset = async() => {
    setCookies(0);
  }

  const buyItem = (item: Item) => {
    if (cookies >= item.price) {
      setCookies(cookies => cookies - item.price);

      inventory.map(i => {
        if (i.id === item.id) {
          return {
            ...item,
            amount: item.amount + 1
          }
        } else {
          return i;
        }
      })
    } else {
      alert("Not enough cookies!");
    }
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        <Text>{cookies}</Text>
        <Cookie/>
        <Button title="Reset the world" onPress={reset}/>
        
        <ScrollView>
          {
            inventory.map(item => <Button title={`${item.name}, ${item.price}`} />)
          }
        </ScrollView>

      </View>
    </View>
  );
}

export default Index;