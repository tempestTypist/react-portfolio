import React from 'react';
import '../../assets/styles/Portfolio.css';
import passgen from '../../assets/images/portfolio-items/passgen.png';
import dayplanner from '../../assets/images/portfolio-items/dayplanner-preview.png';
import jsquiz from '../../assets/images/portfolio-items/jsquiz.png';
import weather from '../../assets/images/portfolio-items/weatherdash-preview.png';
import trailr from '../../assets/images/portfolio-items/trailr-preview.png';
import notetaker from '../../assets/images/portfolio-items/notetaker.png';
import broken from '../../assets/images/portfolio-items/OOO-sign.png'
import haunted from '../../assets/images/portfolio-items/haunted-preview.png';



export default function Portfolio() {
  return (
<div id="portfolio" className="bg-one">
    <div className="container-fluid">
        <div className="row overflow-hidden arcade-floor mt-4 mb-4">
            <div className="offset-xl-2 col-xl-2 col-md-4 col-sm-5 col-12 arcade-cabinet">
                <div className="card-cabinet">
                    <div className="cabinet-header">
                        <div className="arcade-title">
                            Password Generator
                        </div>
                        <div className="title-shadow"></div>
                    </div>
                    <div className="cabinet-body">
                        <svg height="31" width="275">
                            <path d="M0 0 L68 31 L206 31 L165 0 Z" />
                        </svg>
                        <a className="portfolio-preview-link" href="https://svilleneuve1994.github.io/Password-Generator/" target="_blank" rel="noreferrer">
                            <img className="portfolio-preview-img" src={passgen} alt="Portfolio item" />
                        </a>
                        <svg height="31" width="275">
                            <path d="M69 0 L0 31 L165 31 L207 0 Z" />
                        </svg>
                    </div>
                    <div className="cabinet-footer">
                        <div className="cabinet-footerL"></div>
                        <div className="cabinet-footerR"></div>
                    </div>
                </div>
            </div>
            <div className="col-xl-2 col-md-4 col-sm-5 col-12 arcade-cabinet">
                <div className="card-cabinet">
                    <div className="cabinet-header">
                        <div className="arcade-title pt-4">
                            Dayplanner
                        </div>
                        <div className="title-shadow"></div>
                    </div>
                    <div className="cabinet-body">
                        <svg height="31" width="275">
                            <path d="M0 0 L68 31 L206 31 L165 0 Z" />
                        </svg>
                        <a className="portfolio-preview-link" href="https://svilleneuve1994.github.io/Dayplanner/" target="_blank" rel="noreferrer">
                            <img className="portfolio-preview-img" src={dayplanner} alt="Portfolio item" />
                        </a>
                        <svg height="31" width="275">
                            <path d="M69 0 L0 31 L165 31 L207 0 Z" />
                        </svg>
                    </div>
                    <div className="cabinet-footer">
                        <div className="cabinet-footerL"></div>
                        <div className="cabinet-footerR"></div>
                    </div>
                </div>
            </div>
            <div className="col-xl-2 col-md-4 col-sm-5 col-12 arcade-cabinet">
                <div className="card-cabinet">
                    <div className="cabinet-header">
                        <div className="arcade-title">
                            Javascript Quizgame
                        </div>
                        <div className="title-shadow"></div>
                    </div>
                    <div className="cabinet-body">
                        <svg height="31" width="275">
                            <path d="M0 0 L68 31 L206 31 L165 0 Z" />
                        </svg>
                        <a className="portfolio-preview-link" href="https://svilleneuve1994.github.io/JSQuiz/" target="_blank" rel="noreferrer">
                            <img className="portfolio-preview-img" src={jsquiz} alt="Portfolio item" />
                        </a>
                        <svg height="31" width="275">
                            <path d="M69 0 L0 31 L165 31 L207 0 Z" />
                        </svg>
                    </div>
                    <div className="cabinet-footer">
                        <div className="cabinet-footerL"></div>
                        <div className="cabinet-footerR"></div>
                    </div>
                </div>
            </div>
            <div className="col-xl-2 col-md-5 col-sm-5 col-12 arcade-cabinet">
                <div className="card-cabinet">
                    <div className="cabinet-header">
                        <div className="arcade-title">
                            Weather Dashboard
                        </div>
                        <div className="title-shadow"></div>
                    </div>
                    <div className="cabinet-body">
                        <svg height="31" width="275">
                            <path d="M0 0 L68 31 L206 31 L165 0 Z" />
                        </svg>
                        <a className="portfolio-preview-link" href="https://svilleneuve1994.github.io/Weather-Dashboard/" target="_blank" rel="noreferrer">
                            <img className="portfolio-preview-img" src={weather} alt="Portfolio item" />
                        </a>
                        <svg height="31" width="275">
                            <path d="M69 0 L0 31 L165 31 L207 0 Z" />
                        </svg>
                    </div>
                    <div className="cabinet-footer">
                        <div className="cabinet-footerL"></div>
                        <div className="cabinet-footerR"></div>
                    </div>
                </div>
            </div>
            <div className="offset-xl-1 col-xl-2 col-md-5 col-sm-5 col-12 arcade-cabinet">
                <div className="card-cabinet">
                    <div className="cabinet-header">
                        <div className="arcade-title">
                            Bike trail locator
                        </div>
                        <div className="title-shadow"></div>
                    </div>
                    <div className="cabinet-body">
                        <svg height="31" width="275">
                            <path d="M0 0 L68 31 L206 31 L165 0 Z" />
                        </svg>
                        <a className="portfolio-preview-link" href="https://giftilicious.github.io/Travel-Guide/" target="_blank" rel="noreferrer">
                            <img className="portfolio-preview-img" src={trailr} alt="Portfolio item" />
                        </a>
                        <svg height="31" width="275">
                            <path d="M69 0 L0 31 L165 31 L207 0 Z" />
                        </svg>
                    </div>
                    <div className="cabinet-footer">
                        <div className="cabinet-footerL"></div>
                        <div className="cabinet-footerR"></div>
                    </div>
                </div>
            </div>
            <div className="col-xl-2 col-md-4 col-sm-5 col-12 arcade-cabinet">
                <div className="card-cabinet">
                    <div className="cabinet-header">
                        <div className="arcade-title">
                            Express Notetaker
                        </div>
                        <div className="title-shadow"></div>
                    </div>
                    <div className="cabinet-body">
                        <svg height="31" width="275">
                            <path d="M0 0 L68 31 L206 31 L165 0 Z" />
                        </svg>
                        <a className="portfolio-preview-link" href="https://express-notetaker11.herokuapp.com/" target="_blank" rel="noreferrer">
                            <img className="portfolio-preview-img" src={notetaker} alt="Portfolio item" />
                        </a>
                        <svg height="31" width="275">
                            <path d="M69 0 L0 31 L165 31 L207 0 Z" />
                        </svg>
                    </div>
                    <div className="cabinet-footer">
                        <div className="cabinet-footerL"></div>
                        <div className="cabinet-footerR"></div>
                    </div>
                </div>
            </div>
            <div className="col-xl-2 col-md-4 col-sm-5 col-12 arcade-cabinet">
                <div className="card-cabinet">
                    <div className="cabinet-header">
                        <div className="arcade-title">
                            Portfolio Item
                        </div>
                        <div className="title-shadow"></div>
                    </div>
                    <div className="cabinet-body">
                        <svg height="31" width="275">
                            <path d="M0 0 L68 31 L206 31 L165 0 Z" />
                        </svg>
                        <div className="portfolio-preview-link">
                            <img className="portfolio-preview-img" src={broken} alt="Portfolio item" />
                        </div>
                        <svg height="31" width="275">
                            <path d="M69 0 L0 31 L165 31 L207 0 Z" />
                        </svg>
                    </div>
                    <div className="cabinet-footer">
                        <div className="cabinet-footerL"></div>
                        <div className="cabinet-footerR"></div>
                    </div>
                </div>
            </div>
            <div className="col-xl-2 col-md-4 col-sm-5 col-12 arcade-cabinet">
                <div className="card-cabinet">
                    <div className="cabinet-header">
                        <div className="arcade-title">
                            Spooky Sights
                        </div>
                        <div className="title-shadow"></div>
                    </div>
                    <div className="cabinet-body">
                        <svg height="31" width="275">
                            <path d="M0 0 L68 31 L206 31 L165 0 Z" />
                        </svg>
                        <a className="portfolio-preview-link" href="https://spooky-sights.herokuapp.com/homepage" target="_blank" rel="noreferrer">
                            <img className="portfolio-preview-img" src={haunted} alt="Portfolio item" />
                        </a>
                        <svg height="31" width="275">
                            <path d="M69 0 L0 31 L165 31 L207 0 Z" />
                        </svg>
                    </div>
                    <div className="cabinet-footer">
                        <div className="cabinet-footerL"></div>
                        <div className="cabinet-footerR"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}
