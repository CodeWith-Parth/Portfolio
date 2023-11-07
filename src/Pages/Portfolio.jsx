import React, { useState } from 'react';
import './Portfolio.css';
import Pro1 from './Pro1.jpg';
import Pro2 from './Pro2.jpg';
import Pro3 from './Pro3.jpg';
import Pro4 from './Pro4.jpg';
import Case1 from './Case1.jpg';
import Case2 from './Case2.jpg';
import Case3 from './Case3.jpg';
import Case4 from './Case4.jpg';
import Bl1 from './Bl1.jpg';
import Bl2 from './Bl2.jpg';
import Bl3 from './Bl3.jpg';
import Bl4 from './Bl4.jpg';

const PortfolioItem = ({ title, description, image, link, technologies, duration, role }) => {
  return (
    <div className="portfolio-item">
      <img src={image} alt={title} />
      <div className="portfolio-item-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <p><strong>Technologies:</strong> {technologies}</p>
        <p><strong>Duration:</strong> {duration}</p>
        <p><strong>Role:</strong> {role}</p>
        {/* // Inside PortfolioItem component */}
        <a href={link} className="view-project-button">View Project</a>
      </div>
    </div>
  );
};

const CaseStudy = ({ title, description, image, link, problem, solution, results, clientTestimonial }) => {
  return (
    <div className="case-study">
      <img src={image} alt={title} />
      <div className="case-study-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <h4>Problem:</h4>
        <p>{problem}</p>
        <h4>Solution:</h4>
        <p>{solution}</p>
        <h4>Results:</h4>
        <p>{results}</p>
        <p><strong>Client Testimonial:</strong> {clientTestimonial}</p>
        {/* // Inside CaseStudy component */}
        <a href={link} className="read-case-study-button">Read Case Study</a>
      </div>
    </div>
  );
};

const BlogPost = ({ title, content, image, date, author, link }) => {
  return (
    <div className="portfolio-item">
      <img src={image} alt={title} />
      <div className="portfolio-item-info">
        <h3>{title}</h3>
        <p>{content}</p>
        <p><strong>Date:</strong> {date}</p>
        <p><strong>Author:</strong> {author}</p>
        <a href={link} className="view-project-button">Read Post</a>
      </div>
    </div>
  );
};

const PortfolioPage = () => {
  const [portfolioData, setPortfolioData] = useState([
    {
      title: 'Project 1',
      description: 'A detailed description of your work on Project 1.',
      image: Pro1,
      link: 'https://example.com/project-1',
      technologies: 'React, Node.js, MongoDB',
      duration: '6 months',
      role: 'Frontend Developer',
    },
    {
      title: 'Project 2',
      description: 'A detailed description of your work on Project 2.',
      image: Pro2,
      link: 'https://example.com/project-2',
      technologies: 'Angular, Express, PostgreSQL',
      duration: '8 months',
      role: 'Full-Stack Developer',
    },
    {
      title: 'Project 3',
      description: 'A data analytics dashboard for a financial company.',
      image: Pro3,
      link: 'https://example.com/project-3',
      technologies: 'Python, Django, PostgreSQL',
      duration: '10 months',
      role: 'Data Analyst',
    },
    {
      title: 'Project 4',
      description: 'A responsive website for a non-profit organization.',
      image: Pro4,
      link: 'https://example.com/project-4',
      technologies: 'HTML, CSS, JavaScript, WordPress',
      duration: '4 months',
      role: 'Frontend Web Developer',
    },
    // Add more project data here
  ]);

  const [caseStudyData, setCaseStudyData] = useState([
    {
      title: 'Case Study 1',
      description: 'A detailed description of a case study.',
      image: Case1,
      link: 'https://example.com/case-study-1',
      problem: 'Challenges faced by the client',
      solution: 'How the project addressed the challenges',
      results: 'Quantifiable results and impact',
      clientTestimonial: 'The client’s feedback on the project',
    },
    {
      title: 'Case Study 2',
      description: 'A detailed description of a case study.',
      image: Case2,
      link: 'https://example.com/case-study-1',
      problem: 'Challenges faced by the client',
      solution: 'How the project addressed the challenges',
      results: 'Quantifiable results and impact',
      clientTestimonial: 'The client’s feedback on the project',
    },

    {
      title: 'Case Study 3',
      description: 'A detailed description of a case study.',
      image: Case3,
      link: 'https://example.com/case-study-1',
      problem: 'Challenges faced by the client',
      solution: 'How the project addressed the challenges',
      results: 'Quantifiable results and impact',
      clientTestimonial: 'The client’s feedback on the project',
    },
    {
      title: 'Case Study 4',
      description: 'A detailed description of a case study.',
      image: Case4,
      link: 'https://example.com/case-study-1',
      problem: 'Challenges faced by the client',
      solution: 'How the project addressed the challenges',
      results: 'Quantifiable results and impact',
      clientTestimonial: 'The client’s feedback on the project',
    },

    // Add more case study data here
  ]);

  const [blogData, setBlogData] = useState([
    {
      title: 'Blog Post 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: Bl1,
      date: 'October 1, 2023',
      author: 'John Doe',
      link: 'https://example.com/blog-post-1', // Add the link for Blog Post 1
    },
    {
      title: 'Blog Post 2',
      content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: Bl2,
      date: 'October 5, 2023',
      author: 'Jane Smith',
      link: 'https://example.com/blog-post-2', // Add the link for Blog Post 2
    },
    {
      title: 'Blog Post 3',
      content: 'Aenean euismod elementum ipsum, nec pellentesque mi fringilla.',
      image: Bl3,
      date: 'October 10, 2023',
      author: 'Alice Johnson',
      link: 'https://example.com/blog-post-3', // Add the link for Blog Post 3
    },
    {
      title: 'Blog Post 4',
      content: 'Vivamus tincidunt, mi eu ullamcorper laoreet, urna elit scelerisque.',
      image: Bl4,
      date: 'October 15, 2023',
      author: 'Robert Brown',
      link: 'https://example.com/blog-post-4', // Add the link for Blog Post 4
    },
    // Add more blog post data here
  ]);
  



  return (
    <section className="portfolio-section">
      <h1>Portfolio</h1>
      <p>Here are some of my recent projects.</p>
      <div className="portfolio-grid">
        {portfolioData.map((project) => (
          <PortfolioItem
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
            technologies={project.technologies}
            duration={project.duration}
            role={project.role}
          />
        ))}
      </div>

      <h1>Case Studies</h1>
      <p>Here are some case studies of my work.</p>
      <div className="case-study-grid">
        {caseStudyData.map((caseStudy) => (
          <CaseStudy
            key={caseStudy.title}
            title={caseStudy.title}
            description={caseStudy.description}
            image={caseStudy.image}
            link={caseStudy.link}
            problem={caseStudy.problem}
            solution={caseStudy.solution}
            results={caseStudy.results}
            clientTestimonial={caseStudy.clientTestimonial}
          />
        ))}
      </div>
      {/* Add more sections and features as needed */}
      <div className="blog">
        <h1 className="blog-title">Blog</h1>
        <p>Read my latest blog posts:</p>
        <div className="portfolio-grid"> {/* Use the "portfolio-grid" class */}
          {blogData.map((blogPost) => (
            <BlogPost
              key={blogPost.title}
              title={blogPost.title}
              content={blogPost.content}
              image={blogPost.image}
              date={blogPost.date}
              author={blogPost.author}
              link={blogPost.link} 
            />
          ))}
        </div>
      </div>

    </section>


  );
};

export default PortfolioPage;
