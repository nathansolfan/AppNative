import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([])

  function goalInputHandler (enteredText) {
    setEnteredGoalText(enteredText)
  } 

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals, enteredGoalText
    ])
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
        style={styles.textInput} 
        placeholder='Your course goal' 
        onChangeText={goalInputHandler}/>
        {/* onPress={}  */}
        <Button title='Add goal' onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        <View>
          <FlatList>
        {/* use key method to display each goal */}
        {courseGoals.map((goal) => (
          <View style={styles.goalItem} key={goal}>
          <Text style={styles.goalText}>{goal}</Text>          
          </View>
        ))}
        </FlatList>          
        </View>
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
  },

  goalItem: {
    margin: 8,
    padding: 6,
    borderRadius: 6,
    backgroundColor: '#5e0acc',   
  },

  goalText: {
    color: 'white',
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