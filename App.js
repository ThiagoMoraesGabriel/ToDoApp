import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarefas</Text>

      <View style={styles.blocoUm}></View>
      <View style={styles.blocoDois}></View>
      <View style={styles.blocoTres}></View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  blocoUm: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  blocoDois: {
    width: 100,
    height: 100,
    backgroundColor: 'green'
  },
  blocoTres: {
    width: 100,
    height: 100,
    backgroundColor: 'blue'
    
  },
  title: {
    fontSize: 30,
    alignItems: 'center',
    padding: 20,
    fontWeight: 'bold',
    color: '#070706'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'

  }
});