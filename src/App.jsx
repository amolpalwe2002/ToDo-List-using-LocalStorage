import TodoList from "./components/TodoList"
import TodoInput from "./components/TodoInput"
import { useState, useRef, useEffect } from "react"

function App() {
  
  const storedTodos = JSON.parse(localStorage.getItem('todos'))
  const [todos, setTodos] = useState(storedTodos);
  const [todoValue, setTodoValue] = useState('');
  const inputRef = useRef(null)

  function addTodo(newTodo) {
    if (newTodo !== "") {
      setTodos([...todos, newTodo])
    }
  }

  function deleteTodo(index){
    setTodos(todos.filter((todo, i) => i !== index))
  }

  function editTodo(index){
    inputRef.current.value = todos[index]
    setTodoValue(todos[index])
    deleteTodo(index)
  }

  useEffect(() => {
    inputRef.current.focus()

    localStorage.setItem('todos', JSON.stringify(todos))
    console.log(JSON.parse(localStorage.getItem('todos')))
  }, [todos])

  
  return (
    <>
        <h1 className="text-5xl font-extrabold text-center my-5">ToDo-List</h1>

        <TodoInput inputRef={inputRef} todos={todos} addTodo={addTodo} todoValue={todoValue} setTodoValue={setTodoValue}/>

        <TodoList todos={todos} setTodos={setTodos} deleteTodo={deleteTodo} editTodo={editTodo}/>      
    </>
    
  )
}

export default App
