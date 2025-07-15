import React, { useEffect, useState } from 'react';
import {useRouter} from 'expo-router';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { getUsers, addUser, deleteUser, updateUser } from '../lib/supabase_crud';

const router= useRouter();

export default function Lab5() {
  const [users, setUsers] = useState<any[]>([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gpa, setGpa] = useState('');
  const [gender, setGender] = useState('');
  const [major, setMajor] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);

  const fetchUsers = async () => {
    const data = await getUsers();
    setUsers(data || []);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAddOrUpdate = async () => {
    if (editingId !== null) {
      await updateUser(editingId, {
        name,
        age: parseInt(age),
        gpa: parseFloat(gpa),
        gender,
        major,
      });
      setEditingId(null);
    } else {
      await addUser(name, parseInt(age), parseFloat(gpa), gender, major);
    }
    clearForm();
    fetchUsers();
  };

  const handleEdit = (user: any) => {
    setEditingId(user.id);
    setName(user.name);
    setAge(String(user.age));
    setGpa(String(user.gpa));
    setGender(user.gender);
    setMajor(user.major);
  };

  const handleDelete = async (id: number) => {
    await deleteUser(id);
    fetchUsers();
  };

  const clearForm = () => {
    setName('');
    setAge('');
    setGpa('');
    setGender('');
    setMajor('');
    setEditingId(null);
  };

  return (
    <View style={styles.container}>
         <Button title="Back" onPress={() => router.back()} />
      <Text style={styles.title}>{editingId ? 'Update User' : 'Add User'}</Text>
      
      <TextInput placeholder="Name" style={styles.input} value={name} onChangeText={setName} />
      <TextInput placeholder="Age" style={styles.input} value={age} onChangeText={setAge} keyboardType="numeric" />
      <TextInput placeholder="GPA" style={styles.input} value={gpa} onChangeText={setGpa} keyboardType="numeric" />
      <TextInput placeholder="Gender" style={styles.input} value={gender} onChangeText={setGender} />
      <TextInput placeholder="Major" style={styles.input} value={major} onChangeText={setMajor} />
      
      <Button title={editingId ? "Update User" : "Add User"} onPress={handleAddOrUpdate} />

      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.userItem}>
            <Text>{item.name}, {item.age}, {item.gpa}, {item.gender}, {item.major}</Text>
            <View style={styles.actionRow}>
              <TouchableOpacity onPress={() => handleEdit(item)} style={styles.buttonUpdate}>
                <Text style={styles.buttonText}>Update</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDelete(item.id)} style={styles.buttonDelete}>
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 30 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  input: { borderWidth: 1, padding: 8, marginBottom: 10, borderRadius: 5 },
  userItem: { padding: 10, borderBottomWidth: 1, borderColor: '#ccc' },
  actionRow: { flexDirection: 'row', marginTop: 5 },
  buttonUpdate: { marginRight: 10, backgroundColor: '#4CAF50', padding: 5, borderRadius: 5 },
  buttonDelete: { backgroundColor: '#F44336', padding: 5, borderRadius: 5 },
  buttonText: { color: 'white' }
});

