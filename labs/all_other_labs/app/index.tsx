import { View, Text, Pressable, StyleSheet} from 'react-native';
import FruitList from '../components/FruitList';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{fontSize:18, fontWeight:"bold" }}>Welcome to the Lab 2 Programmers!!</Text>
      <FruitList/>
      <Text style={styles.title}>Welcome to Lab 3!!</Text>
      <Pressable style={styles.btn} onPress={() => router.push('/lab3')}>
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
    height:50,
    width: 150,
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center', // to align text within btn in center
  },
  btnText: {
    fontWeight: 'bold',
  },
});
