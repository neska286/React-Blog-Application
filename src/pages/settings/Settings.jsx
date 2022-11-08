import  './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'
import { useContext, useState } from 'react';
import { Context } from '../../context/Context';
import axios from 'axios';
import { useNavigate } from 'react-router';
import paths from '../../constants/paths';



const Settings = () => {
    const { user } = useContext(Context);
    const [username,setUsername] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const navigate = useNavigate();


    const handleSubmit = async(e)=>{
        e.preventDefault(); 
        const updateUser = {
            userId: user._id,
            username,
            email,
            password
        }
        try{
            await axios.put(`/users/${user._id}`, updateUser)
        }catch(err){}

    }
    const handleDelete = async(e)=>{
        e.preventDefault(); 
        await axios.delete(`/users/${user._id}`,{
            data: {userId : user._id}
        })
        navigate(paths.home);
    }
  return (
    <div className='settings'>
        <div className="settings-wrapper">
            <div className="settings-title">
                <span className="settings-update-title">Update Your Account</span>
                <button className="settings-submit-delete" onClick={handleDelete}>Delete Account</button>
            </div>
            <form className="settings-form" onSubmit={handleSubmit}>
                <label>Profile Picture</label>
                <div className="settings-profile-pic">
                    <img src={user.profilePic} alt="" />
                    <label htmlFor='file-input'>
                        <i className="settings-icon far fa-user-circle"></i>
                    </label>
                    <input type="file" id="file-input" style={{display:"none"}} />
                </div>
                <label>Username</label>
                <input type="text" placeholder={user.username}
                value={username}
                onChange={(e)=>setUsername(e.target.value)} />
                <label>Email</label>
                <input type="email" placeholder={user.email}
                value={email} 
                onChange={(e)=>setEmail(e.target.value)}/>
                <label>Password</label>
                <input type="password" 
                onChange={(e)=>setPassword(e.target.value)}/>
                <button className='settings-submit' type='submit'>Update</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}

export default Settings