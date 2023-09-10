import { useNavigation } from '@react-navigation/native';
import { TextInput, Button, StyleSheet, Text, View } from 'react-native';
import { AuthNavigatornRoutesProps } from '../routes/auth.routes';
import { useState } from 'react';

export default function Login() {

  const navigation = useNavigation<AuthNavigatornRoutesProps>();

  const [email, setEmail] = useState('');

  function handleNewLogin() {
    navigation.navigate('logout');
  }

  function handleEnter() {
    navigation.navigate('listDiscipline');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        placeholder="e-mail"
        onChangeText={email => setEmail(email)}
        value={email}
        style={styles.input}
      />
      <Button
        title='Entrar'
        onPress={handleEnter}
      />
       <Button
        title='Criar Login'
        onPress={handleNewLogin}
      />
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
  input: {
    marginVertical: 10,
    padding: 12,
    backgroundColor: '#222',
    color: '#fff'
  },
  title: {
    marginVertical: 10,
    fontWeight: 'bold'
  },
  
});
