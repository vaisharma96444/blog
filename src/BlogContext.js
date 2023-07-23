// BlogContext.js

import React, { createContext, useState } from 'react';

const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: 'Blog 1',
      content: 'This is the content of Blog 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-desktop-background-1691.jpg',
      video: '', // Replace with the actual video URL or embed code
    },
    {
      id: 2,
      title: 'Blog 2',
      content: 'This is the content of Blog 2. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-desktop-background-1691.jpg',
      video: '', // Replace with the actual video URL or embed code
    },
  ]);

  return (
    <BlogContext.Provider value={{ blogs, setBlogs }}>
      {children}
    </BlogContext.Provider>
  );
};

export { BlogContext, BlogProvider };
