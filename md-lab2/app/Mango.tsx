import { View, Text, Image, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Mango() {
    const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Mango</Text>
      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Hapus_Mango.jpg' }}
        style={{ width: 200, height: 200, marginTop: 20 }}
          />
        <Button title="Back to Fruits" onPress={() => router.back()} />
    </View>
  );
}
