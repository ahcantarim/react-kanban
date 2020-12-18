import React, { useState } from "react";
import "./styles.css";

import Navbar from "./components/Navbar/Navbar";
import TaskList from "./components/TaskList/TaskList";

let idAcc = 0;
const generateId = () => {
  idAcc++;
  return idAcc;
};

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state
    };

    setTasks((existingTasks) => {
      return [...existingTasks, newTask];
    });
  };

  const updateTask = (id, title, state) => {
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, state };
        } else {
          return task;
        }
      });
    });
  };

  const deleteTask = (id) => {
    setTasks((existingTasks) => {
      return existingTasks.filter((t) => t.id !== id);
    });
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList
          title="To do"
          state="0"
          onAddTask={addTask}
          tasks={tasks.filter((t) => t.state === "0")}
          onTaskUpdate={updateTask}
          onTaskDelete={deleteTask}
        />
        <TaskList
          title="In progress"
          state="1"
          onAddTask={addTask}
          tasks={tasks.filter((t) => t.state === "1")}
          onTaskUpdate={updateTask}
          onTaskDelete={deleteTask}
        />
        <TaskList
          title="Done"
          state="2"
          onAddTask={addTask}
          tasks={tasks.filter((t) => t.state === "2")}
          onTaskUpdate={updateTask}
          onTaskDelete={deleteTask}
        />
      </div>
    </div>
  );
}
