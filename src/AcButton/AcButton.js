import React, { Component } from "react";
import { View, Text, Modal, Animated } from 'react-native';
import ActionButton from 'react-native-action-button';
import { FontAwesome5 } from '@expo/vector-icons';
import AddTaskModal from "./AddTaskModal";

ActionButton.prototype.animateButton = function(animate = true) {
  if (this.state.active) return this.reset();

  if (animate) {
    Animated.spring(this.anim, { toValue: 1, useNativeDriver: false }).start();
  } else {
    this.anim.setValue(1);
  }

  this.setState({ active: true, resetToken: this.state.resetToken });
}

ActionButton.prototype.reset = function (animate = true) {
  if (this.props.onReset) this.props.onReset();

  if (animate) {
    Animated.spring(this.anim, { toValue: 0, useNativeDriver: false }).start();
  } else {
    this.anim.setValue(0);
  }

  setTimeout(() => {
    if (this.mounted) {
      this.setState({ active: false, resetToken: this.state.resetToken });
    }
  }, 250);
}

class AcButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: false,
      taskArray: []
    }
    this.closeView = this.closeView.bind(this)
  }

  async addTaskToArray(newTask) {
    const { tasks } = this.props;
    this.setState({
      taskArray: await [...tasks, newTask]
    })
    this.props.updateTaskArray(this.state.taskArray)
  }

  closeView(newTask) {
    this.setState({
      isVisible: false
    })
    this.addTaskToArray(newTask)
  }
  render() {
    const { isVisible } = this.state;

    return(
      <View style={{flex: 1}}>
        <ActionButton position="center" buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='green' title="New Task" onPress={() => this.setState({isVisible: true})}>
            <FontAwesome5 name="pen" size={24} color="white" />
          </ActionButton.Item>
        </ActionButton>
        <Modal animationType='slide' visible={isVisible}>
          <AddTaskModal closeView={this.closeView}/>
        </Modal>
      </View>
    )
  }
}

export default AcButton;