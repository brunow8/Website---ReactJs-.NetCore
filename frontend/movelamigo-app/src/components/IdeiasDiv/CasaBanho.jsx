import casabanho1 from './images/casabanho/casabanho1.jfif'
import casabanho2 from './images/casabanho/casabanho2.jpeg'
import casabanho3 from './images/casabanho/casabanho3.jpg'
import casabanho4 from './images/casabanho/casabanho4.jpg'
import casabanho5 from './images/casabanho/casabanho5.jpg'
import casabanho6 from './images/casabanho/casabanho6.jfif'
import casabanho7 from './images/casabanho/casabanho7.jfif'
import casabanho8 from './images/casabanho/casabanho8.jpg'



const CasaBanho = () => {
    return (
            <>
                <div className="col-lg-6 col-12">
                            <div className="portfolio-thumb mb-5 d-flex" data-aos="fade-up">
                                <div href="." className="image-popup me-4">
                                    <img src={casabanho2} className="img-fluid portfolio-image image mb-3" alt=""/>
                                    <img src={casabanho1} className="img-fluid portfolio-image image" alt=""/>
                                </div>
                                <div href="." className="image-popup">
                                    <img src={casabanho3} className="img-fluid portfolio-image image mb-3" alt=""/>
                                    <img src={casabanho4} className="img-fluid portfolio-image image" alt=""/>
                                </div>
                            </div>
                    </div>
                        
                    <div className="col-lg-6 col-12">
                        <div className="portfolio-thumb mb-5 d-flex" data-aos="fade-up">
                            <div href="." className="image-popup me-4">
                                <img src={casabanho5} className="img-fluid portfolio-image image mb-3" alt=""/>
                                <img src={casabanho6} className="img-fluid portfolio-image image" alt=""/>
                            </div>
                            <div href="." className="image-popup">
                                <img src={casabanho7} className="img-fluid portfolio-image image mb-3" alt=""/>
                                <img src={casabanho8} className="img-fluid portfolio-image image" alt=""/>
                            </div>
                        </div> 
                </div> 
            </>
                     
    )
}
export default CasaBanho;