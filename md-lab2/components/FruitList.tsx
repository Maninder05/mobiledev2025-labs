// components/FruitList.tsx
import { View, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

const fruits = ['Apple', 'Orange', 'Mango'];

export default function FruitList() {
  const router = useRouter();

  return (
    <View>
      {fruits.map((fruit) => (
        <Pressable key={fruit} onPress={() => router.push(`/${fruit}`)}>
          <Text style={{ fontSize: 20, margin: 5 }}>{fruit}</Text>
        </Pressable>
      ))}
    </View>
  );
}
