import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import { IUser } from './types/types';

function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(()=>{
    getUsers()
  },[])

  async function getUsers(){
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data)
    } catch (err) {
      console.log(err); 
    }
  }
  
  return (
    <div >
      <Card onClick={()=> console.log('click')} variant={CardVariant.outlined} width='200px' height='200px'>
        <button>button</button>
      </Card>
      <UserList users={users}/>
    </div>
  );
}

export default App;
