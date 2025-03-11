import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import ProgressBar from 'react-bootstrap/ProgressBar';

function UploadVideos() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [Progress, setProgress] = useState(0);
  const [Uploading, setUploading] = useState(false);
  const [Message, setMessage] = useState("");
  const[Meta, setMeta]=useState({
    title:"",
    description:"",
  })

   // Handle file input change
    const handleFileUpload = (event) => {
    //  console.log(event.target.files[0]);
      setSelectedFile(event.target.files[0]);
     }; 
  
     function formFieldChange(event){
// console.log(event.target.name)
// console.log(event.target.value)
setMeta({
  ...Meta,
        [event.target.name]: event.target.value,
        [event.target.description]:event.target.description
      }
    )
     }

function handleForm( formEvent){
formEvent.preventDefault();
if(!selectedFile){
  alert("Select File !!");
  return;
}

// Submit the file to the server
saveVideoToServer(selectedFile, Meta);
}

async function saveVideoToServer(video, videoMetaData) {
  setUploading(true);
  //api call
try{

  let formData=new FormData()
  formData.append("title", videoMetaData.title)
  formData.append("description", videoMetaData.description)
  formData.append("file",selectedFile)

  let response= await axios.post(
    'http://localhost:8080/api/v1/videos',
    formData,
    {
    headers:{
      'Content-Type':"multipart/form-data",
    },
       withCredentials: false,
    onUploadProgress:(progressEvent)=>{
      const progress = Math.round(( progressEvent.loaded * 100) / progressEvent.total);
      console.log(progress);
      setProgress(progress);
    },
    
  });

console.log(response);

  setMessage("File Uploaded");
  setUploading(false)
}catch(error){
console.error(error);
setMessage("Error in Uploading File");
setUploading(false);

}

}

const [videoId,setVideoId] = useState('00d63c58-a722-4eba-892a-d85d137c8265');


  return (
    <div className='form-container' >
       <div className='form-container1' style={{ padding:'20px'}}>
        <h1>Playing Video </h1>
        <video id='video'
        src={`http://localhost:8080/api/v1/videos/stream/range/${videoId}`} controls> </video>
       </div>

        <div className='form-container2' >
        <h2> Upload Videos</h2>
       <div className='form'  >
       <form noValidate  onSubmit={handleForm}>
        <div className='inputfileds'>

        <div className='inputfiled' >
        <input type='text' placeholder='Video Title' name='title' onChange={formFieldChange}/>
        </div>

        <div className='inputfiled' >
        <textarea rows="5" cols="10" placeholder="Video Description"  name='description' onChange={formFieldChange}/>
        </div>

        <div className='inputfiled'>
        <input type='file' placeholder='Choose a File'  onChange={handleFileUpload}/>
        </div>

        <div className='progressbar'>
        <ProgressBar now={60}  placeholder="Uploading" />

        </div>
        <div> 
        <button type='submit' className='button'> Upload</button>
        </div>
        </div>
        </form>
       </div>
   
    </div>

        </div>
  )
}

export default UploadVideos;

