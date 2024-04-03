import "./App.css";
import Task from "./Task";
import TaskForm from "./TaskForm";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (tasks.length === 0) return;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  function addTask(name) {
    setTasks((prev) => {
      return [...prev, { name: name, done: false }];
    });
  }

  return (
    <main>
      <TaskForm onAdd={addTask} />
      {tasks && tasks.map((task, index) => <Task key={index} {...task} />)}
    </main>
  );
}

export default App;
