import React, { Component } from "react";
import { View, Text, StyleSheet } from 'react-native';
import Top from "./Top/Top";
import TaskList from "./TaskList/TaskList";
import AcButton from "./AcButton/AcButton";

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      completedTasks: 0,
      tasks: 0,
      taskArray: []
    }
    this.updateTaskArray = this.updateTaskArray.bind(this)
  }

  componentDidMount() {
    this.manageTasklist()
  }

  manageTasklist() {
    const { taskArray, tasks, completedTasks } = this.state;
    this.setState({
      tasks: taskArray.length,
      completedTasks: taskArray.filter(taskArray=> taskArray.done).length
    })
  }

  updateTaskArray(array) {
    this.setState({
      taskArray: array,
    })
    this.manageTasklist()
  }

  render() {
    const { completedTasks, tasks, taskArray } = this.state; 
    return(
      <View style={styles.container}>
        <Top completedTasks={completedTasks} tasks={tasks}/>
        <TaskList tasks={taskArray} updateTaskArray={this.updateTaskArray} />
        {taskArray.length === 0 ? <Text style={styles.informations}>You have no tasks yet</Text>:null}
        <AcButton tasks={taskArray} updateTaskArray={this.updateTaskArray} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 30
  },
  informations: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 20

  }
})

export default Home;