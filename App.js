import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([])

  function goalInputHandler (enteredText) {
    setEnteredGoalText(enteredText)
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      // transformed enteredGoalText into object
      { text: enteredGoalText, key: Math.random().toString() },
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
        
          <FlatList 
          data={courseGoals} 
          renderItem={(itemData) => {
            // FlatList need 2 props - data/renderItem, maps each item
            return (
            
          )
          }}/>
      </View>
    </View>
    
  );
}


{/* use key method to display each goal */}
{/* <ScrollView>
{courseGoals.map((goal) => ()}
</ScrollView> */}






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