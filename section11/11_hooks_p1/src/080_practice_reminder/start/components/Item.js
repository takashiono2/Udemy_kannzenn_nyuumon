import { useState } from "react";
import { useDispatchTodos } from "../context/TodoContext"

const Item = ({todo}) => {
  const [ editingContent, setEditingContent ] = useState(todo.content);

  const dispatch = useDispatchTodos();

  const changeContent=(e)=>{
    setEditingContent(e.target.value);
  }
  const toggleEditingMonde = () => {
    const newTodo = { ...todo, editing: !todo.editing};
    dispatch({type: "todo/update",todo: newTodo});
  }

  const confirmContent = (e) => {
    e.preventDefault();
    const newTodo = { ...todo,
      editing: !todo.editing,
      content: editingContent
    };
    dispatch({type: "todo/update",todo: newTodo});
  }

  const complete = (todo) =>{
    dispatch({type: "todo/delete", todo:todo})
  }

  return(
    <div key={todo.id}>
      <button onClick={() => complete(todo)}>完了</button>
      <form onSubmit={confirmContent} style={{display: 'inline'}}>
        {
          todo.editing ? (
            <input type="text"
              value={editingContent}
              onChange={changeContent}
            />
          ):(
            <span onDoubleClick={toggleEditingMonde}>{todo.content}</span>
          )
        }
      </form>
    </div>
  );
}

export default Item;