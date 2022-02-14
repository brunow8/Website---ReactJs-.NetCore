import salaestar1 from './images/salaestar/salaestar1.jfif'
import salaestar2 from './images/salaestar/salaestar2.jpg'
import salaestar3 from './images/salaestar/salaestar3.jpg'
import salaestar4 from './images/salaestar/salaestar4.jpg'
import salaestar5 from './images/salaestar/salaestar5.jfif'
import salaestar6 from './images/salaestar/salaestar6.jfif'
import salaestar7 from './images/salaestar/salaestar7.jpg'
import salaestar8 from './images/salaestar/salaestar8.jpg'



const SalaEstar = () => {
    return (
            <>
                <div className="col-lg-6 col-12">
                            <div className="portfolio-thumb mb-5 d-flex" data-aos="fade-up">
                                <div href="." className="image-popup me-4">
                                    <img src={salaestar2} className="img-fluid portfolio-image image mb-3" alt=""/>
                                    <img src={salaestar1} className="img-fluid portfolio-image image" alt=""/>
                                </div>
                                <div href="." className="image-popup">
                                    <img src={salaestar3} className="img-fluid portfolio-image image mb-3" alt=""/>
                                    <img src={salaestar4} className="img-fluid portfolio-image image" alt=""/>
                                </div>
                            </div>
                    </div>
                        
                    <div className="col-lg-6 col-12">
                        <div className="portfolio-thumb mb-5 d-flex" data-aos="fade-up">
                            <div href="." className="image-popup me-4">
                                <img src={salaestar5} className="img-fluid portfolio-image image mb-3" alt=""/>
                                <img src={salaestar6} className="img-fluid portfolio-image image" alt=""/>
                            </div>
                            <div href="." className="image-popup">
                                <img src={salaestar7} className="img-fluid portfolio-image image mb-3" alt=""/>
                                <img src={salaestar8} className="img-fluid portfolio-image image" alt=""/>
                            </div>
                        </div> 
                </div> 
            </>
                     
    )
}
export default SalaEstar;