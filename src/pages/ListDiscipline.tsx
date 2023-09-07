import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { AuthNavigatornRoutesProps } from '../routes/auth.routes';

export default function ListDiscipline() {
  const navigation = useNavigation<AuthNavigatornRoutesProps>();
  
  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista Disciplina</Text>
      <Text>Nome da Disciplina</Text>
      <Button
        title="Voltar"
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
  title: {
    fontWeight: 'bold'
  }
});
