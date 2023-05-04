import { createContext, useState, useEffect } from "react";
import { tasks as data} from "../data/Tasks.js";

export const TaskContext = createContext();

//componente
export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(task) { setTasks([...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.descrip,
      },
    ]);
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
    console.log("deleted id: " + id);
  }

  //retorna el provider
  return (
    <TaskContext.Provider value={{
      tasks,
      createTask,
      deleteTask
    }}>
      {/* {props.children}: se reemplaza codigo de app */}
      {/* todo el codigo de la aplicacion va aqui */}
      {/* desde el main */}
      {props.children}
    </TaskContext.Provider>
  );
}

export default TaskContext;
