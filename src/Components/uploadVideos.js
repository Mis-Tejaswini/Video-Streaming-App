import React from 'react'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function UploadVideos() {
  const [selectedFile, setSelectedFile] = useState(null);

   // Handle file input change
    const handleFileUpload = (event) => {
      setSelectedFile(event.target.files[0]);
     }; 
  
const [videoId,setVideoId] = useState('00d63c58-a722-4eba-892a-d85d137c8265');

  return (
    <div className='form-container'>
       <div>
        <h1>playing Video </h1>
        <video 
        style={
          {width:500,
           height:500, 
          }
        }
        src={`http://localhost:8080/api/v1/videos/stream/range/${videoId}`} controls> </video>
       </div>
       <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label> Video Title </Form.Label>
        <Form.Control type="text"  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Video Describption </Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3"> 
        <Form.Label>Choose a file </Form.Label>
        <Form.Control type="file" />
      </Form.Group>
    </Form>
    <Button variant="primary">Success</Button>{' '}
        </div>
  )
}

export default UploadVideos;