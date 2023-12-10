import { View, Switch, Text, StyleSheet } from "react-native";
import { useState } from "react";

const TodoItem = ({ item, onToggleComplete }) => {
   
    const toggleSwitch = () => {
      onToggleComplete(item.id) 
    };
  
    return (
      <View style={styles.container}>
        <View style={styles.itemCon}>
        <Text style = {{fontWeight:'600',fontSize:18 }}>{item.name}</Text>
        <Text style={{color: item.isComplete ? "green" : 'red' , fontWeight:'500'}}> {item.isComplete == true ? "DONE" : "PENDING"} </Text>
        </View>
        <Switch
          value={item.isComplete}
          onValueChange={toggleSwitch}
          testID="toggleButton"
        />
      </View>
    );
  };






const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        alignSelf:'stretch',
        marginHorizontal:10,
        marginVertical:10,
        
    },
    itemCon:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignSelf:'flex-start'


    }
  });
  
  export default TodoItem;
