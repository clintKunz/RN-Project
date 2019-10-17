import React, { useState, useEffect } from "react";
import {
    Text,
    View,
    Button,
    StyleSheet,
    TouchableOpacity,
    Slider
} from "react-native";

const ColorScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    return (
        <View style={{ flex: 1, alignItems: "center" }}>
            <Text style={{ margin: 20 }}>Color Slider</Text>
            <Text>Add Red</Text>
            <Slider
                style={{ width: 200, height: 40 }}
                minimumValue={0}
                maximumValue={255}
                minimumTrackTintColor="red"
                onValueChange={e => setRed(e)}
            />
            <Text>Add Green</Text>
            <Slider
                style={{ width: 200, height: 40 }}
                minimumValue={0}
                maximumValue={255}
                minimumTrackTintColor="green"
                onValueChange={e => setGreen(e)}
            />
            <Text>Add Blue</Text>
            <Slider
                style={{ width: 200, height: 40 }}
                minimumValue={0}
                maximumValue={255}
                minimumTrackTintColor="blue"
                onValueChange={e => setBlue(e)}
            />
            <View
                style={{
                    marginTop: 20,
                    width: 75,
                    height: 75,
                    backgroundColor: `rgb(${red}, ${green}, ${blue})`
                }}
            />
        </View>
    );
};

export default ColorScreen;
