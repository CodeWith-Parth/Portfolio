import React from "react";
import './About.css';
import Bw1 from './Bw1.jpg';
import Project6 from './Project6.jpg';
import PhotographyImage from './PhotographyImage.jpg';
import HikingImage from './HikingImage.jpg';
import CookingImage from './CookingImage.jpg';

const AboutPage = () => {
  const [imageLoaded, setImageLoaded] = React.useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const head = "About Me";
  const para = "  I am an enthusiastic and motivated frontend developer with a strong desire to make an impact in the world of web development. As a recent graduate in Computer Science, I am eager to embark on my journey to create stunning and user-friendly web applications.";

  const para1 = "My passion for coding led me to specialize in frontend technologies, and I have gained proficiency in HTML, CSS, JavaScript, and modern frontend frameworks such as React. I am committed to crafting pixel-perfect, responsive, and visually appealing websites that leave a lasting impression.";

  const para2 = " When I'm not coding, I'm continuously expanding my knowledge by learning new web technologies and best practices. I am committed to staying up-to-date with the latest trends and always seeking opportunities for growth.";

  const para3 = " If you're seeking a dedicated and energetic frontend developer to bring your web projects to life, I'm excited to be part of your team and contribute my skills to your success.";

  const hi = "About Me";

  const para4 = " I'm an aspiring frontend developer with a passion for creating visually appealing and user-friendly websites. I hold a B.Tech degree in Computer Engineering, which has equipped me with a strong foundation in web technologies and coding. As a recent graduate, I'm excited to kickstart my career in web development and leverage my knowledge in HTML, CSS, and JavaScript to build responsive and elegant web solutions.";

  const para5 = " Outside of coding, I'm a quick learner, always keeping up with the latest frontend technologies and design trends. I'm dedicated to continuous self-improvement and eager to tackle new challenges in web development.";

  const para6 = "If you're looking for an enthusiastic frontend developer with a strong educational background in Computer Engineering to join your team, I'm ready to bring my creativity and skills to your projects.";

  const hii = "My Interests";

  const para7 = " Besides web development, I have a strong passion for photography. Capturing beautiful moments through the lens is a hobby I cherish.";

  const para8 = " I'm also an avid hiker and love exploring the great outdoors. It's a perfect way to recharge and find inspiration.";

  const para9 = "In my free time, I enjoy experimenting with new cooking recipes and trying different cuisines. Cooking allows me to explore different cultures and flavors.";

  const para10 = "Additionally, I love traveling to new places, meeting people, and experiencing different cultures. Traveling broadens my horizons and fuels my creativity.";

  return (
    <section className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="common-container">
              <div className="image-container">
                <img
                  src={Bw1}
                  alt="About Me"
                  className="rounded-image image-effect"
                  onLoad={handleImageLoad}
                />
              </div>

              <div className="card text-content">
                <h2>{head}</h2>
                <p>{para}</p>
                <p>{para1}</p>
                <p>{para2}</p>
                <p> {para3}</p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="common-container">
              <div className="card text-content">
                <h2>{hi}</h2>
                <p>{para4}</p>
                <p>{para5}</p>
                <p>{para6}</p>

              </div>

              <div className="image-container">
                {imageLoaded && (
                  <img
                    src={Project6}
                    alt="About Me 2"
                    className="rounded-image image-effect"
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="card text-content">
              <h3>{hii}</h3>

               <p>{para7}</p>
              <img src={PhotographyImage} alt="Photography" className="interest-image" />

              <p>{para8}</p>
              <img src={HikingImage} alt="Hiking" className="interest-image" />

              <p>{para9}</p>
              <img src={CookingImage} alt="Cooking" className="interest-image" />

              <p>{para10}</p>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
