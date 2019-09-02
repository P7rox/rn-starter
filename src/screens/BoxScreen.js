import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Box Screen #1</Text>
            <Text style={styles.textStyle}>Box Screen #2</Text>
            <Text style={styles.textStyle}>Box Screen #3</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 4,
        borderColor: "black",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-around",
        height: 400
    },
    textStyle: {
        borderWidth: 3,
        borderColor: "red"
    }
});

export default BoxScreen;
