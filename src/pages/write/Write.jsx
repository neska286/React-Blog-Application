import axios from 'axios'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import { Context } from '../../context/Context'
import paths from '../../constants/paths';
import  './write.css'

const Write = () => {
  const [title,setTitle]=useState("");
  const [desc, setDesc] = useState("");
  const [file , setFile] = useState("");
  const navigate = useNavigate();
  const {user} = useContext(Context)
 

  const handleSubmit=  async (e)=>{
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc
    }
    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try{
      const resp = await axios.post('/posts',newPost)
      navigate(paths.postDetails.replace(':id', resp.data._id));
    }catch(err){
console.log('err',err);
    }
    
  }
  return (
    <div className='write'>
      {file && (
      <img src={URL.createObjectURL(file)} alt="" className="write-img" />
      )}
      <form className="write-form" onSubmit={handleSubmit}>
        <div className="write-from-group">
          <label htmlFor="file-input">
            <i className=" write-icon fas fa-plus"></i>
          </label>
          <input type="file"  id="file-input"
           style={{display:'none'}}
           onChange={(e)=>{setFile(e.target.files[0])}}
          />
          <input type="text" placeholder='Title' 
          className='write-input' autoFocus={true} 
          onChange={(e)=>{setTitle(e.target.value)}}/>
        </div>
        <div className="writeFormGroup">
          <textarea type="text" placeholder="Tell your story" className='write-input write-text ' cols="30" rows="10"
          onChange={(e)=>{setDesc(e.target.value)}}></textarea>
        </div>
        <button className='write-submit' type="submit">Publish</button>
      </form>
      
    </div>
  )
}

export default Write
