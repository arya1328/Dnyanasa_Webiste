import React from "react";
import "./appstories.css";

export default function AppStories() {
  const images = [
    { src: "/images/story1.jpg", type: "wide" },
    { src: "/images/story2.jpg", type: "tall" },
    { src: "/images/story3.jpg", type: "small" },
    { src: "/images/story4.jpg", type: "tall" },
    { type: "title" },
    { src: "/images/story5.jpg", type: "small" },
    { src: "/images/story6.jpg", type: "wide" },
    { src: "/images/story7.jpg", type: "small" },
    { src: "/images/story8.jpg", type: "tall" },
    { src: "/images/story9.jpg", type: "small" },
  ];

  return (
    <div className="story-section">
      <div className="story-grid">
        {images.map((img, index) =>
          img.type === "title" ? (
            <div key={index} className="title">OUR STORIES</div>
          ) : (
            <div
              key={index}
              className={`box ${img.type}`}
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + img.src})`,
              }}
            ></div>
          )
        )}
      </div>
    </div>
  );
}
