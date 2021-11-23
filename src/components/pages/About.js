import React from 'react';
import '../../assets/styles/About.css';
import sprite from '../../assets/images/idle-animation.gif';


export default function About() {
  return (
    <div id="about" className="bg-one">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 d-flex justify-content-center justify-content-lg-start pt-4">
                    <h1 className="about-title">About Me</h1>
                </div>
                <div className="col-md-12 col-lg-4 col-xl-3 idle-sprite">
                    <img src={sprite} alt="Guilty Gear idle animation" />
                </div>
                <div className="col-md-12 col-lg-8 col-xl-9 about-container">
                    <div className="about-card">
                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Name</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        Summer Villeneuve
                                    </div>
                                </div>
                                <hr/>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Email</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        svilleneuve1994@gmail.com
                                    </div>
                                </div>
                                <hr/>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Phone</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        (519) 350-1810
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h6 className="d-flex align-items-center mb-3">Stats</h6>
                                        <small>Web Design</small>
                                        <div className="progress mb-3">
                                        <div className="progress-bar bg-primary" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <small>Health</small>
                                        <div className="progress mb-3">
                                        <div className="progress-bar bg-primary" role="progressbar" style={{width: "72%"}} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <small>Imagination</small>
                                        <div className="progress mb-3">
                                        <div className="progress-bar bg-primary" role="progressbar" style={{width: "89%"}} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <small>Percipience</small>
                                        <div className="progress mb-3">
                                        <div className="progress-bar bg-primary" role="progressbar" style={{width: "55%"}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <small>Assiduousness</small>
                                        <div className="progress mb-3">
                                        <div className="progress-bar bg-primary" role="progressbar" style={{width: "66%"}} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div className="card h-100">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github mr-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></h6>
                                        <span className="text-secondary"><a href="https://github.com/svilleneuve1994" target="_blank" rel="noreferrer">svilleneuve1994</a></span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" fill="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-earmark-text mr-2 icon-inline"><path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/><path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/></svg></h6>
                                        <span className="text-secondary"><a href="https://resume.io/r/aouJSgkIE" target="_blank" rel="noreferrer">Resume</a></span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" fill="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin mr-2 icon-inline"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg></h6>
                                        <span className="text-secondary"><a href="https://www.linkedin.com/in/summer-villeneuve-9173a1226/" target="_blank" rel="noreferrer">Linkedin</a></span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter mr-2 icon-inline"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></h6>
                                        <span className="text-secondary">@oneday</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook mr-2 icon-inline"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></h6>
                                        <span className="text-secondary">oneday</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
