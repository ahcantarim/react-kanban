import React from "react";
import PropTypes from "prop-types";

import "./TaskList.css";
import plusIcon from "../../img/plus-icon.svg";

import TaskItem from "../TaskItem/TaskItem";

export default function TaskList({
  title,
  state,
  onAddTask,
  tasks,
  onTaskUpdate,
  onTaskDelete
}) {
  const addTask = () => {
    onAddTask("New task", state);
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        <button onClick={addTask} className="btn">
          <img src={plusIcon} alt="New task" />
        </button>

        {tasks.length === 0 && <div className="empty-list">Empty</div>}

        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              state={task.state}
              onTaskUpdate={onTaskUpdate}
              onTaskDelete={onTaskDelete}
            />
          );
        })}
      </div>
    </div>
  );
}

TaskList.propTypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired
};
