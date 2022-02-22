import React, { FC, useEffect, useState } from 'react'
import axios from 'axios';
import { IUser } from '../types/types';
import List from './List';
import UserItem from './UserItem';
import { useNavigate } from 'react-router-dom';

const UserPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const navigate = useNavigate()
  
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
    <List
        items={users}
        renderItem={(user: IUser)=> <UserItem onClick={(user)=> navigate(`/users/${user.id}`)} user={user} key={user.id}/>}
      />
  )
}

export default UserPage