import React from "react";
import { useState } from "react";

function TaskForm() {
  const [title, setTitle] = useState("");

  //obtiene e del onSubmit del form
  const handleSubmit = (e) => {
    //evita que console.log pestañee y se cierre sin mostrar nada
    //que es el comportamiento por defecto del onSubmit del form
    e.preventDefault()
    console.log(title)
  }

  return (
    //onSubmit pasa e de alguna forma a handleSubmit
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Hay una tarea nueva?"
        //onChange pasa e a la funcion interna
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;
