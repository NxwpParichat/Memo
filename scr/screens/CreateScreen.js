import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import MemoForm from "../component/MemoForm";
import { Context } from "../context/BlogContext";

const CreateScreen = ({navigation}) => {
    const { addMemo } = useContext(Context);
    return (
        <View style={styles.container}>
            <MemoForm 
            onSubmit ={(title, content) => {
                addMemo(title, content);
                navigation.navigate('Index');
            }} 
        />
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#FB8DA0',
    },
});

export default CreateScreen;