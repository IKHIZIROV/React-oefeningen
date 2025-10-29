import { StatusBar } from 'expo-status-bar';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';

interface SquareProps {
  size: number;
  color: string;
}

interface AnotherSquareProps {
  style: StyleProp<ViewStyle>
}

const Square = ({size, color} : SquareProps) => {
  return (

    <View style={{width: size, height: size, backgroundColor: color}} />
  )
}

const AnotherSquare = ({style} : AnotherSquareProps) => {
  return (
    
    <View style={{width: 100, height: 100, }} />
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Square size={40} color={"black"} />
      <Square size={40} color={"firebrick"} />
      <Square size={40} color={"greenyellow"} />
      <Square size={40} color={"cyan"} />
      <Square size={40} color={"coral"} />

      <AnotherSquare style={{backgroundColor: "brown", height: 50, width: 70}} />


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: 'yellow',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
});
