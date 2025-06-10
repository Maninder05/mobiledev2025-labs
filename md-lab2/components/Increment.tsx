import { View, Button } from 'react-native';
import React from 'react';

type Props = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

export default function Increment({ count, setCount }: Props) {
  return (
    <View style={{ marginVertical: 10 }}>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </View>
  );
}
