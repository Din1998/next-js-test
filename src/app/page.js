"use client"

import {useState,useEffect} from 'react';
import axios from 'axios';


import UserModal from'../components/modal/Modal'
import UserCard from '@/components/card/Card';

export default function Home() {

  const [blog,addBlog] = useState({
    title: "",
    discription: "",
    fullDiscription: "",
    imageUrl: ""
  })



  const [post,addPost] = useState([])

  useEffect(() => {
    const getAllPost = async () => {
      try{
        const res = await axios.get(`https://server2023.vercel.app/api`);
        addPost(res.data)
      } catch(err) {
        console.log(err)
      }
    };
    setInterval(() => getAllPost(), 3000)
    
  },[])

  console.log(post)

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12 py-5'>
          <UserModal blog={blog} addBlog={addBlog} />
        </div>
      </div>
      <div className='row'>
        <div className='col-md-12'>
          <UserCard post={post} blog={blog}/>
        </div>  
      </div>
    </div>
  )
}
