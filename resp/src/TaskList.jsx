import { tasks as data } from "./Tasks.js";
import { useEffect, useState } from "react";

// console.log(tasks)

function TaskList() {
  //inicialmente esta vacio el arreglo inicial
  const [tasks, setTasks] = useState([]);

  //hay que cargar inicialmente con useEffect
  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <div>
      {tasks.map((tasks, i) => (
        <div key={i}>
          <h1>{tasks.title}</h1>
          <p>{tasks.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
