import './register.css'
import { useState } from 'react'
import axios from 'axios'
import paths from '../../constants/paths'

const Register = () => {
  const [username,setUsername]=useState("")
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const [error,setError]= useState(false)
 
  const handleSubmit = async  (e)=>{
    e.preventDefault()
    setError(false)
    try{
      const res = await axios.post("/auth/register",{
        username,
        email,
        password
      })
      res.data && window.location.replace(paths.login)
    }catch(error){
      setError(true)
    }
   
    
  }
  return (
    <div className='register'>
        <span className="register-title">Register</span>
        <form className="register-form" onSubmit={handleSubmit}>
        <label>Username</label>
            <input type="text"
             className='register-input'
              placeholder='Enter your Username ....' 
             onChange={(e)=>{setUsername(e.target.value)}}/>
            <label>Email</label>
            <input type="email"
             className='register-input'
              placeholder='Enter your email ....'
              onChange={(e)=>{setemail(e.target.value)}}/>
            <label>Password</label>
            <input type="password"
            className='register-input'
             placeholder='Enter your password ....' 
             name="password"
             onChange={(e)=>{setpassword(e.target.value)}}/>
        <button className='register-btn' type="submit">register</button>
        </form>
        <button className='register-login-btn'>Login</button>
        {error && <span>Somthing went wrong</span>}
    </div>
  )
}

export default Register
