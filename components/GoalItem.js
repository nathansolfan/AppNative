import { StyleSheet, View, Text } from "react-native";
// no need import React

// pass the props - itemData.item.text
function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>{props.text}</Text>          
          </View>
    )

};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 6,
        borderRadius: 6,
        backgroundColor: '#5e0acc',   
      },
    
      goalText: {
        color: 'white',
      }
})