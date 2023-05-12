import React,{useState} from "react"
import {useSelector,useDispatch} from "react-redux"
import { addTodo, deleteTodo,resetTodos } from "../redux/actions"
import "./style.css"

const Todo = () =>{
    const [text, setText]= useState("")
    const [todoList] = useState([])
    const list = useSelector((state)=> state.todoReducers.todos)
    const dispatch = useDispatch()
    const handleInputChange = (event) =>{
        setText(event.target.value)
    }
    const addTodoList = ()=>{
        if(!text){
            alert("Kindly input something to add in todo list")
            return
        }
        dispatch(addTodo([...todoList, text]))
        setText("")
    }

    const deleteItem = (item)=>{
        dispatch(deleteTodo(item))

    }

    const removeAllItems = ()=>{
        dispatch(resetTodos())
    }
    return (
        <div className="todo-container"> {/* Add the todo-container class here */}
          <input type="text" value={text} onChange={handleInputChange} required={true} />
          <button onClick={addTodoList}>+</button>
          {list?.length > 0 ? (
            <div>
              <ul>
                {list.map((item, index) => {
                  return (
                    <div key={index}>
                      <li>
                        {item}
                        <button onClick={() => deleteItem(item)}>❌</button>
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
          ) : null}
      
          <br />
          {list?.length > 0 ? (
            <button className="remove-all" onClick={removeAllItems}>
              Remove all items
            </button>
          ) : null}
        </div>
      );
      
}
export default Todo