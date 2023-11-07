// import React, { useState } from 'react';
// import './Portfolio.css';
// import Pro1 from './Pro1.jpg';
// import Pro2 from './Pro2.jpg';
// import Pro3 from './Pro3.jpg';
// import Pro4 from './Pro4.jpg';
// import Case1 from './Case1.jpg';
// import Case2 from './Case2.jpg';
// import Case3 from './Case3.jpg';
// import Case4 from './Case4.jpg';


// const PortfolioItem = ({ title, description, image, link, technologies, duration, role }) => {
//   return (
//     <div className="portfolio-item">
//       <img src={image} alt={title} />
//       <div className="portfolio-item-info">
//         <h3>{title}</h3>
//         <p>{description}</p>
//         <p><strong>Technologies:</strong> {technologies}</p>
//         <p><strong>Duration:</strong> {duration}</p>
//         <p><strong>Role:</strong> {role}</p>
//         <a href={link}>View Project</a>
//       </div>
//     </div>
//   );
// };

// const CaseStudy = ({ title, description, image, link, problem, solution, results, clientTestimonial }) => {
//   return (
//     <div className="case-study">
//       <img src={image} alt={title} />
//       <div className="case-study-info">
//         <h3>{title}</h3>
//         <p>{description}</p>
//         <h4>Problem:</h4>
//         <p>{problem}</p>
//         <h4>Solution:</h4>
//         <p>{solution}</p>
//         <h4>Results:</h4>
//         <p>{results}</p>
//         <p><strong>Client Testimonial:</strong> {clientTestimonial}</p>
//         <a href={link}>Read Case Study</a>
//       </div>
//     </div>
//   );
// };

// const BlogPost = ({ title, content, image, date, author }) => {
//   return (
//     <div className="blog-post">
//       <img src={image} alt={title} />
//       <div className="blog-post-info">
//         <h3>{title}</h3>
//         <p>{content}</p>
//         <p><strong>Date:</strong> {date}</p>
//         <p><strong>Author:</strong> {author}</p>
//       </div>
//     </div>
//   );
// };


// const PortfolioPage = () => {
//   const [portfolioData, setPortfolioData] = useState([
//     {
//       title: 'Project 1',
//       description: 'A detailed description of your work on Project 1.',
//       image: Pro1,
//       link: 'https://example.com/project-1',
//       technologies: 'React, Node.js, MongoDB',
//       duration: '6 months',
//       role: 'Frontend Developer',
//     },
//     {
//       title: 'Project 2',
//       description: 'A detailed description of your work on Project 2.',
//       image: Pro2,
//       link: 'https://example.com/project-2',
//       technologies: 'Angular, Express, PostgreSQL',
//       duration: '8 months',
//       role: 'Full-Stack Developer',
//     },
//     {
//       title: 'Project 3',
//       description: 'A data analytics dashboard for a financial company.',
//       image: Pro3,
//       link: 'https://example.com/project-3',
//       technologies: 'Python, Django, PostgreSQL',
//       duration: '10 months',
//       role: 'Data Analyst',
//     },
//     {
//       title: 'Project 4',
//       description: 'A responsive website for a non-profit organization.',
//       image: Pro4,
//       link: 'https://example.com/project-4',
//       technologies: 'HTML, CSS, JavaScript, WordPress',
//       duration: '4 months',
//       role: 'Frontend Web Developer',
//     },
//     // Add more project data here
//   ]);

//   const [caseStudyData, setCaseStudyData] = useState([
//     {
//       title: 'Case Study 1',
//       description: 'A detailed description of a case study.',
//       image: Case1,
//       link: 'https://example.com/case-study-1',
//       problem: 'Challenges faced by the client',
//       solution: 'How the project addressed the challenges',
//       results: 'Quantifiable results and impact',
//       clientTestimonial: 'The client’s feedback on the project',
//     },
//     {
//       title: 'Case Study 2',
//       description: 'A detailed description of a case study.',
//       image: Case2,
//       link: 'https://example.com/case-study-1',
//       problem: 'Challenges faced by the client',
//       solution: 'How the project addressed the challenges',
//       results: 'Quantifiable results and impact',
//       clientTestimonial: 'The client’s feedback on the project',
//     },

//     {
//       title: 'Case Study 3',
//       description: 'A detailed description of a case study.',
//       image: Case3,
//       link: 'https://example.com/case-study-1',
//       problem: 'Challenges faced by the client',
//       solution: 'How the project addressed the challenges',
//       results: 'Quantifiable results and impact',
//       clientTestimonial: 'The client’s feedback on the project',
//     },
//     {
//       title: 'Case Study 4',
//       description: 'A detailed description of a case study.',
//       image: Case4,
//       link: 'https://example.com/case-study-1',
//       problem: 'Challenges faced by the client',
//       solution: 'How the project addressed the challenges',
//       results: 'Quantifiable results and impact',
//       clientTestimonial: 'The client’s feedback on the project',
//     },

//     // Add more case study data here
//   ]);

//   const [blogData, setBlogData] = useState([
//     {
//       title: 'Blog Post 1',
//       content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//       image: 'blog-image-1.jpg',
//       date: 'October 1, 2023',
//       author: 'John Doe',
//     },
//     {
//       title: 'Blog Post 2',
//       content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//       image: 'blog-image-2.jpg',
//       date: 'October 5, 2023',
//       author: 'Jane Smith',
//     },
//     {
//       title: 'Blog Post 3',
//       content: 'Aenean euismod elementum ipsum, nec pellentesque mi fringilla.',
//       image: 'blog-image-3.jpg',
//       date: 'October 10, 2023',
//       author: 'Alice Johnson',
//     },
//     {
//       title: 'Blog Post 4',
//       content: 'Vivamus tincidunt, mi eu ullamcorper laoreet, urna elit scelerisque.',
//       image: 'blog-image-4.jpg',
//       date: 'October 15, 2023',
//       author: 'Robert Brown',
//     },
//   ]);
  
//     // Add more blog post data here
//   ]);



//   return (
//     <section className="portfolio-section">
//       <h1>Portfolio</h1>
//       <p>Here are some of my recent projects.</p>
//       <div className="portfolio-grid">
//         {portfolioData.map((project) => (
//           <PortfolioItem
//             key={project.title}
//             title={project.title}
//             description={project.description}
//             image={project.image}
//             link={project.link}
//             technologies={project.technologies}
//             duration={project.duration}
//             role={project.role}
//           />
//         ))}
//       </div>

//       <h1>Case Studies</h1>
//       <p>Here are some case studies of my work.</p>
//       <div className="case-study-grid">
//         {caseStudyData.map((caseStudy) => (
//           <CaseStudy
//             key={caseStudy.title}
//             title={caseStudy.title}
//             description={caseStudy.description}
//             image={caseStudy.image}
//             link={caseStudy.link}
//             problem={caseStudy.problem}
//             solution={caseStudy.solution}
//             results={caseStudy.results}
//             clientTestimonial={caseStudy.clientTestimonial}
//           />
//         ))}
//       </div>
//       {/* Add more sections and features as needed */}

//       <h1>Blog</h1>
//       <p>Read my latest blog posts:</p>
//       <div className="blog-grid">
//         {blogData.map((blogPost) => (
//           <BlogPost
//             key={blogPost.title}
//             title={blogPost.title}
//             content={blogPost.content}
//             image={blogPost.image}
//             date={blogPost.date}
//             author={blogPost.author}
//           />
//         ))}
//       </div>

//     </section>


//   );
// };

// export default PortfolioPage;
