import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card, { CardVariant } from './components/Card';
import EventsExample from './components/EventsExample';
import List from './components/List';
import TodoItem from './components/TodoItem';
import UserItem from './components/UserItem';
import { ITodo, IUser } from './types/types';

function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(()=>{
    getUsers()
    getTodos()
  },[])

  async function getUsers(){
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data)
    } catch (err) {
      console.log(err); 
    }
  }

  async function getTodos(){
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
      setTodos(response.data)
    } catch (err) {
      console.log(err); 
    }
  }
  
  return (
    <div >
      <EventsExample/>
      <Card onClick={()=> console.log('click')} variant={CardVariant.outlined} width='200px' height='200px'>
        <button>button</button>
      </Card>
      <List
        items={users}
        renderItem={(user: IUser)=> <UserItem user={user} key={user.id}/>}
      />
      <List
        items={todos}
        renderItem={(todo: ITodo)=> <TodoItem todo={todo} key={todo.id}/>}
      />
    </div>
  );
}

export default App;
