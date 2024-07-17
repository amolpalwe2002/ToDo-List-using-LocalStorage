import React from 'react'
import TodoCard from './TodoCard'

function TodoList({todos, setTodos, deleteTodo, editTodo}) {
  return (
    <>
        {
            todos.map((todo, index) => {
                return <TodoCard key={index} index={index} deleteTodo={deleteTodo} editTodo={editTodo}>
                    <p className='text-2xl font-mono font-extrabold'>{todo}</p>  
                </ TodoCard>
            })
        }
    
    </>
  )
}

export default TodoList