import { useState } from "react";

export const AddToDo = ({ AgregarToDo }) => {
  const [input, setInput] = useState("");
  const handleInput = (event) => {
    setInput(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();

    AgregarToDo(input);

    setInput("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Ingresar Tarea"
        value={input}
        name="task"
        onChange={handleInput}
        autoFocus
      />
    </form>
  );
};
