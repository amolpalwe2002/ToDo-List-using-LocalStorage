import React from 'react'
import { useRef } from 'react'


function TodoInput({addTodo, todoValue, setTodoValue, inputRef}) {   
    
  return (
    <div className='flex justify-center items-center gap-5'>
        <input ref={inputRef} className="border-2 border-zinc-400 rounded-lg px-2 py-1 w-96 font-mono font-semibold text-xl" placeholder="Enter your todo..." onChange={(e) => setTodoValue(e.target.value)} type="text" />
        <button className="border-2 border-zinc-400 rounded-lg px-2 py-1 font-mono font-semibold text-xl" onClick={() => { 
            addTodo(todoValue)
            inputRef.current.value = null;
            setTodoValue('');
            }}>
                Add
        </button>
    </div>
  )
}

export default TodoInput