import React from "react";
import {connect} from "react-redux";
//import * as taskActions from "./taskActions";
//import PropTypes from "prop-types";

class TasksPage extends React.Component {
  state = {
    task: {
      title: "",
    },
  };

  handleChange = (event: {target: {value: any}}) => {
    const task = {...this.state.task, title: event.target.value};
    this.setState({task});
  };

  handleSubmit = (event: {preventDefault: () => void}) => {
    event.preventDefault();
    //  this.props.dispatch(taskActions.createTask(this.state.task));
  };
  // static propTypes: {dispatch: any};

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>To Do</h2>
        <h3>Add New Task</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.task.title}
        />
        <input type="submit" value="Save" />
      </form>
    );
  }
}

function mapStateToProps(state: {tasks: any}) {
  return {
    tasks: state.tasks,
  };
}

export default connect(mapStateToProps)(TasksPage);
