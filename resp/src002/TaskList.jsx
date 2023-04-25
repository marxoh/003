import { tasks as data } from "./Tasks.js";
import { useState, useEffect } from "react";

// console.log(data) //lo trae en este formato

function TaskList() {
  //inicialmente esta vacio el arreglo en este caso, oh noo
  const [tasks, setTasks] = useState([]);

  //pero tambien se puede cargar inicialmente con useEffect ee
  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <div>
      {tasks.map((byTask, i) => (
        <div key={i}>
          <h1>{byTask.title}</h1>
          <p>{byTask.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
