import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Pressable } from 'react-native';

export default function App() {
  let sampleList=[
    {id:1, name: "Maninder", github_repo:"Maninder05", group_no:4},
    {id:2, name: "Eva", github_repo:"Evanandal", group_no:4},
    {id:3, name: "Kiran", github_repo:"", group_no:4},
  ]
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      {sampleList.map((item)=>
      (
        <Text key={item.id} style={{fontSize:20}}>
          {item.name}
        </Text>
      ))}
      <Pressable onPress={()=>alert("I'm done with my lab")}>
        <Text style={styles.button}>Hello There!</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    backgroundColor:"pink",
    padding: 20,
    marginTop: 20,
    fontSize: 16,
    color: 'blue'
  }
});
