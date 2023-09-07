import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { TextInput, Button, StyleSheet, Text, View } from 'react-native';
import { AuthNavigatornRoutesProps } from '../routes/auth.routes';

export default function NewDiscipline() {

  const navigation = useNavigation<AuthNavigatornRoutesProps>();
  
  function handleNewDiscipline() {
    navigation.navigate('listDiscipline');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nova Disciplina</Text>
      <Text>Crie uma disciplina para adicionar alunos</Text>
      <TextInput
        placeholder="Disciplina"
      />
      <Button
        title='Criar'
        onPress={handleNewDiscipline}
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
