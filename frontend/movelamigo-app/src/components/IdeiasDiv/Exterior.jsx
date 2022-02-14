import exterior1 from './images/exterior/exterior1.jpg'
import exterior2 from './images/exterior/exterior2.jpg'
import exterior3 from './images/exterior/exterior3.jpg'
import exterior4 from './images/exterior/exterior4.png'
import exterior5 from './images/exterior/exterior5.jpg'
import exterior6 from './images/exterior/exterior6.jpg'
import exterior7 from './images/exterior/exterior7.jpg'
import exterior8 from './images/exterior/exterior8.jpg'

const Exterior = () => {
    return (
            <>
                <div className="col-lg-6 col-12">
                            <div className="portfolio-thumb mb-5 d-flex" data-aos="fade-up">
                                <div href="." className="image-popup me-4">
                                    <img src={exterior2} className="img-fluid portfolio-image image mb-3" alt=""/>
                                    <img src={exterior1} className="img-fluid portfolio-image image" alt=""/>
                                </div>
                                <div href="." className="image-popup">
                                    <img src={exterior3} className="img-fluid portfolio-image image mb-3" alt=""/>
                                    <img src={exterior4} className="img-fluid portfolio-image image" alt=""/>
                                </div>
                            </div>
                    </div>
                        
                    <div className="col-lg-6 col-12">
                        <div className="portfolio-thumb mb-5 d-flex" data-aos="fade-up">
                            <div href="." className="image-popup me-4">
                                <img src={exterior5} className="img-fluid portfolio-image image mb-3" alt=""/>
                                <img src={exterior6} className="img-fluid portfolio-image image" alt=""/>
                            </div>
                            <div href="." className="image-popup">
                                <img src={exterior7} className="img-fluid portfolio-image image mb-3" alt=""/>
                                <img src={exterior8} className="img-fluid portfolio-image image" alt=""/>
                            </div>
                        </div> 
                </div> 
            </>
                     
    )
}
export default Exterior;