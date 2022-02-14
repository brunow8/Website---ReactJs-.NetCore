import quarto1 from './images/quarto/quarto1.jfif'
import quarto2 from './images/quarto/quarto2.jfif'
import quarto3 from './images/quarto/quarto3.jpg'
import quarto4 from './images/quarto/quarto4.jpg'
import quarto5 from './images/quarto/quarto5.jfif'
import quarto6 from './images/quarto/quarto6.jpg'
import quarto7 from './images/quarto/quarto7.jfif'
import quarto8 from './images/quarto/quarto8.jfif'



const Quarto = () => {
    return (
            <>
                <div className="col-lg-6 col-12">
                            <div className="portfolio-thumb mb-5 d-flex" data-aos="fade-up">
                                <div href="." className="image-popup me-4">
                                    <img src={quarto2} className="img-fluid portfolio-image image mb-3" alt=""/>
                                    <img src={quarto1} className="img-fluid portfolio-image image" alt=""/>
                                </div>
                                <div href="." className="image-popup">
                                    <img src={quarto3} className="img-fluid portfolio-image image mb-3" alt=""/>
                                    <img src={quarto4} className="img-fluid portfolio-image image" alt=""/>
                                </div>
                            </div>
                    </div>
                        
                    <div className="col-lg-6 col-12">
                        <div className="portfolio-thumb mb-5 d-flex" data-aos="fade-up">
                            <div href="." className="image-popup me-4">
                                <img src={quarto5} className="img-fluid portfolio-image image mb-3" alt=""/>
                                <img src={quarto6} className="img-fluid portfolio-image image" alt=""/>
                            </div>
                            <div href="." className="image-popup">
                                <img src={quarto7} className="img-fluid portfolio-image image mb-3" alt=""/>
                                <img src={quarto8} className="img-fluid portfolio-image image" alt=""/>
                            </div>
                        </div> 
                </div> 
            </>
                     
    )
}
export default Quarto;