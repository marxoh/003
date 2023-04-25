import React from "react";
import { useState, useContext } from "react";
import TaskContext from "../context/TaskContext.jsx";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [descrip, setDescrip] = useState("");
  const { createTask } = useContext(TaskContext);

  //console.log(useContext(TaskContext))

  //obtiene e del onSubmit del form
  const handleSubmit = (e) => {
    e.preventDefault(); //del submit
    createTask({ title, descrip }); //envia un objeto
    setTitle(""); //limpia despues de ejecutar
    setDescrip(""); //limpia despues de ejecutar
  };

  return (
    //onSubmit pasa e de alguna manera a handleSubmit
    <div className="max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-800 p-10 mb-4
    "
      >
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          placeholder="Hay una tarea nueva?"
          onChange={(e) => setTitle(e.target.value)}
          value={title} //limpia despues de ejecutar
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
        />
        <textarea
          placeholder="De que se trata?"
          onChange={(e) => setDescrip(e.target.value)}
          value={descrip} //limpia despues de ejecutar
          className="bg-slate-300 p-3 w-full mb-2"
        />
        <button className="bg-indigo-500 px-3 py-1 text-white hover:bg-indigo-800" >Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
