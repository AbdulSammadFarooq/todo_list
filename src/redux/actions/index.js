import { actionTypes } from "./constants";

export const addTodo = (payload)=>{
    return {
        type: actionTypes.ADD_TODO,
        payload:payload
    }
}

export const deleteTodo = (payload)=>{
    return {
        type: actionTypes.DELETE_TODO,
        payload: payload
    }
}

export const resetTodos = ()=>{
    return {
        type: actionTypes.REMOVE_ALL_TODOS
    }
}