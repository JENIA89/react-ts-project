import React, { FC } from 'react'
import { ITodo } from '../types/types'

interface TodoItemprops {
  todo: ITodo;
}

const TodoItem: FC<TodoItemprops> = ({todo}) => {
  return (
    <div>
      <input type='checkbox' checked={todo.completed}/>
      {todo.id}. {todo.title}
    </div>
  )
}

export default TodoItem