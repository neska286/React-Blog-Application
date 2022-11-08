import { Link } from 'react-router-dom';
import  './post.css';

const Post = ({post}) => {
    // const PF = "http://localhost:5000/images/"
  return (
    <div className='post'>
        {post.photo &&
        <img src={ post.photo} alt="" className="post-img" />}
       
    <div className="post-info">
        <div className="post-cats">
            {post.categories.map((category)=>{
                return(
                    <span className="post-cat">{category.name}</span>
                )
            })}
        </div>
        <Link to={`/posts/${post._id}`} className='link'>
        <span className="post-title">
            {post.title}
        </span>
        </Link>
        <hr/>
        <span className="post-date">{ new Date(post.createdAt).toDateString()}</span>
        <p className="post-desc">
            {post.desc}
        </p>

    </div>
    </div>
  )
}

export default Post