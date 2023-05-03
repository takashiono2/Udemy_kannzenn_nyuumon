//enteredTodo,setEnteredTodo,useState,addTodo,inputVal,newTodo,Math.random()*1e5
import { useState } from "react";
const Form = ({createTodo}) =>{
  const[enteredTodo,setEnteredTodo] = useState("");

  const addTodo=(e)=>{
    e.preventDefault();
    const newTodo = {
      id: Math.floor(Math.random()*1e5),
      content: enteredTodo,
    }
    createTodo(newTodo);
    setEnteredTodo("");
  }

  return (
    <>
      <submit onClick={addTodo}>
        <input
          type="text"
          onChange={(e)=>setEnteredTodo(e.target.value)}
          value={enteredTodo}
        />
        <button>追加</button>
      </submit>
    </>
  )
}

export default Form;