import React, { useEffect } from 'react'
import pfp from '../assets/images/new-pfp.png'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const control = useAnimation()
	const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-200px 0px'
  })

  const sectionVariant = {
    hidden: { opacity: 0, scale: 0 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
          staggerChildren: 0.1,
          delayChildren: 0.3
      }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1 }
  };

  useEffect(() => {
    if (inView) {
      control.start("show");
    } 
  }, [control, inView]);

  return (
    <motion.section 
      ref={ref}
      id="about" 
      className="about-section p-4">
      <div className="about-wrapper row">
      <motion.div 
        className="col-12 col-md-6 d-flex flex-column justify-content-between align-items-center"
        variants={sectionVariant}
        initial="hidden"
        animate={control}>
        <motion.img src={pfp} alt="Summer's Profile Picture" className="about-image" variants={itemVariant} />
        <motion.div className="" variants={itemVariant}>
          <div className="card p-4">
            <h1 className="fw-bold mb-0">I am a Web Developer.</h1>
            <h4 className="mb-4">(And Illustrator, sometimes.)</h4>
            <p>I am on a mission to eradicate uninspired web design! Introducing a fresh and vibrant perspective to web development, I am passionate about breathing life into digital spaces with exciting, diverse, and captivating designs. Through this endeavor, I aim to contribute to a digital landscape that not only reflects the ever-evolving nature of technology but also resonates with the hearts and minds of those who interact with it.</p>
          </div>
        </motion.div>
      </motion.div>	
      <motion.div 
        className="col-12 col-md-6 d-flex flex-column justify-content-end"
        variants={sectionVariant}
        initial="hidden"
        animate={control}>
        <motion.div className="my-4" variants={itemVariant}>
          <div className="card">
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe me-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Website</h6>
                <a href="https://tempest-portfolio.herokuapp.com/">tempest-portfolio</a>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github me-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>Github</h6>
                <a href="https://github.com/tempestTypist" target="_blank" rel="noopener noreferrer">tempestTypist</a>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
              <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather me-2 icon-inline"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>LinkedIn</h6>
                <a href="https://linkedin.com/in/tempest-typist" target="_blank" rel="noopener noreferrer">tempest-typist</a>
              </li>
            </ul>
          </div>
        </motion.div>
        <motion.div variants={itemVariant}>
          <div className="card p-3">
            <div className="card-body">
              <h4 className="d-flex align-items-center mb-3">Skills</h4>
              <div className="row">
                <div className="col-12">
                    <small>HTML &amp; CSS</small>
                    <div className="progress">
                        <div 
                          className="progress-bar progress-bar-striped" 
                          role="progressbar" 
                          aria-valuenow="99" 
                          aria-valuemin="0" 
                          aria-valuemax="100" 
                          style={{"width":"99.9%"}} />
                    </div>
                    <small>Javascript</small>
                    <div className="progress">
                        <div 
                          className="progress-bar progress-bar-striped" 
                          role="progressbar" 
                          aria-valuenow="90" 
                          aria-valuemin="0" 
                          aria-valuemax="100" 
                          style={{"width":"95%"}} />
                    </div>
                    <small>Bootstrap</small>
                    <div className="progress">
                        <div 
                          className="progress-bar progress-bar-striped" 
                          role="progressbar" 
                          aria-valuenow="99" 
                          aria-valuemin="0" 
                          aria-valuemax="100" 
                          style={{"width":"99.9%"}} />
                    </div>
                    <small>React</small>
                    <div className="progress">
                        <div 
                          className="progress-bar progress-bar-striped" 
                          role="progressbar" 
                          aria-valuenow="90" 
                          aria-valuemin="0" 
                          aria-valuemax="100" 
                          style={{"width":"98%"}} />
                    </div>
                    <small>Node.js</small>
                    <div className="progress">
                        <div 
                          className="progress-bar progress-bar-striped" 
                          role="progressbar" 
                          aria-valuenow="85" 
                          aria-valuemin="0" 
                          aria-valuemax="100" 
                          style={{"width":"88%"}} />
                    </div>
                    <small>MongoDB</small>
                    <div className="progress">
                        <div 
                          className="progress-bar progress-bar-striped" 
                          role="progressbar" 
                          aria-valuenow="80" 
                          aria-valuemin="0" 
                          aria-valuemax="100" 
                          style={{"width":"85%"}} />
                    </div>
                    <small>MySQL</small>
                    <div className="progress">
                        <div 
                          className="progress-bar progress-bar-striped" 
                          role="progressbar" 
                          aria-valuenow="80" 
                          aria-valuemin="0" 
                          aria-valuemax="100" 
                          style={{"width":"90%"}} />
                    </div>
                    <small>Python</small>
                    <div className="progress">
                        <div 
                          className="progress-bar progress-bar-striped" 
                          role="progressbar" 
                          aria-valuenow="80" 
                          aria-valuemin="0" 
                          aria-valuemax="100" 
                          style={{"width":"70%"}} />
                    </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>	
      </div>
    </motion.section>
  );
};

export default About;