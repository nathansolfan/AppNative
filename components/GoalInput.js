import { useState } from "react";
import { StyleSheet, View, Button, TextInput, Modal } from "react-native";

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler (enteredText) {
        setEnteredGoalText(enteredText)
    }

    // instead of passing the props. improve the props and pass it as func
    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        // empty string once goal is added
        setEnteredGoalText('');
    }

    return (
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
        <TextInput 
        style={styles.textInput} 
        placeholder='Your course goal' 
        onChangeText={goalInputHandler}
        value={enteredGoalText}
        /> 
        <View style={styles.buttonContainer}>
        {/* onPress={}  */}
        <View style={styles.button}><Button title='Add goal' onPress={addGoalHandler}/></View>
        <View style={styles.button}><Button title='Cancel' onPress={props.onCancel}/></View>
         
        
        


        </View>     

       
      </View>
      </Modal>

    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        // column is standard
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',        
      },
    
      textInput: {        
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '90%',
        // padding so text is not on the edge
        padding: 8
      },

      buttonContainer: {
        flexDirection: 'row',
        marginTop: 16,
      },

      button: {
        width: '30%',
        marginHorizontal: 8
      }
})

