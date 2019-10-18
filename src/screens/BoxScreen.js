import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = props => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle1}>BoxScreen1</Text>
            <Text style={styles.textStyle2}>BoxScreen2</Text>
            <Text style={styles.textStyle3}>BoxScreen3</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        height: 300,
        borderWidth: 1,
        borderColor: "black",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    textStyle1: {
        height: 100,
        width: 100,
        borderWidth: 1,
        borderColor: "red"
    },
    textStyle2: {
        height: 100,
        width: 100,
        borderWidth: 1,
        borderColor: "purple",
        alignSelf: "flex-end"
    },
    textStyle3: {
        height: 100,
        width: 100,
        borderWidth: 1,
        borderColor: "green"
    }
});

export default BoxScreen;
