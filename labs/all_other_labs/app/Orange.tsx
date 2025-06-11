import { View, Text, Image, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Orange() {
    const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Orange</Text>
      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg' }}
        style={{ width: 200, height: 200, marginTop: 20 }}
      />
     <Button title="Back to Fruits" onPress={() => router.back()} />
    </View>
  );
}
