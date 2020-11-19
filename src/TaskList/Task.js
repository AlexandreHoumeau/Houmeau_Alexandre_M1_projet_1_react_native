import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

class Task extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item, index } = this.props.item;
    return (
      <View style={styles.task}>
        <TouchableOpacity onPress={() => this.props.toggleTask(item.id)} style={styles.taskContainer}>
          <AntDesign
            name="checkcircleo"
            size={24}
            color={item.done ? "green" : "#ccc"}
          />
          <Text style={[styles.taskTitle, { color: item.done ? "black" : "#ccc" }]}>
            {item.title}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.remove(index)} style={styles.task}>
          {item.done ? <Feather name="trash-2" size={24} color="#ccc" /> : null}
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  task: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    marginVertical: 10,
  },
  taskContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  taskTitle: {
    fontWeight: "bold",
    marginLeft: 20
  }
});

export default Task;
