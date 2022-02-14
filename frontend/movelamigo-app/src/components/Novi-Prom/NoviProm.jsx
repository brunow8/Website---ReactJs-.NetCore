import React, {useEffect} from 'react'
import classes from './../../css/NoviProm.module.css'
import capitalmovel from './images/capita-movel.png'
import asdf from './images/jean-philippe-delberghe-MmanXAs1sKw-unsplash.jpeg'
import qwert from './images/maria-stewart-p4tj0g-_aMM-unsplash.jpeg'
import Aos from "aos"
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

 const NoviProm = () => {
    useEffect(() => {
        Aos.init ({ duration: 2000 });
    }, []);

    return (
        <section className={classes.NoviProm} id="news" >
            <div className="container mb-4">
                <div className="row">
                    <div className="col-12">
                            <h2 className=" mt-3 mb-5 text-center" data-aos="fade-up">Novidades e promoções</h2>
                        </div>

                        <div className="col-lg-6 col-12 mb-5 mb-lg-0">
                            <div className="news-thumb" data-aos="fade-up">
                                <Nav.Link className="news-image-hover news-image-hover-warning" activeClassName='active' as= {NavLink} to='/novidades'>
                                     <img src={capitalmovel} className="img-fluid large-news-image news-image" alt=""/>
                                </Nav.Link>

                                <div className="news-category bg-warning text-white">Novidades</div>
                                
                                <div className="news-text-info">
                                    <h5 className="news-title">
                                        <p><strong>O Móvel Amigo irá estar presente na 57º Capital do Móvel - Feira de mobiliário e decoração que decorrerá de 4 a 12 de Setembro de 2022</strong></p>
                                    </h5>

                                    <Nav.Link activeClassName='active' as= {NavLink} to='/novidades'>
                                    <h5>Saiba Mais ...</h5>
                                    </Nav.Link>
                                        
                                </div>
                            </div> 
                        </div>

                        <div className="col-lg-6 col-12">
                            <div className="news-thumb news-two-column d-flex flex-column flex-lg-row" data-aos="fade-up">
                                <div className="news-top w-100">
                                    
                                    <a href="news-detail.html" className="news-image-hover news-image-hover-primary">
                                        <img src={asdf} className="img-fluid news-image" alt=""/>
                                    </a>

                                    <div className="news-category bg-primary text-white">Events</div>
                                </div>
                                
                                <div className="news-bottom w-100">
                                    <div className="news-text-info">
                                        <h5 className="news-title">
                                            <a href="news-detail.html" className="news-title-link">Job Opportunities: Digital, Marketing</a>
                                        </h5>

                                        <div className="d-flex flex-wrap">
                                            <span className="text-muted me-2">
                                                <i className="bi-geo-alt-fill me-1 mb-2 mb-lg-0"></i>
                                                Alaska,
                                            </span>

                                            <span className="text-muted">August 6, 2021</span>
                                        </div>
                                    </div>
                                </div>
                            </div> 

                            <div className="news-thumb news-two-column d-flex flex-column flex-lg-row" data-aos="fade-up">
                                <div className="news-top w-100" data-aos="fade-up">
                                    
                                    <a href="news-detail.html" className="news-image-hover news-image-hover-success">
                                        <img src={qwert} className="img-fluid news-image" alt=""/>
                                    </a>

                                    <div className="news-category bg-success text-white">News</div>
                                </div>
                                
                                <div className="news-bottom w-100">
                                    <div className="news-text-info">
                                        <h5 className="news-title">
                                            <a href="news-detail.html" className="news-title-link">What happened to new viral video?</a>
                                        </h5>

                                        <span className="text-muted">6 days ago</span>
                                    </div>
                                </div>
                            </div> 
                        </div>
                </div>
            </div>
        </section> 
    )
}
export default NoviProm