import { useState } from "react";
import { AddToDo } from "./AddToDo/AddToDo";
import { SigleToDo } from "./simpleToDo/SigleToDo";
export const Raiz = () => {
  const [arrayToDo, setArrayToDo] = useState([]);
  const AddTodo = (data) => {
    data = data.trim();
    if (data !== "") {
      const send = {
        id: arrayToDo.length,
        nombre: data,
        completada: false,
      };

      setArrayToDo([...arrayToDo, send]);
    }
  };
  return (
    <>
      <h1>Listado de Tarea</h1>

      <AddToDo AgregarToDo={AddTodo} />
      <ol>
        {arrayToDo.length == 0
          ? "Muy Bien no tienes Tareas 😊"
          : arrayToDo.map((item, index) => (
              <SigleToDo
                key={index}
                nombre={item.nombre}
                completada={item.completada}
              />
            ))}
      </ol>
    </>
  );
};
