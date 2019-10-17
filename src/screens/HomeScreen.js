import React from "react";
import { Text, View, Button, StyleSheet, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Button
                title="List View"
                onPress={() => navigation.navigate("List")}
            />
            <Button
                title="Image View"
                onPress={() => navigation.navigate("Image")}
            />
            <Button
                title="Counter View"
                onPress={() => navigation.navigate("Counter")}
            />
            <Button
                title="Color View"
                onPress={() => navigation.navigate("Color")}
            />
        </View>
    );
};

export default HomeScreen;
