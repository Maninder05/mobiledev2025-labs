import { useState } from 'react';     //useState hook will automat change the state of the component thereby incrementing count 
import { View, Text, StyleSheet } from 'react-native';
import Increment from    '../components/Increment';
import Decrement from '../components/Decrement';

export default function Lab3() {
  const [count, setCount] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Initial Count: {count}</Text>
      <Increment count={count} setCount={setCount} />
      <Decrement count={count} setCount={setCount} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 20,
  },
});
