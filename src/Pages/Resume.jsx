import React, { useState } from 'react';
import './Resume.css'; // Import your CSS file

const Resume = () => {
  const [resume, setResume] = useState(null);

  const handleUpload = (event) => {
    const file = event.target.files[0];
    setResume(file);
  };

  // Define the URL to your resume file
  const resumeURL = 'path/to/your-resume.pdf'; // Replace with the actual path to your resume file

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeURL;
    link.download = 'YourResume.pdf';
    link.click();
  };

  const name = "John Doe";
  const email = "john.doe@example.com";
  const phone = "(123) 456-7890";
  const linkedin = "https://www.linkedin.com/in/johndoe";
  const github = "https://github.com/johndoe";
  const address = "123 Main St, City, State, Zip";

  const professionalExperience = [
    {
      title: "Software Engineering Intern",
      company: "ABC Company",
      location: "New York, NY",
      date: "January 2022 - June 2022",
      responsibilities: [
        "Developed and maintained web applications using PHP and MySQL",
        "Worked with a team of engineers to design and implement new features",
        "Successfully launched several new products on time and on budget",
      ],
    },
    {
      title: "Front-end Developer",
      company: "XYZ Corporation",
      location: "San Francisco, CA",
      date: "July 2021 - December 2021",
      responsibilities: [
        "Designed and developed user-friendly, responsive web interfaces using React",
        "Collaborated with UX designers to create visually appealing and functional designs",
        // "Optimized website performance for speed and responsiveness",
      ],
    },
    // Add more entries as needed
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Engineering",
      university: "XYZ University",
      location: "Los Angeles, CA",
      date: "2017 - 2021",
    },
    {
      degree: "Master of Science in Computer Science",
      university: "ABC University",
      location: "Chicago, IL",
      date: "2021 - 2023",
    },
    // Add more entries as needed
  ];

  const skills = [
    "Programming languages: PHP, JavaScript, Python",
    "Web development frameworks: Laravel, React, Node.js",
    "Databases: MySQL, PostgreSQL",
    "Cloud computing platforms: AWS, Azure",
    "Version Control: Git, GitHub",
    "UI/UX Design",
    // Add more skills as needed
  ];

  const certificates = [
    "Certified Web Developer (2022)",
    "AWS Certified Solutions Architect - Associate (2021)",
    // Add more certificates as needed
  ];

  const awards = [
    "Outstanding Contribution Award, ABC Company (2022)",
    "Scholarship for Academic Excellence, XYZ University (2018)",
    // Add more awards as needed
  ];

  return (
    <div className="resume">
      <header>
        <h1>{name}</h1>
        <p>{email} | {phone}</p>
      </header>

      <div className="contact">
        <h2>Contact Information</h2>
        <div>
          <p>Address: {address}</p>
          <p>Email: {email}</p>
        </div>
        <div>
          <p>LinkedIn: <a href={linkedin} target="_blank" rel="noopener noreferrer">{linkedin}</a></p>
          <p>Github: <a href={github} target="_blank" rel="noopener noreferrer">{github}</a></p>
        </div>
      </div>

      <div className="professional-experience">
        <h2>Professional Experience</h2>
        {professionalExperience.map((experience, index) => (
          <div key={index}>
            <h3>{experience.title} at {experience.company}</h3>
            <p>{experience.location} | {experience.date}</p>
            <ul>
              {experience.responsibilities.map((responsibility, i) => (
                <li key={i}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="education">
        <h2>Education</h2>
        {education.map((edu, index) => (
          <div key={index}>
            <h3>{edu.degree}</h3>
            <p>{edu.university} | {edu.location} | {edu.date}</p>
          </div>
        ))}
      </div>

      <div className="skills">
        <h2>Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="certificates">
        <h2>Certificates</h2>
        <ul>
          {certificates.map((certificate, index) => (
            <li key={index}>{certificate}</li>
          ))}
        </ul>
      </div>

      <div className="awards">
        <h2>Awards</h2>
        <ul>
          {awards.map((award, index) => (
            <li key={index}>{award}</li>
          ))}
        </ul>
      </div>

      <div className="download-button12">
        <button onClick={handleDownload}>Download Resume</button>
      </div>
    </div>
  );
};

export default Resume;
