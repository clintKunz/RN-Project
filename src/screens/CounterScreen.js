import React, { useReducer } from "react";
import { Text, View, Button, StyleSheet, TouchableOpacity } from "react-native";

const reducer = (state, action) => {
    switch (action.description) {
        case "INCREMENT":
            return { value: state.value + action.payload };
        case "DECREMENT":
            return { value: state.value - action.payload };
        case "ZERO":
            return { value: 0 };
        default:
            return state;
    }
};

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { value: 0 });
    const { value } = state;
    return (
        <View style={{ flex: 1, alignItems: "center" }}>
            <Button
                title="+1"
                onPress={() =>
                    dispatch({ description: "INCREMENT", payload: 1 })
                }
            />
            <Button
                title="+5"
                onPress={() =>
                    dispatch({ description: "INCREMENT", payload: 5 })
                }
            />
            <Button
                title="+10"
                onPress={() =>
                    dispatch({ description: "INCREMENT", payload: 10 })
                }
            />
            <Button
                title="-1"
                onPress={() =>
                    dispatch({ description: "DECREMENT", payload: 1 })
                }
            />
            <Button
                title="-5"
                onPress={() =>
                    dispatch({ description: "DECREMENT", payload: 5 })
                }
            />
            <Button
                title="-10"
                onPress={() =>
                    dispatch({ description: "DECREMENT", payload: 10 })
                }
            />
            <Button
                title="Go to 0"
                onPress={() => dispatch({ description: "ZERO" })}
            />
            <Text style={{ fontSize: 24 }}>Current count: {value}</Text>
        </View>
    );
};

export default CounterScreen;
