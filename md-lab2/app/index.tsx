import { View, Text, Button } from 'react-native';
import FruitList from '../components/FruitList';

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{fontSize:18, fontWeight:"bold" }}>Welcome to the Lab 1 Programmers!!</Text>
      <FruitList/>
    </View>
  );
}