// Blog.js

import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { BlogContext } from './BlogContext';

const Blog = () => {
  const { blogs } = useContext(BlogContext);
  const [comments, setComments] = useState([]);
  const [newComments, setNewComments] = useState({});

  const handleCommentSubmit = (blogId) => {
    if (newComments[blogId].trim() === '') return;

    setComments([...comments, { blogId, comment: newComments[blogId] }]);
    setNewComments({ ...newComments, [blogId]: '' });
  };

  return (
    <div className="container blogContainer">
      <h2>Blog Site</h2>
      <div className="blog-list">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>

            {blog.image && <img  className='image' src={blog.image} alt="Blog" />} {/* Display image if available */}
            {blog.video && <iframe src={blog.video} title="Blog Video" />} {/* Display video if available */}

            <div>
              <h4>Comments</h4>
              <ul>
                {comments
                  .filter((comment) => comment.blogId === blog.id)
                  .map((comment, index) => (
                    <li key={index}>{comment.comment}</li>
                  ))}
              </ul>
              <input
                type="text"
                placeholder="Write a comment"
                value={newComments[blog.id] || ''}
                onChange={(e) =>
                  setNewComments({ ...newComments, [blog.id]: e.target.value })
                }
              />
              <button className='commentButton' onClick={() => handleCommentSubmit(blog.id)}>Submit</button>
            </div>
          </div>
        ))}
      </div>
      <Link to="/create-blog" className="create-blog-link">
        Create a new blog post
      </Link>
    </div>
  );
};

export default Blog;
