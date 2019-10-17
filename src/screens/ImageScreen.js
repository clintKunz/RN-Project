import React from "react";
import { View, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: "center" }}>
            <ImageDetail
                title="Beach"
                imageSource={require("../../assets/beach.jpg")}
            />
            <ImageDetail
                title="Forest"
                imageSource={require("../../assets/forest.jpg")}
            />
            <ImageDetail
                title="Mountain"
                imageSource={require("../../assets/mountain.jpg")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 24
    }
});

export default ImageScreen;
