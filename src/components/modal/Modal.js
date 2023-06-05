import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';


function UserModal({blog,addBlog}) {


 

  const handleChange = (e) => {
    addBlog((prev) => ({...prev,[e.target.name]:e.target.value}))
  }


  // add post
  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      await axios.post("https://server2023.vercel.app/api/post",blog);
    }catch(err){
      console.log(err)
    }
  }



// ------ modal state 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add New Post
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="py-2" onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col-6">
                  <label  className="form-label">Title</label>
                  <input 
                    name="title"
                    type="text" 
                    required={true} 
                    className="form-control" 
          
                    aria-describedby="emailHelp" 
                    onChange={handleChange}
                
                  />
                </div>
                <div className="col-6">
                  <label className="form-label">Discription</label>
                  <input 
                    name="discription"
                    type="text" 
                    required={true} 
                    className="form-control" 
                  
                    aria-describedby="emailHelp" 
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-6">
                  <label  className="form-label">Full Discription</label>
                  <input 
                    name="fullDiscription"
                    type="text" 
                    required={true} 
                    className="form-control" 
                    
                    aria-describedby="emailHelp" 
                    onChange={handleChange}
                  />
                </div>
                <div className="col-6">
                  <label  className="form-label">Image Url</label>
                  <input 
                    name="imageUrl"
                    type="text" 
                    required={true} 
                    className="form-control" 
                    
                    aria-describedby="emailHelp" 
                    onChange={handleChange}
                  />
                </div>
              </div>
                <div className="col-6">
                  <button className="btn btn-info mt-3" variant="dark" onClick={handleClose}>Add</button>
                </div>        
            </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default UserModal;