import React, { useState} from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const MemoForm = ({onSubmit, initValues}) => {
    const [title, setTitle] = useState(initValues.title);
    const [content, setContent] = useState(initValues.content);
    return (
        <View>
            <Text style={style.label}>Title:</Text>
            <TextInput 
                style={style.input}
                value={title}
                onChangeText={(text) => setTitle(text)}
            />
            <Text style={style.label}>Content:</Text>
            <TextInput 
                style={style.input}
                multiline
                numberOfLines={5}
                value={content}
                onChangeText={(text) => setContent(text)}
            />
            <Button title="Submit Memo" onPress={() => {
                onSubmit(title, content);
            }} />
        </View>
    )
}

MemoForm.defaultProps = {
    initValues: { title: '', content: ''}
}

const style= 
StyleSheet.create({
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5,
    },
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#ff6f00',
        borderRadius: 5,
        padding: 5,
        paddingLeft: 10,
        margin: 10,
        marginBottom: 15,
    }
});

export default MemoForm;