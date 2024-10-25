import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../store/todoSlice";

const AddTodo: React.FC = () => {
    const [value, setValue] = useState("");
    const dispatch = useDispatch();
    function onClickHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        dispatch(addToDo({id:Date.now().toString(),name:value}));
        setValue("");
    }
    return (
        <div className="add-todo">
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={(e)=>onClickHandler(e)}>Add</button>
        </div>
    );
};

export default AddTodo;