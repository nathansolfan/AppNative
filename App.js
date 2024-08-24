import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View>
        <TextInput placeholder='Your course goal'/>
        <Button title='Add goal'/>
      </View>
      <View>
        <Text>List of goals</Text>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,d
  }
});




/* <View style={styles.container}>
      <Text style={styles.dummyText} >Banana Quente</Text>
      <Button title='Button'/>
      <StatusBar style="auto" />
</View> */

// container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // dummyText: {
  //   margin: 16,
  //   borderWidth: 2,
  //   padding: 16,
  //   borderColor: 'blue',
  // }