import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  function goalInputHandler (enteredText) {
    console.log(enteredText);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
        style={styles.textInput} 
        placeholder='Your course goal' 
        onChangeText={goalInputHandler}/>
        <Button title='Add goal'/>
      </View>
      <View style={styles.goalsContainer}>
        <Text >List of goalssss</Text>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },

  inputContainer: {
    flex: 1,
    // column is standard
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    
  },

  textInput: {
    
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    // padding so text is not on the edge
    padding: 8
  },

  goalsContainer: {
    flex: 5,

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