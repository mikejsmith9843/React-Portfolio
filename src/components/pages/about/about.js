import React from "react";
import "./about.css";
import hero from "../../../images";
import CardMedia from "@mui/material/CardMedia";

export default function about() {
    return (
        <>
          <div className="image-container">
            <CardMedia
              component="img"
              className="color-img"
              style={{
                height: "auto",
                width: "50%",
                margin: "0 auto",
                paddingtop: "20px",
              }}
              image={hero}
              alt="About Me"
              />
          </div>

          <div style={{ width: "70%", margin: "0 auto" }}>
            <h1 id="about-me-title">About Me</h1>
            <p id="p-about">
                Hello! I'm a full stack software developer with a unique background in
                the music industry. I bring a diverse skill set and passion for 
                learning and pushing boundaries in my professional life and personal
                life.
            </p>
            <p id="p-about">
                I have a strong foundation in critical thinking, problem solving and
                an artistic nature. My experiences in the music industry has taught
                me time management, effective communication and the joy of creation.
            </p>
            <p id="p-about">
                Outside of the software development world, I find great joy in
                painting or taking the time to enjoy life with friends. Weather 
                it's going to museum, golfing, going to concerts or trying to 
                make something out of nothing. I thrive on the uniqueness and
                challenge they present. The mindset of learning and seeking
                new experiences translates into my approach to problem-solving
                in the tech field.
            </p>
            <p id="p-about">
                I am always eager to explore new places and
                cultures. I believe that exposure to diverse environments fuels
                creativity and fosters personal growth. I am particularly interested
                in connecting with potential mentors, tech enthusiasts, and anyone
                passionate about full stack development. Collaboration and learning
                from others are essential to my professional development, and I'm
                excited to connect with like-minded individuals who share my
                enthusiasm for technology and its limitless possibilities.
            </p>
            <p id="p-about">
                Let's go on this journey together, whether it's discussing the
                latest tech trends, exchanging ideas on full stack development, or
                simply sharing things that we find enjoyment in. I'meager to connect, 
                learn, and grow alongside fellow enthusiasts in the
                tech community.
            </p>
          </div>
        </>
    );
}