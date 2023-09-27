import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity, Alert } from 'react-native';
import React, { useContext } from 'react';
import { Context } from '../context/BlogContext';

import { Ionicons } from '@expo/vector-icons';


const IndexScreen = ({navigation}) => {
  const {state, addMemo, delMemo} = useContext(Context);

  const ConfirmDelete = (id) => {
    return Alert.alert(
      'Delete?',
      'Confirm Delete?',
      [
        {
          text: 'Cancle',
          onPress:()=>console.log('Cancle to delete'),
          style: 'cancel'
        },
        {
          text: 'Confirm',
          onPress:()=>delMemo(id),
        },
      ],
      { cancelable:false}
    )
  }
  return(
    <View style={styles.container}>
      {/* <Text style={{ fontSize: 20, fontWeight: 'bold'}}>Hello</Text>
      <View style={styles.buttonContainer}>
        <Button title='Add Memo' color='#E6B794'  onPress={addMemo} />
        
      </View> */}

      <FlatList
        data={state}
        keyExtractor={(memo) => memo.title}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("Show", {id: item.id})}>
            <View style={styles.buttonContainer}>
            <Text>{item.title}-{item.id}</Text>
            <TouchableOpacity onPress={() => ConfirmDelete(item.id) }>
              <Ionicons name="ios-trash-bin-outline" size={24} color="black" />
            </TouchableOpacity>
            </View>
            </TouchableOpacity>
          );
        }}
      />
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B8DDD6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  buttonContainer: {
    width: 100,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default IndexScreen;

  