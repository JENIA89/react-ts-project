import React, { FC, useEffect, useState } from 'react'
import axios from 'axios';
import { ITodo } from '../types/types';
import List from './List';
import TodoItem from './TodoItem';

const TodoPage: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(()=>{
    getTodos()
  },[])

  async function getTodos(){
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
      setTodos(response.data)
    } catch (err) {
      console.log(err); 
    }
  }

  return (
    <List
        items={todos}
        renderItem={(todo: ITodo)=> <TodoItem todo={todo} key={todo.id}/>}
    />
  )
}

export default TodoPage