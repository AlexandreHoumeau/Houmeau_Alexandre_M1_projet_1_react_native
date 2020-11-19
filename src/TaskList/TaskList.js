import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Task from "./Task";

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskArray: []
    }
    this.toggleTask = this.toggleTask.bind(this)
    this.removeTask = this.removeTask.bind(this)
  }

  toggleTask(taskId) {
    const { tasks } = this.props;
    const tmp = tasks;
    tmp.map(element => {
      if(element.id === taskId) {
        element.done = !element.done
      }
    })
    this.props.updateTaskArray(tmp)
  }

  removeTask(taskId) {
    const { tasks } = this.props;
    const tmp = tasks;
    tmp.splice(taskId, 1 )
    this.props.updateTaskArray(tmp)

  }

  render() {
    const { tasks } = this.props;

    return(
      <View>
        <FlatList 
          data={tasks}
          renderItem={( index, item ) => (
            <Task remove={this.removeTask} toggleTask={this.toggleTask} item={item, index}/>
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    )
  }
}

export default TaskList;