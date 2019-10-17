import React, { useState } from "react";
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from "react-native";
import uuid from "uuid";

const ListScreen = () => {
    const [list, setList] = useState([]);
    const [value, setValue] = useState("");

    const toggle = id => {
        const newList = list.map(item => {
            if (item.id === id) {
                const temp = item.completed;
                item.completed = !temp;
                return item;
            } else return item;
        });
        setList(newList);
    };

    const remove = id => {
        const newList = list.filter(item => item.id !== id);
        setList(newList);
    };

    return (
        <View>
            <Text style={styles.text}>Add Todo:</Text>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={e => setValue(e)}
                autoCapitalize="none"
                autoCorrect={false}
                onSubmitEditing={() => {
                    const newItem = {
                        title: value,
                        id: uuid(),
                        completed: false
                    };
                    setValue("");
                    setList(oldList => [...oldList, newItem]);
                }}
            />
            <FlatList
                data={list}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => toggle(item.id)}>
                        <Text style={styles.items}>
                            {item.completed ? "😊" : "☹️"} {item.title}
                            <Text
                                style={styles.remove}
                                onPress={() => remove(item.id)}
                            >
                                ❌
                            </Text>
                        </Text>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        margin: 10,
        fontSize: 24
    },
    items: {
        margin: 10,
        fontSize: 18
    },
    input: {
        height: 40,
        margin: 10,
        borderColor: "gray",
        borderWidth: 1
    },
    remove: {
        margin: 30
    }
});

export default ListScreen;
