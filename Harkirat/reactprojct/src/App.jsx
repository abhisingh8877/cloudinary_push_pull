import React, { memo, useEffect, useMemo, useState } from 'react';
import './App.css';
import axios from 'axios';
import { useCallback } from 'react';

function App() {
  const[image,setImage]=useState("")
  const submitImage=()=>{
    const data=new FormData();
    data.append("file",image);
    data.append("upload_preset","fileUploader")
    data.append("cloud_name","coderabhi");
    fetch("https://api.cloudinary.com/v1_1/coderabhi/image/upload",{
      method:"POST",
      body:data
    }).then(async function(res){
       const data= await res.json();
       console.log(data);

    })
  }
  return(
    <div>
      <input type="file" onChange={(e)=>setImage(e.target.files[0])}/><br/>
      <br/>
      <button type='submit' onClick={submitImage}>Submit</button>
    </div>
  )
}


export default App;
