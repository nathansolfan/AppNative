import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
  const [courseGoals, setCourseGoals] = useState([])  

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      // transformed enteredGoalText into object
      { text: enteredGoalText, key: Math.random().toString() },
    ])
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id)

    })
  }

  return (
    <View style={styles.appContainer}>
      {/* onAddGoal is passed from new component`s prop */}
      {/* on the prop, pass the function */}
      <GoalInput onAddGoal={addGoalHandler}/>
      <View style={styles.goalsContainer}>        
          <FlatList 
          data={courseGoals} 
          renderItem={(itemData) => {
            // FlatList need 2 props - data/renderItem, maps each item
            return <GoalItem 
            text={itemData.item.text}
            // pass the id to the prop 
            id={itemData.item.id}
            onDeleteItem={deleteGoalHandler}/>
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