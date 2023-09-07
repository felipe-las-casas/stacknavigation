import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
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
      <Text>Login</Text>
      <TextInput
        placeholder="e-mail"
        onChangeText={email => setEmail(email)}
        value={email}
      />
      <Button
        title='Entrar'
        onPress={handleEnter}
      />
       <Button
        title='Criar Login'
        onPress={handleNewLogin}
      />
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
});
