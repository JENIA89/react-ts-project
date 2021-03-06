import axios from 'axios';
import React, { FC, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { IUser } from '../types/types';

const UserItemPage:FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams()
  const navigate = useNavigate()
  
  
  useEffect(()=>{
    getUser()
  },[])

  async function getUser(){
    try {
      const response = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${params.id}`);
      setUser(response.data)
    } catch (err) {
      console.log(err); 
    }
  }
  return (
    <div>
      <button onClick={()=> navigate('/users')}>Назад</button>
      <h1>Страница пользователя {user?.name}</h1>
      <div>{user?.email}</div>
      <div>{user?.address.city} {user?.address.street}</div>

    </div>
  )
}

export default UserItemPage