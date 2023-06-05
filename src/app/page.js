"use client"

import {useState} from 'react';


import UserModal from'../components/modal/Modal'
import UserCard from '@/components/card/Card';

export default function Home() {

  const [Input,SetInput] = useState({
    Name:"",
    Email:"",
    Address:"",
  });
  const [user,addUser] = useState([]);

  console.log(user)

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12 py-5'>
          <UserModal Input={Input} SetInput={SetInput} user={user} addUser={addUser} />
        </div>
      </div>
      <div className='row'>
        <div className='d-flex justify-content-center flex-row align-items-center flex-wrap'>
          <UserCard user={user} />
        </div>  
      </div>
    </div>
  )
}
