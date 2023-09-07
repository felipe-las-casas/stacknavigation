import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { TextInput, Button, StyleSheet, Text, View } from 'react-native';
import { AuthNavigatornRoutesProps } from '../routes/auth.routes';

export default function Logout() {

  const navigation = useNavigation<AuthNavigatornRoutesProps>();

  function handleLogin() {
    navigation.navigate('logout');
  }

  function handleGoBack() {
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Logout</Text>
      <TextInput
        style={styles.input}
        placeholder="e-mail"
      />
      <Button
        title='Criar'
        onPress={handleLogin}
      />
      <Button
        title='Voltar Login'
        onPress={handleGoBack}
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
