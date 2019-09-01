import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    return (
        <View>
            <Text>Enter name:</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={newValue => setName(newValue)}
            />
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                onChangeText={newValue => setPassword(newValue)}
            />
            <Text>My name is {name}</Text>
            {password.length <= 5 ? (
                <Text>The length of the name should be greater then 5</Text>
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: "black",
        borderWidth: 1
    }
});

export default TextScreen;
