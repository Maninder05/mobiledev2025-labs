import { supabase } from './supabase';

export const addUser = async (
  name: string,
  age: number,
  gpa: number,
  gender: string,
  major: string
) => {
  const { data, error } = await supabase
    .from('sampledatabase')
    .insert([{ name, age, gpa, gender, major }]);
  if (error) throw error;
  return data;
};

export const getUsers = async () => {
  const { data, error } = await supabase
    .from('sampledatabase')
    .select('*');
  if (error) throw error;
  return data;
};

export const updateUser = async (
  id: number,
  fields: { name?: string; age?: number; gpa?: number; gender?: string; major?: string }
) => {
  const { data, error } = await supabase
    .from('sampledatabase')
    .update(fields)
    .eq('id', id);
  if (error) throw error;
  return data;
};

export const deleteUser = async (id: number) => {
  const { data, error } = await supabase
    .from('sampledatabase')
    .delete()
    .eq('id', id);
  if (error) throw error;
  return data;
};
