import { useState } from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler (enteredText) {
        setEnteredGoalText(enteredText)
    }

    // instead of passing the props. improve the props and pass it as func
    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
    }

    return (
        <View style={styles.inputContainer}>
        <TextInput 
        style={styles.textInput} 
        placeholder='Your course goal' 
        onChangeText={goalInputHandler}/>
        {/* onPress={}  */}
        <Button title='Add goal' onPress={addGoalHandler}/>
      </View>

    )
}

export default GoalInput

const styles = StyleSheet.create({
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
})

