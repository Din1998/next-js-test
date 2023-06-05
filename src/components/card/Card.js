'use client'
import Card from 'react-bootstrap/Card';
export default function UserCard({user}) {


  return(
    <div className='d-flex justify-content-start flex-row align-items-center flex-wrap'>
      {user.map((index) => {
        console.log(index)
      return(
        <Card  style={{ width: '18rem',margin: "12px" }}>
          <Card.Body>
            <Card.Title>{index.Name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{index.Email}</Card.Subtitle>
              <Card.Text>
              {index.Address}
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      )
      })}
    </div>
  )
}