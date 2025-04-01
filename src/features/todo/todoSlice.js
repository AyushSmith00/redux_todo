import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: "Hello World"}]
}
export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducer: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.todo = state.todos.map((todo) => todo.id === action.payload ? todo : action.payload)
        }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer