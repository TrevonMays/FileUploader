import React, {useState} from 'react'
import axios from 'axios';



function App() {

  const [file, setFile] = useState();

  const handleChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const url = "http://localhost:3000/";

    const formData = new FormData();
    
    formData.append('file', file)
    formData.append('fileName', file.name)

    const config = {
      headers: {
        'content-type': ' multipart/form-data',
      },
    };
    axios
    .post(url, formData, config)
    .then((res) => {
      console.log(res.data);
    });
  }


  return (
    <div className='app'>
      <form onSubmit={handleSubmit} >
        <h1>React File Upload</h1>
        <input type="file"  onChange={handleChange}/>
        <button type='submit'>Upload</button>

      </form>
    </div>
  )
}

export default App
