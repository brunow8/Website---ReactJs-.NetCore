import cozinha1 from './images/cozinha/cozinha1.jpg'
import cozinha3 from './images/cozinha/cozinha3.jpg'
import cozinha4 from './images/cozinha/cozinha4.jpg'
import cozinha6 from './images/cozinha/cozinha6.jpg'
import cozinha7 from './images/cozinha/cozinha7.png'
import cozinha8 from './images/cozinha/cozinha8.png'
import cozinha2 from './images/cozinha/cozinha2.jfif'
import cozinha10 from './images/cozinha/cozinha10.jfif'

const Cozinha = () => {
    return (
            <>
                <div className="col-lg-6 col-12">
                            <div className="portfolio-thumb mb-5 d-flex" data-aos="fade-up">
                                <div href="." className="image-popup me-4">
                                    <img src={cozinha1} className="img-fluid portfolio-image image mb-3" alt=""/>
                                    <img src={cozinha4} className="img-fluid portfolio-image image" alt=""/>
                                </div>
                                <div href="." className="image-popup">
                                    <img src={cozinha3} className="img-fluid portfolio-image image mb-3" alt=""/>
                                    <img src={cozinha6} className="img-fluid portfolio-image image" alt=""/>
                                </div>
                            </div>
                    </div>
                        
                    <div className="col-lg-6 col-12">
                        <div className="portfolio-thumb mb-5 d-flex" data-aos="fade-up">
                            <div href="." className="image-popup me-4">
                                <img src={cozinha7} className="img-fluid portfolio-image image mb-3" alt=""/>
                                <img src={cozinha8} className="img-fluid portfolio-image image" alt=""/>
                            </div>
                            <div href="." className="image-popup">
                                <img src={cozinha2} className="img-fluid portfolio-image image mb-3" alt=""/>
                                <img src={cozinha10} className="img-fluid portfolio-image image" alt=""/>
                            </div>
                        </div> 
                </div> 
            </>
                     
    )
}
export default Cozinha;