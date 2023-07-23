// BlogContext.js

import React, { createContext, useState } from 'react';

const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: 'Nature',
      content: 'Nature is a magnificent tapestry of life that surrounds us, encompassing all living organisms, landscapes, and ecosystems on Earth. It is an awe-inspiring creation that never ceases to amaze us with its beauty, diversity, and resilience. From the vast oceans to the towering mountains, from lush forests to arid deserts, and from the smallest insects to the grandest mammals, nature holds a treasure trove of wonders..',
      image: 'https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-desktop-background-1691.jpg',
      video: '', // Replace with the actual video URL or embed code
    },
    {
      id: 2,
      title: 'Time',
      content: 'Nature is a magnificent tapestry of life that surrounds us, encompassing all living organisms, landscapes, and ecosystems on Earth. It is an awe-inspiring creation that never ceases to amaze us with its beauty, diversity, and resilience. From the vast oceans to the towering mountains, from lush forests to arid deserts, and from the smallest insects to the grandest mammals, nature holds a treasure trove of wonders..',
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
