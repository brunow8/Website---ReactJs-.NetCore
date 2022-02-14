import escritorio1 from './images/escritorio/escritorio1.jpg'
import escritorio2 from './images/escritorio/escritorio2.jpg'
import escritorio3 from './images/escritorio/escritorio3.jpg'
import escritorio4 from './images/escritorio/escritorio4.jfif'
import escritorio5 from './images/escritorio/escritorio5.jfif'
import escritorio6 from './images/escritorio/escritorio6.jfif'
import escritorio7 from './images/escritorio/escritorio7.png'
import escritorio8 from './images/escritorio/escritorio8.jpg'



const Escritorio = () => {
    return (
            <>
                <div className="col-lg-6 col-12">
                            <div className="portfolio-thumb mb-5 d-flex" data-aos="fade-up">
                                <div href="." className="image-popup me-4">
                                    <img src={escritorio2} className="img-fluid portfolio-image image mb-3" alt=""/>
                                    <img src={escritorio1} className="img-fluid portfolio-image image" alt=""/>
                                </div>
                                <div href="." className="image-popup">
                                    <img src={escritorio3} className="img-fluid portfolio-image image mb-3" alt=""/>
                                    <img src={escritorio4} className="img-fluid portfolio-image image" alt=""/>
                                </div>
                            </div>
                    </div>
                        
                    <div className="col-lg-6 col-12">
                        <div className="portfolio-thumb mb-5 d-flex" data-aos="fade-up">
                            <div href="." className="image-popup me-4">
                                <img src={escritorio5} className="img-fluid portfolio-image image mb-3" alt=""/>
                                <img src={escritorio6} className="img-fluid portfolio-image image" alt=""/>
                            </div>
                            <div href="." className="image-popup">
                                <img src={escritorio7} className="img-fluid portfolio-image image mb-3" alt=""/>
                                <img src={escritorio8} className="img-fluid portfolio-image image" alt=""/>
                            </div>
                        </div> 
                </div> 
            </>
                     
    )
}
export default Escritorio;