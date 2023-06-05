'use client'

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


export default function UserCard({post,blog}) {
  
  console.log(post)

  // delete post
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://server2023.vercel.app/api/${id}`);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };

  return(
    <div className='d-flex py-5 justify-content-center flex-row align-items-center flex-wrap'>
      {post.map((index,i) => {
        console.log(index)
      return(
        <Card key={i}  style={{ width: '28rem',margin: "12px",maxHeight:"320px",overflowX:"hidden",overflowY:"scroll" }}>
          <Card.Body>
            <Card.Img variant="top" style={{width:"100%",height:"80px",objectFit:"cover"}} src={index.imageUrl} />
            <Card.Title className='pt-5'>{index.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{index.discription}</Card.Subtitle>
              <Card.Text>
              {index.fullDiscription}
              </Card.Text>
              <footer className="blockquote-footer">
              {index.date}
              </footer>
              <Button variant="outline-secondary">Desable</Button>
              <Button variant="outline-danger" className='px-3 mx-3' onClick={() => handleDelete(index._id)}>Delete</Button>
          </Card.Body>
        </Card>
      )
      })}
    </div>
  )
}