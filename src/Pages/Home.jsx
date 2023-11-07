// HomePage.js
import React from "react";
import './Home.css';
import Blog1 from './Bolg1.jpg';
import Blog2 from '../Pages/Blog2.jpg';
import Project1 from '../Pages/Project1.jpg';
import Project2 from '../Pages/Project2.jpg';
import Project3 from './Project3.jpg';
import Project4 from './Project4.jpg';
import Project5 from './Project5.jpg';
import Project6 from './Project6.jpg'
const HomePage = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="container">
          <h1>My Portfolio</h1>
          <p>I am an aspiring Front-End Developer eager to dive into the world of web development. My passion lies in creating innovative and user-friendly web applications, and I am excited to apply my knowledge and skills to real-world projects.</p>
          <a href="/contact" className="btn btn-primary">Contact Me</a>
        </div>
      </section>

      <section className="about-section11">
        <div className="container">
          <h2>About Me</h2>
          <p>I am a passionate Front-End Developer with a keen eye for creating innovative and user-friendly web applications. I have been working in the field for [number] years, and my dedication to web development continues to grow.</p>
          <p>My expertise extends to a variety of web development technologies, including React, Node.js, and Bootstrap. I am also highly proficient in the fundamental building blocks of the web: HTML, CSS, and JavaScript.</p>
          <p>In my spare time, I enjoy staying up-to-date with the latest programming languages and technologies, constantly expanding my skill set. I'm also an avid enthusiast of [your hobbies or interests], which fuels my creative and problem-solving abilities in the world of web development.</p>
        </div>
      </section>


      <section className="skills-section">
        <div className="container">
          <h2>Skills</h2>
          <ul>
            <li>React</li>
            <li>Node.js</li>
            <li>Bootstrap</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>
      </section>

      <section className="portfolio-section">
  <div className="container">
    <h2>Portfolio</h2>
    <div className="row">
      <div className="col-md-6">
        <img src={Project1} alt="Project 1" />
        <h3 className="project-title">Project 1</h3>
        <p className="project-description12">This is a brief description of my first project.</p>
        <a href="https://example.com/project1" className="btn btn-primary">View Project</a>
      </div>
      <div className="col-md-6">
        <img src={Project2} alt="Project 2" />
        <h3 className="project-title">Project 2</h3>
        <p className="project-description12">This is a brief description of my second project.</p>
        <a href="https://example.com/project2" className="btn btn-primary">View Project</a>
      </div>
      <div className="col-md-6">
        <img src={Project3} alt="Project 3" />
        <h3 className="project-title">Project 3</h3>
        <p className="project-description12">This is a brief description of my third project.</p>
        <a href="https://example.com/project3" className="btn btn-primary">View Project</a>
      </div>
      <div className="col-md-6">
        <img src={Project4} alt="Project 4" />
        <h3 className="project-title">Project 4</h3>
        <p className="project-description12">This is a brief description of my fourth project.</p>
        <a href="https://example.com/project4" className="btn btn-primary">View Project</a>
      </div>
      <div className="col-md-6">
        <img src={Project5} alt="Project 5" />
        <h3 className="project-title">Project 5</h3>
        <p className="project-description12">This is a brief description of my fifth project.</p>
        <a href="https://example.com/project5" className="btn btn-primary">View Project</a>
      </div>
      <div className="col-md-6">
        <img src={Project6} alt="Project 6" />
        <h3 className="project-title">Project 6</h3>
        <p className="project-description12">This is a brief description of my sixth project.</p>
        <a href="https://example.com/project6" className="btn btn-primary">View Project</a>
      </div>
    </div>
  </div>
</section>


<section className="blog-section">
  <div className="container">
    <h2>Latest Blog Posts</h2>
    <div className="row">
      <div className="col-md-6">
        <article className="blog-post">
          <img src={Blog1} alt="Blog Post 1" />
          <h3 className="blog-post-title">Blog Post 1</h3>
          <p className="blog-post-excerpt">This is a brief excerpt from my first blog post.</p>
          <a href="https://example.com/blog/post-1" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Read More</a>
        </article>
      </div>
      <div className="col-md-6">
        <article className="blog-post">
          <img src={Blog1} alt="Blog Post 1" />
          <h3 className="blog-post-title">Blog Post 2</h3>
          <p className="blog-post-excerpt">This is a brief excerpt from my first blog post.</p>
          <a href="https://example.com/blog/post-2" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Read More</a>
        </article>
      </div>
      <div className="col-md-6">
        <article className="blog-post">
          <img src={Blog2} alt="Blog Post 2" />
          <h3 className="blog-post-title">Blog Post 3</h3>
          <p className="blog-post-excerpt">This is a brief excerpt from my second blog post.</p>
          <a href="https://example.com/blog/post-3" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Read More</a>
        </article>
      </div>
    </div>
  </div>
</section>

      <section className="contact-section">
        <div className="container">
          <h2>Contact Me</h2>
          <form action="/contact" method="POST">
            <div className="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your Email" />
            </div>
            <div className="form-group">
              <label for="message">Message</label>
              <textarea id="message" name="message" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
