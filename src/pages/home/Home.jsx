import axios from 'axios'
import { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.css'

const Home = () => {
  const[posts,setPosts]=useState([])

  useEffect(()=>{
    const fetchposts = async ()=>{
      const response = await axios.get('/posts')
      setPosts(response.data)
    }
    fetchposts()
  },[])
  return (
      <>
    <Header/>
   <div className="home">
       <Posts posts={posts}/>
       <Sidebar/>
   </div>
    </>
    
  )
}

export default Home