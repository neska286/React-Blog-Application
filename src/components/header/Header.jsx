 import './header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-titles">
            <span className="header-title-sm">React & Node</span>
            <span className="header-title-lg">Blog</span>
        </div>
        <img  className="header-img" src="https://cdn.pixabay.com/photo/2022/04/20/06/28/flowers-7144467_960_720.jpg" alt="" />
    </div>
  )
}

export default Header