import React from "react";
import {connect} from "react-redux";
import {TasksState} from "../../store/tasks/types";
import {actionTasks} from "../../store/tasks/actions";
import {ApplicationState} from "../../store";

type TasksProps = typeof actionTasks & TasksState;

class TasksPage extends React.Component<TasksProps> {
  constructor(props: any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    task: {
      title: "",
    },
  };

  handleChange = (event: {target: {value: any}}) => {
    const task = {...this.state.task, title: event.target.value};
    this.setState({task: task});
  };

  handleSubmit = (event: {preventDefault: () => void}) => {
    event.preventDefault();
    this.props.addNewTask(this.state.task);

    //alert(this.state.task.title);
    //debugger;
  };

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
        {this.props.tasks.map((task) => (
          <div key={task.title}>{task.title}</div>
        ))}
      </form>
    );
  }
}

/* function mapStateToProps(state: TasksState, ownProps: TasksProps) {
  return {
    tasks: state.tasks,
  };
} */

export default connect(
  (state: ApplicationState) => state.tasks,
  actionTasks
)(TasksPage);
