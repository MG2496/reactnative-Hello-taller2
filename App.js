import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.welcome, {flex: 5, backgroundColor: 'orange'},{color: 'white'}]}>Hellos React Native 🫡</Text>
      <Text style={[styles.welcome, {flex: 4, backgroundColor: 'gray'},{color: 'white'}]}>Hellos React Native 🤓</Text>
      <Text style={[styles.welcome, {flex: 3, backgroundColor: 'black'},{color: 'white'}]}>Hellos React Native 🫥</Text>
      <Text style={[styles.welcome, {flex: 2, backgroundColor: 'green'},{color: 'white'}]}>Hellos React Native 😵‍💫</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    //alignItems: 'center',
    backgroundColor: 'brown'
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    
    margin: 10,

  },
});
