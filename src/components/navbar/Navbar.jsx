import { useContext } from 'react';
import { Link } from 'react-router-dom';
import paths from '../../constants/paths';
import { Context } from '../../context/Context';
import './navbar.css';


const Navbar = () => {
  const { user, dispatch } = useContext(Context);
  const pages = [
    {id:1, page:'HOME', path: paths.home},
    {id:2, page:'ABOUT', path: paths.about},
    {id:3, page:'WRITE', path: paths.write},
    
  ]
  const loginPages = [
    {id:4, page:'LOGIN', path: paths.login},
    {id:5, page:'REGISTER', path: paths.register},
  ]
  const handleLogout = ()=>{
    dispatch({type:"LOGOUT"})
  }
  return (
    <>
    <div className="top-nav">
    <div className="nav-left">
    <i className=" nav-icon fa-brands fa-facebook-square"></i>
    <i className=" nav-icon fa-brands fa-twitter-square"></i>
    <i className=" nav-icon fa-brands fa-pinterest-square"></i>
    <i className=" nav-icon fa-brands fa-instagram-square"></i>
    </div>
    <div className="nav-center">
      <ul className="top-list">
        {pages.map((p)=>(
          <Link to={p.path} key={p.id} className="link">
          <li className="top-list-item">{p.page}</li>
          </Link>
        ))}
         <li className="topListItem logout" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        
       
      </ul>
    </div>
    <div className="nav-right">
      {user ? (
      <Link to={paths.settings}>
      <img src={user.profilePic}  className="nav-image" alt="userimage" />
      </Link>
      ):(
        <ul className="top-list">
        {loginPages.map((p)=>(
          <Link to={p.path} key={p.id} className="link">
          <li className="top-list-item">{p.page}</li>
          </Link>
        ))}
        
       
      </ul>
      )}
      
    <i className="search-icon fa-solid fa-magnifying-glass"></i>
    </div>
    </div>
    </>
  )
}

export default Navbar