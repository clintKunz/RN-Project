import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ImageDetail = ({ imageSource, title }) => {
    return (
        <View style={styles.container}>
            <Image source={imageSource} />
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    constainer: {
        flex: 1
    },
    text: {
        fontSize: 16
    }
});

export default ImageDetail;
