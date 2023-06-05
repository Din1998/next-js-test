import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function UserModal({Input, SetInput, user, addUser}) {

  const onInputChange = (e) => {
    SetInput((prev) => ({...prev,[e.target.name]:e.target.value}))
  }

  

  const onFormSubmit = (event) => {
    event.preventDefault();
    addUser([...user,Input ]);
    SetInput("")
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add User
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="py-2" onSubmit={onFormSubmit}>
              <div className="row mb-3">
                <div className="col-6">
                  <label  className="form-label">Name</label>
                  <input 
                    name="Name"
                    type="text" 
                    required={true} 
                    className="form-control" 
          
                    aria-describedby="emailHelp" 
                    onChange={onInputChange}
                
                  />
                </div>
                <div className="col-6">
                  <label className="form-label">Email</label>
                  <input 
                    name="Email"
                    type="text" 
                    required={true} 
                    className="form-control" 
                  
                    aria-describedby="emailHelp" 
                    onChange={onInputChange}
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-6">
                  <label  className="form-label">Address</label>
                  <input 
                    name="Address"
                    type="text" 
                    required={true} 
                    className="form-control" 
                    
                    aria-describedby="emailHelp" 
                    onChange={onInputChange}
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