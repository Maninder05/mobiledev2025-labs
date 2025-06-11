import { View, Text,Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Lab 3!!</Text>
      <Pressable style={styles.btn} onPress={() => router.push('/Page')}>
        <Text style={styles.btnText}>Go To LAB 3</Text>
      </Pressable>
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
    fontSize: 24,
    color: "purple",
    marginBottom: 20,
    textAlign: 'center',
  },
  btn: {
    backgroundColor: 'beige',
    margin: 20,
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center', // to align text within btn in center
  },
  btnText: {
    fontWeight: 'bold',
  },
});
