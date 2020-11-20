import React, { Component } from "react";
import { View, Text, StyleSheet } from 'react-native';
import moment from "moment";

class Top extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment(Date.now()).format('ll'),
    }
  }

  render() {
    const { date } = this.state;
    const { tasks, completedTasks } = this.props;
    return(
      <View style={styles.container}>
        <Text style={styles.title}>{date}</Text>

        <View style={styles.subContainer}>
          <View>
            <Text style={styles.count}>{tasks}</Text>
            <Text style={{color: '#ccc'}}>Created tasks</Text>
          </View>

          <View>
            <Text style={[styles.count, {textAlign: "right"}]}>{completedTasks}</Text>
            <Text style={{color: '#ccc'}}>Completed tasks</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  count: {
    fontWeight: 'bold'
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20
  }
})

export default Top;