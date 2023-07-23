// CreateBlog.js (assuming this is the page where you create new blog posts)

import React, { useContext, useState } from 'react';
import { BlogContext } from './BlogContext';

const CreateBlog = () => {
  const { blogs, setBlogs } = useContext(BlogContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(''); // Assuming you have an image input field

  const handleCreateBlog = () => {
    if (title.trim() === '' || content.trim() === '') return;

    const newBlog = {
      id: blogs.length + 1,
      title,
      content,
      image, // Assuming you have an image input field that updates the `image` state
    };

    setBlogs([...blogs, newBlog]);
    setTitle('');
    setContent('');
    setImage('');
  };

  return (
    <div className="create-blog-container">
      <h2>Create a New Blog</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button onClick={handleCreateBlog}>Submit</button>
    </div>
  );
};

export default CreateBlog;
