import React, { useEffect } from 'react'
import pfp from '../assets/space-theme/images/new-pfp.png'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
// import { Container, Row, Col } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLinkedin } from '@fortawesome/free-solid-svg-icons'
import SkillBar from '../components/SkillBar/'
import Socials from '../components/Socials/'

const About = () => {
  const control = useAnimation()
	const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-200px 0px'
  })

  const iconGlobe = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe me-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>;
  const iconGithub = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github me-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>;
  const iconLinkedin = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin me-2 icon-inline"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>;

  const socials = [{
    label: "Website",
    title: "tempest-portfolio",
    icon: iconGlobe,
    link: "https://tempest-typist.com/"
  }, {
    label: "Github",
    title: "tempestTypist",
    icon: iconGithub,
    link: "https://github.com/tempestTypist"
  }, {
    label: "LinkedIn",
    title: "tempest-typist",
    icon: iconLinkedin,
    link: "https://linkedin.com/in/tempest-typist"
  }]

  const skills = [
    {
      name: "HTML+CSS",
      percent: "100"
    }, 
    {
      name: "Javascript",
      percent: "95"
    }, 
    {
      name: "Bootstrap",
      percent: "100"
    }, 
    {
      name: "React",
      percent: "98"
    }, 
    {
      name: "Node.JS",
      percent: "90"
    }, 
    {
      name: "MongoDB",
      percent: "85"
    }, 
    {
      name: "MySQL",
      percent: "84"
    }, 
    {
      name: "Python",
      percent: "70"
  }]

  const colA = {
    hidden: { opacity: 0, scale: 0 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
          staggerChildren: 0.1,
          delayChildren: 0.3
      }
    }
  }

  const colB = {
    hidden: { opacity: 0, scale: 0 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
          staggerChildren: 0.2,
          delayChildren: 0.4
      }
    }
  }

  const aboutItem = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1 }
  };

  useEffect(() => {
    if (inView) {
      control.start("show");
    } ;
  }, [control, inView]);

  return (
    <section ref={ref} id="about" className="row justify-content-center mx-lg-5"> 

        <motion.div 
          className="about-column-left col-md-7 col-lg-8"
          variants={colA}
          initial="hidden"
          animate={control}
          >
          {/* about me image */}
          <motion.img 
            loading="lazy"
            src={pfp} 
            alt="Summer's Profile Picture" 
            className="about-image" 
            variants={aboutItem} 
            />

          {/* about me */}
          <motion.div className="about-desc" variants={aboutItem}>
            <div className="card p-4">
              <div className="card-body">
                <h1 className="fw-bold mb-0">I am a <span>Web Developer</span></h1>
                <h4 className="mb-4">(And Illustrator!)</h4>
                <p>I am on a mission to eradicate uninspired web design! Introducing a fresh and vibrant perspective to web development, I am passionate about breathing life into digital spaces with exciting, diverse, and captivating designs. Through this endeavor, I aim to contribute to a digital landscape that not only reflects the ever-evolving nature of technology but also resonates with the hearts and minds of those who interact with it.
                
                {/* socials */}
                  <ul className="socials list-group list-group-flush mt-4">
                    {socials.map((social) => 
                      <Socials label={social.label} title={social.title} icon={social.icon} link={social.link} />)}
                  </ul>
                </p>
              </div>
            </div>
          </motion.div>

        </motion.div>

        <motion.div 
          className="about-column-right col-md-5 col-lg-4"
          variants={colB}
          initial="hidden"
          animate={control}
          >
          {/* socials */}
          <motion.div className="socials-card my-4" variants={aboutItem}>
              <div className="card">
                <ul className="socials list-group list-group-flush">
                  {socials.map((social) => 
                      <Socials label={social.label} title={social.title} icon={social.icon} link={social.link} />)}
                </ul>
              </div>
          </motion.div>

          {/* skills */}
          <motion.div className="skills-card" variants={aboutItem}>
            <div className="card">
              <div className="card-body">
                <h4 className="mb-3">Skills</h4>
                <ul className="skills">
                  {skills.map((skill) =>
                    <SkillBar key={"skill-" + skill.name} name={skill.name} percent={skill.percent} />) }
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>

    </section>
  )
};

export default About;