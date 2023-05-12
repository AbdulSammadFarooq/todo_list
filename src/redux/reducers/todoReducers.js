import { actionTypes } from "../actions/constants";
const initialState = {
  todos:[]
};
const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
      case actionTypes.DELETE_TODO:
        const newData = state?.todos?.filter((item)=>{
          return item !== action.payload
        })
        return {
          todos: [...newData]
        }
      case actionTypes.REMOVE_ALL_TODOS:
        return {
          todos: []
        }
    default:
      return state;
  }
};

export default todoReducers;