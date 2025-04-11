// blog_cards.js
import React from "react";

const BlogCard = ({ title, description, image, link }) => {
  return (
    <div className="blog-card">
      <img src={image} alt={title} className="blog-card-img" />
      <div className="blog-card-content">
        <h2 className="blog-card-title">{title}</h2>
        <p className="blog-card-desc">{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="read-more-btn">
          Read More
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
