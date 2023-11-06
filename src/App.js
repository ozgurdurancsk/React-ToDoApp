import { useState } from "react";
import "./App.css"
import {AiOutlineDelete} from "react-icons/ai"
import {BsCheckLg} from "react-icons/bs"


function App() {
  const [isCompleteScreen,setIsCompleteScreen] = useState(false);
  const[allTodos,setTodos] = useState([]);
  const[newTitle,setNewTitle] = useState("");
  const[newDescription,setNewDescription] = useState("");


  const handleAddTodo = () =>{
    let newTodoItem = {
      title:newTitle,
      description:newDescription
    }
    let updateTodoArr = [...allTodos];
    updatedTodoArr.push(newTodoItem)
    setTodos(updateedTodoArr);

  }
  return (
   <div className="App">
    <h1>My Todos</h1>

      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            
              <label>Title</label>
              <input type= "text" value= {newTitle} onChange={(e)=> setNewTitle(e.target)} placeholder="What is the task title?"b/>
          </div>

            <div className="todo-input-item">
              <label>Dexcription</label>
              <input type= "text" value= {newDescription} onChange={(e)=> setNewDescription(e.target)} placeholder="What is the task descriptipn?"/>
            </div>

            <div className="todo-input-item">
              <button type="button" onClick={handleAddTodo} className="primaryBtn">Add</button>
            </div>
          </div>

          <div className="btn-area">
            <button className={`secondaryBtn ${isCompleteScreen === false && "active"}`} onClick={()=>setIsCompleteScreen(false)}> Todo</button>
            <button className={`secondaryBtn ${isCompleteScreen === true && "active"}`} onClick={()=>setIsCompleteScreen(true)}>Completed</button>
          </div>

          <div className="todo-list">

            <div className="todo-list-item">
          <div>
              <h3>Task 1</h3>
              <p>Description</p>

          </div>
            <div>
              <AiOutlineDelete className="icon"/>
              <BsCheckLg className="check-icon"/>
              
            </div>
            </div>
        </div>
      </div>
    </div>
   
  );
}

export default App;
