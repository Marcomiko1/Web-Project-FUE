import './Skills_Style.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Skills = () => {

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 600 }, items: 2 },
    mobile: { breakpoint: { max: 600, min: 0 }, items: 1 }
  };

  const skills = [
    { name: "Frontend Development", desc: "React, HTML, CSS" },
    { name: "JavaScript", desc: "ES6+, APIs, Async" },
    { name: "UI / UX", desc: "Figma, Design Systems" },
    { name: "Backend Basics", desc: "Node, Express" },
    { name: "Responsive Design", desc: "Mobile-first UI" },
  ];

  return (
    <section className="skills-section" id="skills">      
      <div className="skills-wrapper"> {/* 🔥 rounded container */}
        <div className="skills-container">
          <h2>My Skills</h2>
          <p>Technologies and tools I work with.</p>

          <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000} arrows={true} showDots={true} className="skills-carousel">
            {skills.map((skill, index) => (
              <div className="skill-card" key={index}>
                <h4>{skill.name}</h4>
                <p>{skill.desc}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Skills;