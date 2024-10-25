import React from "react";
import { useDispatch } from "react-redux";
import { removeToDo, editToDo } from "../store/todoSlice";

interface ListTodoProps {
  id: string;
  name: string;
}

const ListTodo: React.FC<ListTodoProps> = ({ id, name }) => {
  const dispatch = useDispatch();

  const handleEdit = () => {
    const newName = prompt("Edit your todo:", name);
    if (newName) {
      dispatch(editToDo({ id, newName }));
    }
  };

  return (
    <div className="list-todo">
      <p>{name}</p>
      <div>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={() => dispatch(removeToDo({ id }))}>Delete</button>
      </div>
    </div>
  );
};

export default ListTodo;
