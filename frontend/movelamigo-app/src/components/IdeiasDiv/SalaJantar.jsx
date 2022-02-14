import salajantar1 from './images/salajantar/salajantar1.jfif'
import salajantar2 from './images/salajantar/salajantar2.jpg'
import salajantar3 from './images/salajantar/salajantar3.jfif'
import salajantar4 from './images/salajantar/salajantar4.jfif'
import salajantar5 from './images/salajantar/salajantar5.jpg'
import salajantar6 from './images/salajantar/salajantar6.jfif'
import salajantar7 from './images/salajantar/salajantar7.jfif'
import salajantar8 from './images/salajantar/salajantar8.jpg'




const SalaJantar = () => {
    return (
            <>
                <div className="col-lg-6 col-12">
                            <div className="portfolio-thumb mb-5 d-flex" data-aos="fade-up">
                                <div href="." className="image-popup me-4">
                                    <img src={salajantar2} className="img-fluid portfolio-image image mb-3" alt=""/>
                                    <img src={salajantar1} className="img-fluid portfolio-image image" alt=""/>
                                </div>
                                <div href="." className="image-popup">
                                    <img src={salajantar3} className="img-fluid portfolio-image image mb-3" alt=""/>
                                    <img src={salajantar4} className="img-fluid portfolio-image image" alt=""/>
                                </div>
                            </div>
                    </div>
                        
                    <div className="col-lg-6 col-12">
                        <div className="portfolio-thumb mb-5 d-flex" data-aos="fade-up">
                            <div href="." className="image-popup me-4">
                                <img src={salajantar5} className="img-fluid portfolio-image image mb-3" alt=""/>
                                <img src={salajantar6} className="img-fluid portfolio-image image" alt=""/>
                            </div>
                            <div href="." className="image-popup">
                                <img src={salajantar7} className="img-fluid portfolio-image image mb-3" alt=""/>
                                <img src={salajantar8} className="img-fluid portfolio-image image" alt=""/>
                            </div>
                        </div> 
                </div> 
            </>
                     
    )
}
export default SalaJantar;