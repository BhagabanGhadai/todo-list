import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
    id: string;
    name: string;
}

export interface todoState {
    todos: Todo[];
}

const initialState: todoState = {
    todos: [],
}
export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addToDo: (state, action:PayloadAction<Todo>) => {
            state.todos.push(action.payload);
        },
        removeToDo: (state,action:PayloadAction<{id:string}>) => {
            const habitIndex=state.todos.findIndex((h)=>h.id===action.payload.id)
            if(habitIndex>-1){
                state.todos.splice(habitIndex,1)
            }
        },
        editToDo: (state,action:PayloadAction<{id:string,newName:string}>) => {
            const todos=state.todos.find((h)=>h.id===action.payload.id)
            if(todos){
                todos.name=action.payload.newName
            }
        },
    },
});

export const { addToDo, removeToDo, editToDo } = todoSlice.actions;
export default todoSlice.reducer;