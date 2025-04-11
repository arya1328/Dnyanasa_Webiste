// blogs.js
import React from "react";
import BlogCard from "./components/blog_cards";
import "./components/blog_cards.css";

const blogData = [
  {
    id: 1,
    title: "Blog 1",
    description: "Description of Blog 1",
    image: "./images/music.jpg",
    link: "https://yourblog.com/Blog1"
  },
  {
    id: 2,
    title: "Blog 2",
    description: "Description of Blog 2",
    image: "./images/music.jpg",
    link: "https://yourblog.com/Blog2"
  },
  {
    id: 3,
    title: "Blog 3",
    description: "Description of Blog 3",
    image: "./images/music.jpg",
    link: "https://yourblog.com/Blog3"
  },
];

const Blogs = () => {
  return (
    <div className="blogs-container">
      <h1 className="blogs-title">Latest Blogs</h1>
      <div className="blog-cards-wrapper">
        {blogData.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
