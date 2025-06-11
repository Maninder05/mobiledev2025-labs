import { View, Text, Image,Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Apple() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Apple</Text>
      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg' }}
        style={{ width: 200, height: 200, marginTop: 20 }}
      />
      <Button title="Back to Fruits" onPress={() => router.back()} />
    </View>
  );
}
