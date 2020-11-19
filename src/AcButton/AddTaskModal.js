import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, TouchableHighlight } from 'react-native';

class AddTaskModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: null
    }
  }

  submitValue() {
    const { newTask } = this.state;
    const newData = {
      id: Math.floor(Math.random() * 10000),
      title: newTask,
      done: false
    }
    this.props.closeView(newData)
  }

  toggleValue(text) {
    this.setState({
      newTask: text
    })
  }

  render() {
    const { newTask } = this.state;
    return(
      <View style={styles.container}>
        <Text style={{textAlign: 'center', fontSize: 25, fontWeight: 'bold'}}>Add a new task to your tasklist</Text>
        <View style={styles.inputContainer}>
          <TextInput value={newTask} onChangeText={(text) => this.toggleValue(text)} keyboardType="web-search" placeholder="New Task" style={styles.input} />
          <TouchableHighlight onPress={() => this.submitValue()} style={styles.button}>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>SUBMIT</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#F1F2F5'
  },
  input: {
    marginTop: 50,
    borderRadius: 5,
    padding: 20,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    
    elevation: 1,
  },
  inputContainer :{
    flexDirection: "column",
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  button: {
    backgroundColor: '#0B94F4',
    width: "100%",
    alignItems: "center",
    marginTop: 20,
    paddingVertical: 20,
    borderRadius: 5,
    shadowColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    
    elevation: 1,
  }
})

export default AddTaskModal;