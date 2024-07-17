import React from 'react'

function TodoCard({children, index, deleteTodo, editTodo}) {
    
  return (
    <div className='flex justify-between items-center px-10 py-5 border-2 border-zinc-400 rounded-lg my-10 mx-5'>
        {children}
        <div className='flex justify-center gap-2'>
            <button onClick={() => editTodo(index)}>
                <img className='w-10' src="https://logowik.com/content/uploads/images/888_edit.jpg" alt="edit" />
            </button >
            <button>
                <img onClick={() => deleteTodo(index)} className='w-6' src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" alt="delete" />
            </button>
        </div>
    </div>
  )
}

export default TodoCard