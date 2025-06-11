import { View, Button } from 'react-native';
import React from 'react';

type Props = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>; //Dispatch method will simultaneously set the decremented val as the updated state 
};

export default function Decrement({ count, setCount }: Props) { 
  return (
    <View style={{ marginVertical: 10 }}>
      <Button title="Decrement" onPress={() => setCount(count - 1)} />
    </View>
  );
}
