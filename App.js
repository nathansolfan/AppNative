import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course goal'/>
        <Button title='Add goal'/>
      </View>
      <View>
        <Text>List of goalss</Text>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    // column is standard
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 8,
    // padding so text is not on the edge
    padding: 8
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