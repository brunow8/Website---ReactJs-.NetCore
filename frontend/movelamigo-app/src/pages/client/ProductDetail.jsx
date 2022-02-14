import React, {useState, useEffect} from 'react'
import api from './../../api/product'
import Footer from '../../components/Footer';
import AccordionDetail from '../../components/Accordion/AccordionDetail';
import Rate from './../../components/Stars/Rate';
import AccordionDescription from './../../components/Accordion/AccordionDescription';
import OwlCarousel from 'react-owl-carousel'
import './../../../node_modules/owl.carousel/dist/assets/owl.carousel.min.css'
import './../../../node_modules/owl.carousel/dist/assets/owl.theme.default.min.css'
import NavBar from './../../components/NavBar/NavBar';

export default function ProductDetail() {

  const [produtoSelected, setProdutoSelected] = useState([]);
  const [allProducts, setAllProducts] = useState([]);


  const catchAllProductsAdm = async () => {
    let id = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1];
    const response = await api.get(`movel/${id}`);
    return response.data;
    
}
const catchAll = async () => {
  const response = await api.get('movel');
  return response.data;
  
}

  useEffect(() => {
    const getProductsAdm = async () => {

      const produtoSelected = await catchAllProductsAdm();
        if( /*Se esta variável tiver valor dentro ele faz o passo seguinte*/produtoSelected) 
            setProdutoSelected(produtoSelected);
      const allProducts = await catchAll();

      setAllProducts(allProducts);

      };
      
      getProductsAdm();
    }, []);
    return (
        <>
        <NavBar/>
        <section className="py-2">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center mb-5">
                    <div className="col-md-6">
                      <img className="card-img-top mb-5 mb-md-0" src={"https://localhost:5001/images/"+ produtoSelected.imageName} alt="dasda" />
                      <div align="center" className="mt-md-4">
                          <div align="center" style={{width: "150px", height: "auto"}}>
                            <h3 className='underline mb-0'>Avaliação</h3>
                          </div>
                          <Rate/>
                        </div>
                        
                    </div>
                    <div className="col-md-6">
                        <div className="small mb-1 d-flex justify-content-between">
                            <h5>{produtoSelected.divisionName}</h5>
                            <h5>{produtoSelected.category}</h5>
                        </div>
                        <h1 className="display-5 fw-bolder">{produtoSelected.name}</h1>

                        <AccordionDetail
                        prod = {produtoSelected}/>

                        <div>
                          <p className="text-black"><i className="fas fa-info-circle me-2"></i>Iva incluído no preço</p>
                          <p className="text-black"><i className="fas fa-exclamation me-2"></i>Iva incluido no preço</p>
                        </div>
                        {produtoSelected.deliveryState === "Yes" ?
                        <div>
                          <div className='d-flex justify-content-between'>
                            <h6 className='text-black'>Preço em loja:</h6>
                            <h6 className='text-black'>Preço por entrega ao domícilio:</h6>
                          </div>
                          <div className='d-flex justify-content-between'>
                            <h5 className='text-black'>{produtoSelected.price}</h5>
                            <h5 className='text-black'>{Math.round((produtoSelected.deliveryPrice + Number.EPSILON) * 100) / 100}€</h5>
                          </div>
                        </div>
                        :
                        <div>
                            <h6 className='text-black'>Preço em loja:</h6>
                            <h5 className='text-black'>{produtoSelected.price}</h5>
                        </div>}

                        <AccordionDescription
                        prod={produtoSelected}/>
                        <div className="col-12 d-flex justify-content-center">
                          <div className='col-6 d-flex'>
                            <span className='btn btn-warning minus rounded border border-danger'>-</span>
                            <input type="number" className="form-control border border-danger" style={{width: "65px"}}/>
                            <span className='btn btn-primary plus rounded  border border-danger'>+</span>
                          </div>
                          
                          <div className='col-6'>
                              <button className="btn btn-outline-dark flex-shrink-0" type="button">
                              <i className="fa fa-cart-arrow-down me-2"></i>
                                  Adicionar ao carrinho
                              </button>
                          </div>
                            
                        </div>
                    </div>
                </div>
                {produtoSelected.deliveryState === "Yes" ? <div align="center">
                  <p className='text-black'><i className="fa-solid fa-truck fa-lg me-2 icon-entregas"></i>A entrega ao domícilio tem um acrescido aumento no valor do produto em cerca de 10% do seu valor inicial. </p>
                </div> : ''}
                
                
            </div>
        </section>
        <div className='container mt-5'>
          <h3>Produtos semelhantes</h3>
        </div>    
          {(() => {
            if(Object.keys(allProducts).length > 0){
              return (
          <OwlCarousel
          className="owl-carousel owl-theme mb-5 ps-1 pe-1"
          items={Object.keys(allProducts).length}
          autoPlay={true}
          autoplayTimeout={1000}
          nav={true}
          dots={false}
          margin={10}
          responsive={
            0==={
              items:1
            },
            400==={
              items:3
            },
            600==={
              items:4
            },
            1000==={
              items:5
            }
          }   
          
          >
            {(() => {if(produtoSelected.divisionName === 'Cozinha' && produtoSelected.state === 'Active' && produtoSelected.category === 'Conjuntos'){
                    return(
                      allProducts.filter((prod) => prod.divisionName === 'Cozinha' && prod.state === 'Active' && prod.category ==='Conjuntos' && prod.id !== produtoSelected.id)
                               .map((prod) => (
                              <div key={prod.id} style={{background: "white"}}>
                                <div className='item border border-light'>
                                  <img style={{height: "170px"}} className='border border-light' src={"https://localhost:5001/images/"+ prod.imageName} alt="das"/>
                                  <p className='preco'>{prod.price}€</p>
                                  </div>
                              </div>
                    )
                    ))}else if(produtoSelected.divisionName === 'Cozinha' && produtoSelected.state === 'Active' && produtoSelected.category === 'Cadeiras'){
                      return(
                        allProducts.filter((prod) => prod.divisionName === 'Cozinha' && prod.state === 'Active' && prod.category ==='Cadeiras' && prod.id !== produtoSelected.id)
                                 .map((prod) => (
                                <div key={prod.id} style={{background: "white"}} >
                                  <div className='item border border-light'>
                                    <img style={{height: "170px", width: "auto"}}src={"https://localhost:5001/images/"+ prod.imageName} alt="das"/>
                                    <p className='preco'>{prod.price}€</p>
                                    </div>
                                </div>
                      )
                      ))}else if(produtoSelected.divisionName === 'Cozinha' && produtoSelected.state === 'Active' && produtoSelected.category === 'Louceiros'){
                        return(
                          allProducts.filter((prod) => prod.divisionName === 'Cozinha' && prod.state === 'Active' && prod.category ==='Louceiros' && prod.id !== produtoSelected.id)
                                   .map((prod) => (
                                  <div key={prod.id} style={{background: "white"}} >
                                    <div className='item border border-light'>
                                      <img style={{height: "170px"}}src={"https://localhost:5001/images/"+ prod.imageName} alt="das"/>
                                      <p className='preco'>{prod.price}€</p>
                                      </div>
                                  </div>
                        )
                        ))}else if(produtoSelected.divisionName === 'Cozinha' && produtoSelected.state === 'Active' && produtoSelected.category === 'Mesas'){
                          return(
                            allProducts.filter((prod) => prod.divisionName === 'Cozinha' && prod.state === 'Active' && prod.category ==='Mesas' && prod.id !== produtoSelected.id)
                                     .map((prod) => (
                                    <div key={prod.id} style={{background: "white"}} >
                                      <div className='item border border-light'>
                                        <img style={{height: "170px"}}src={"https://localhost:5001/images/"+ prod.imageName} alt="das"/>
                                        <p className='preco'>{prod.price}€</p>
                                        </div>
                                    </div>
                          )
                          ))}else if(produtoSelected.divisionName === 'Cozinha' && produtoSelected.state === 'Active' && produtoSelected.category === 'Móvel de cozinha'){
                            return(
                              allProducts.filter((prod) => prod.divisionName === 'Cozinha' && prod.state === 'Active' && prod.category ==='Móvel de cozinha' && prod.id !== produtoSelected.id)
                                       .map((prod) => (
                                      <div key={prod.id} style={{background: "white"}} >
                                        <div className='item border border-light'>
                                          <img style={{height: "170px"}}src={"https://localhost:5001/images/"+ prod.imageName} alt="das"/>
                                          <p className='preco'>{prod.price}€</p>
                                          </div>
                                      </div>
                            )
                            ))}else if(produtoSelected.divisionName === 'Cozinha' && produtoSelected.state === 'Active' && produtoSelected.category === 'Auxiliar de cozinha'){
                              return(
                                allProducts.filter((prod) => prod.divisionName === 'Cozinha' && prod.state === 'Active' && prod.category ==='Auxiliar de cozinha' && prod.id !== produtoSelected.id)
                                         .map((prod) => (
                                        <div key={prod.id} style={{background: "white"}} >
                                          <div className='item border border-light'>
                                            <img style={{height: "170px"}}src={"https://localhost:5001/images/"+ prod.imageName} alt="das"/>
                                            <p className='preco'>{prod.price}€</p>
                                            </div>
                                        </div>
                              )
                              ))}else if(produtoSelected.divisionName === 'Escritório' && produtoSelected.state === 'Active' && produtoSelected.category === 'Cadeiras'){
                                return(
                                  allProducts.filter((prod) => prod.divisionName === 'Escritório' && prod.state === 'Active' && prod.category ==='Cadeiras' && prod.id !== produtoSelected.id)
                                           .map((prod) => (
                                          <div key={prod.id} style={{background: "white"}} >
                                            <div className='item border border-light'>
                                              <img style={{height: "170px"}}src={"https://localhost:5001/images/"+ prod.imageName} alt="das"/>
                                              <p className='preco'>{prod.price}€</p>
                                              </div>
                                          </div>
                                )
                                ))}else if(produtoSelected.divisionName === 'Escritório' && produtoSelected.state === 'Active' && produtoSelected.category === 'Conjuntos'){
                                  return(
                                    allProducts.filter((prod) => prod.divisionName === 'Escritório' && prod.state === 'Active' && prod.category ==='Conjuntos' && prod.id !== produtoSelected.id)
                                             .map((prod) => (
                                            <div key={prod.id} style={{background: "white"}} >
                                              <div className='item border border-light'>
                                                <img style={{height: "170px"}}src={"https://localhost:5001/images/"+ prod.imageName} alt="das"/>
                                                <p className='preco'>{prod.price}€</p>
                                                </div>
                                            </div>
                                  )
                                  ))}else if(produtoSelected.divisionName === 'Escritório' && produtoSelected.state === 'Active' && produtoSelected.category === 'Secretárias'){
                                    return(
                                      allProducts.filter((prod) => prod.divisionName === 'Escritório' && prod.state === 'Active' && prod.category ==='Cadeiras' && prod.id !== produtoSelected.id)
                                               .map((prod) => (
                                              <div key={prod.id} style={{background: "white"}} >
                                                <div className='item border border-light'>
                                                  <img style={{height: "170px"}}src={"https://localhost:5001/images/"+ prod.imageName} alt="das"/>
                                                  <p className='preco'>{prod.price}€</p>
                                                  </div>
                                              </div>
                                    )
                                    ))}else if(produtoSelected.divisionName === 'Escritório' && produtoSelected.state === 'Active' && produtoSelected.category === 'Livrarias'){
                                      return(
                                        allProducts.filter((prod) => prod.divisionName === 'Escritório' && prod.state === 'Active' && prod.category ==='Livrarias' && prod.id !== produtoSelected.id)
                                                 .map((prod) => (
                                                <div key={prod.id} style={{background: "white"}} >
                                                  <div className='item border border-light'>
                                                    <img style={{height: "170px"}}src={"https://localhost:5001/images/"+ prod.imageName} alt="das"/>
                                                    <p className='preco'>{prod.price}€</p>
                                                    </div>
                                                </div>
                                      )
                                      ))}else if(produtoSelected.divisionName === 'Exterior' && produtoSelected.state === 'Active' && produtoSelected.category === 'Cadeiras'){
                                        return(
                                          allProducts.filter((prod) => prod.divisionName === 'Exterior' && prod.state === 'Active' && prod.category ==='Cadeiras' && prod.id !== produtoSelected.id)
                                                   .map((prod) => (
                                                  <div key={prod.id} style={{background: "white"}} >
                                                    <div className='item border border-light'>
                                                      <img style={{height: "170px"}}src={"https://localhost:5001/images/"+ prod.imageName} alt="das"/>
                                                      <p className='preco'>{prod.price}€</p>
                                                      </div>
                                                  </div>
                                        )
                                        ))}else if(produtoSelected.divisionName === 'Exterior' && produtoSelected.state === 'Active' && produtoSelected.category === 'Bancos'){
                                          return(
                                            allProducts.filter((prod) => prod.divisionName === 'Exterior' && prod.state === 'Active' && prod.category ==='Bancos' && prod.id !== produtoSelected.id)
                                                     .map((prod) => (
                                                    <div key={prod.id} style={{background: "white"}} >
                                                      <div className='item border border-light'>
                                                        <img style={{height: "170px"}}src={"https://localhost:5001/images/"+ prod.imageName} alt="das"/>
                                                        <p className='preco'>{prod.price}€</p>
                                                        </div>
                                                    </div>
                                          )
                                          ))}else if(produtoSelected.divisionName === 'Exterior' && produtoSelected.state === 'Active' && produtoSelected.category === 'Conjuntos'){
                                            return(
                                              allProducts.filter((prod) => prod.divisionName === 'Exterior' && prod.state === 'Active' && prod.category ==='Conjuntos' && prod.id !== produtoSelected.id)
                                                       .map((prod) => (
                                                      <div key={prod.id} style={{background: "white"}} >
                                                        <div className='item border border-light'>
                                                          <img style={{height: "170px"}}src={"https://localhost:5001/images/"+ prod.imageName} alt="das"/>
                                                          <p className='preco'>{prod.price}€</p>
                                                          </div>
                                                      </div>
                                            )
                                            ))}else if(produtoSelected.divisionName === 'Exterior' && produtoSelected.state === 'Active' && produtoSelected.category === 'Mesas'){
                                              return(
                                                allProducts.filter((prod) => prod.divisionName === 'Exterior' && prod.state === 'Active' && prod.category ==='Mesas' && prod.id !== produtoSelected.id)
                                                         .map((prod) => (
                                                        <div key={prod.id} style={{background: "white"}} >
                                                          <div className='item border border-light'>
                                                            <img style={{height: "170px"}}src={"https://localhost:5001/images/"+ prod.imageName} alt="das"/>
                                                            <p className='preco'>{prod.price}€</p>
                                                            </div>
                                                        </div>
                                              )
                                              ))}else if(produtoSelected.divisionName === 'Quarto' && produtoSelected.state === 'Active' && produtoSelected.category === 'Beliches'){
                                                return(
                                                  allProducts.filter((prod) => prod.divisionName === 'Quarto' && prod.state === 'Active' && prod.category ==='Beliches' && prod.id !== produtoSelected.id)
                                                           .map((prod) => (
                                                          <div key={prod.id} style={{background: "white"}} >
                                                            <div className='item border border-light'>
                                                              <img style={{height: "170px"}}src={"https://localhost:5001/images/"+ prod.imageName} alt="das"/>
                                                              <p className='preco'>{prod.price}€</p>
                                                              </div>
                                                          </div>
                                                )
                                                ))}else if(produtoSelected.divisionName === 'Quarto' && produtoSelected.state === 'Active' && produtoSelected.category === 'Bercos'){
                                                  return(
                                                    allProducts.filter((prod) => prod.divisionName === 'Quarto' && prod.state === 'Active' && prod.category ==='Bercos' && prod.id !== produtoSelected.id)
                                                             .map((prod) => (
                                                            <div key={prod.id} style={{background: "white"}} >
                                                              <div className='item border border-light'>
                                                                <img style={{height: "170px"}}src={"https://localhost:5001/images/"+ prod.imageName} alt="das"/>
                                                                <p className='preco'>{prod.price}€</p>
                                                                </div>
                                                            </div>
                                                  )
                                                  ))}else if(produtoSelected.divisionName === 'Quarto' && produtoSelected.state === 'Active' && produtoSelected.category === 'Cama com arrumação'){
                                                    return(
                                                      allProducts.filter((prod) => prod.divisionName === 'Quarto' && prod.state === 'Active' && prod.category ==='Cama com arrumação' && prod.id !== produtoSelected.id)
                                                               .map((prod) => (
                                                              <div key={prod.id} style={{background: "white"}} >
                                                                <div className='item border border-light'>
                                                                  <img style={{height: "170px"}}src={"https://localhost:5001/images/"+ prod.imageName} alt="das"/>
                                                                  <p className='preco'>{prod.price}€</p>
                                                                  </div>
                                                              </div>
                                                    )
                                                    ))}else if(produtoSelected.divisionName === 'Quarto' && produtoSelected.state === 'Active' && produtoSelected.category === 'CamaCasal'){
                                                      return(
                                                        allProducts.filter((prod) => prod.divisionName === 'Quarto' && prod.state === 'Active' && prod.category ==='CamaCasal' && prod.id !== produtoSelected.id)
                                                                 .map((prod) => (
                                                                <div key={prod.id} style={{background: "white"}} >
                                                                  <div className='item border border-light'>
                                                                    <img style={{height: "170px"}}src={"https://localhost:5001/images/"+ prod.imageName} alt="das"/>
                                                                    <p className='preco'>{prod.price}€</p>
                                                                    </div>
                                                                </div>
                                                      )
                                                      ))}else if(produtoSelected.divisionName === 'Quarto' && produtoSelected.state === 'Active' && produtoSelected.category === 'Cama Individual'){
                                                        return(
                                                          allProducts.filter((prod) => prod.divisionName === 'Quarto' && prod.state === 'Active' && prod.category ==='Cama Individual' && prod.id !== produtoSelected.id)
                                                                   .map((prod) => (
                                                                  <div key={prod.id} style={{background: "white"}} >
                                                                    <div className='item border border-light'>
                                                                      <img style={{height: "170px"}}src={"https://localhost:5001/images/"+ prod.imageName} alt="das"/>
                                                                      <p className='preco'>{prod.price}€</p>
                                                                      </div>
                                                                  </div>
                                                        )
                                                        ))}else if(produtoSelected.divisionName === 'Quarto' && produtoSelected.state === 'Active' && produtoSelected.category === 'Comodas'){
                                                          return(
                                                            allProducts.filter((prod) => prod.divisionName === 'Quarto' && prod.state === 'Active' && prod.category ==='Comodas' && prod.id !== produtoSelected.id)
                                                                     .map((prod) => (
                                                                    <div key={prod.id} style={{background: "white"}} >
                                                                      <div className='item border border-light'>
                                                                        <img style={{height: "170px"}}src={"https://localhost:5001/images/"+ prod.imageName} alt="das"/>
                                                                        <p className='preco'>{prod.price}€</p>
                                                                        </div>
                                                                    </div>
                                                          )
                                                          ))}else if(produtoSelected.divisionName === 'Quarto' && produtoSelected.state === 'Active' && produtoSelected.category === 'Roupeiros'){
                                                            return(
                                                              allProducts.filter((prod) => prod.divisionName === 'Quarto' && prod.state === 'Active' && prod.category ==='CamaCasal' && prod.id !== produtoSelected.id)
                                                                       .map((prod) => (
                                                                      <div key={prod.id} style={{background: "white"}} >
                                                                        <div className='item border border-light'>
                                                                          <img style={{height: "170px"}}src={"https://localhost:5001/images/"+ prod.imageName} alt="das"/>
                                                                          <p className='preco'>{prod.price}€</p>
                                                                          </div>
                                                                      </div>
                                                            )
                                                            ))}else if(produtoSelected.divisionName === 'Quarto' && produtoSelected.state === 'Active' && produtoSelected.category === 'Mesinhas de cabeceira'){
                                                              return(
                                                                allProducts.filter((prod) => prod.divisionName === 'Quarto' && prod.state === 'Active' && prod.category ==='Mesinhas de cabeceira' && prod.id !== produtoSelected.id)
                                                                         .map((prod) => (
                                                                        <div key={prod.id} style={{background: "white"}} >
                                                                          <div className='item border border-light'>
                                                                            <img style={{height: "170px"}}src={"https://localhost:5001/images/"+ prod.imageName} alt="das"/>
                                                                            <p className='preco'>{prod.price}€</p>
                                                                            </div>
                                                                        </div>
                                                              )
                                                              ))}else if(produtoSelected.divisionName === 'Sala de estar' && produtoSelected.state === 'Active' && produtoSelected.category === 'Bases de multimédia'){
                                                                return(
                                                                  allProducts.filter((prod) => prod.divisionName === 'Sala de estar' && prod.state === 'Active' && prod.category ==='Bases de multimédia' && prod.id !== produtoSelected.id)
                                                                           .map((prod) => (
                                                                          <div key={prod.id} style={{background: "white"}} >
                                                                            <div className='item border border-light'>
                                                                              <img style={{height: "170px"}}src={"https://localhost:5001/images/"+ prod.imageName} alt="das"/>
                                                                              <p className='preco'>{prod.price}€</p>
                                                                              </div>
                                                                          </div>
                                                                )
                                                                ))}else if(produtoSelected.divisionName === 'Sala de estar' && produtoSelected.state === 'Active' && produtoSelected.category === 'Estantes'){
                                                                  return(
                                                                    allProducts.filter((prod) => prod.divisionName === 'Sala de estar' && prod.state === 'Active' && prod.category ==='Estantes' && prod.id !== produtoSelected.id)
                                                                             .map((prod) => (
                                                                            <div key={prod.id} style={{background: "white"}} >
                                                                              <div className='item border border-light'>
                                                                                <img style={{height: "170px"}}src={"https://localhost:5001/images/"+ prod.imageName} alt="das"/>
                                                                                <p className='preco'>{prod.price}€</p>
                                                                                </div>
                                                                            </div>
                                                                  )
                                                                  ))}else if(produtoSelected.divisionName === 'Sala de estar' && produtoSelected.state === 'Active' && produtoSelected.category === 'Prateleiras'){
                                                                    return(
                                                                      allProducts.filter((prod) => prod.divisionName === 'Sala de estar' && prod.state === 'Active' && prod.category ==='Prateleiras' && prod.id !== produtoSelected.id)
                                                                               .map((prod) => (
                                                                              <div key={prod.id} style={{background: "white"}} >
                                                                                <div className='item border border-light'>
                                                                                  <img style={{height: "170px"}}src={"https://localhost:5001/images/"+ prod.imageName} alt="das"/>
                                                                                  <p className='preco'>{prod.price}€</p>
                                                                                  </div>
                                                                              </div>
                                                                    )
                                                                    ))}else if(produtoSelected.divisionName === 'Sala de estar' && produtoSelected.state === 'Active' && produtoSelected.category === 'Sofás'){
                                                                      return(
                                                                        allProducts.filter((prod) => prod.divisionName === 'Sala de estar' && prod.state === 'Active' && prod.category ==='Sofás' && prod.id !== produtoSelected.id)
                                                                                 .map((prod) => (
                                                                                <div key={prod.id} style={{background: "white"}} >
                                                                                  <div className='item border border-light'>
                                                                                    <img style={{height: "170px"}}src={"https://localhost:5001/images/"+ prod.imageName} alt="das"/>
                                                                                    <p className='preco'>{prod.price}€</p>
                                                                                    </div>
                                                                                </div>
                                                                      )
                                                                      ))}else if(produtoSelected.divisionName === 'Sala de estar' && produtoSelected.state === 'Active' && produtoSelected.category === 'Móvel de bar'){
                                                                        return(
                                                                          allProducts.filter((prod) => prod.divisionName === 'Sala de estar' && prod.state === 'Active' && prod.category ==='Móvel de bar' && prod.id !== produtoSelected.id)
                                                                                   .map((prod) => (
                                                                                  <div key={prod.id} style={{background: "white"}} >
                                                                                    <div className='item border border-light'>
                                                                                      <img style={{height: "170px"}}src={"https://localhost:5001/images/"+ prod.imageName} alt="das"/>
                                                                                      <p className='preco'>{prod.price}€</p>
                                                                                      </div>
                                                                                  </div>
                                                                        )
                                                                        ))}else if(produtoSelected.divisionName === 'Sala de estar' && produtoSelected.state === 'Active' && produtoSelected.category === 'Mesinha de centro/apoio'){
                                                                          return(
                                                                            allProducts.filter((prod) => prod.divisionName === 'Sala de estar' && prod.state === 'Active' && prod.category ==='Mesinha de centro/apoio' && prod.id !== produtoSelected.id)
                                                                                     .map((prod) => (
                                                                                    <div key={prod.id} style={{background: "white"}} >
                                                                                      <div className='item border border-light'>
                                                                                        <img style={{height: "170px"}}src={"https://localhost:5001/images/"+ prod.imageName} alt="das"/>
                                                                                        <p className='preco'>{prod.price}€</p>
                                                                                        </div>
                                                                                    </div>
                                                                          )
                                                                          ))}else if(produtoSelected.divisionName === 'Sala de jantar' && produtoSelected.state === 'Active' && produtoSelected.category === 'Aparadores'){
                                                                            return(
                                                                              allProducts.filter((prod) => prod.divisionName === 'Sala de jantar' && prod.state === 'Active' && prod.category ==='Aparadores' && prod.id !== produtoSelected.id)
                                                                                       .map((prod) => (
                                                                                      <div key={prod.id} style={{background: "white"}} >
                                                                                        <div className='item border border-light'>
                                                                                          <img style={{height: "170px"}}src={"https://localhost:5001/images/"+ prod.imageName} alt="das"/>
                                                                                          <p className='preco'>{prod.price}€</p>
                                                                                          </div>
                                                                                      </div>
                                                                            )
                                                                            ))}else if(produtoSelected.divisionName === 'Sala de jantar' && produtoSelected.state === 'Active' && produtoSelected.category === 'Mesas'){
                                                                              return(
                                                                                allProducts.filter((prod) => prod.divisionName === 'Sala de jantar' && prod.state === 'Active' && prod.category ==='Mesas' && prod.id !== produtoSelected.id)
                                                                                         .map((prod) => (
                                                                                        <div key={prod.id} style={{background: "white"}} >
                                                                                          <div className='item border border-light'>
                                                                                            <img style={{height: "170px"}}src={"https://localhost:5001/images/"+ prod.imageName} alt="das"/>
                                                                                            <p className='preco'>{prod.price}€</p>
                                                                                            </div>
                                                                                        </div>
                                                                              )
                                                                              ))}else if(produtoSelected.divisionName === 'Sala de jantar' && produtoSelected.state === 'Active' && produtoSelected.category === 'Vitrines'){
                                                                                return(
                                                                                  allProducts.filter((prod) => prod.divisionName === 'Sala de jantar' && prod.state === 'Active' && prod.category ==='Vitrines' && prod.id !== produtoSelected.id)
                                                                                           .map((prod) => (
                                                                                          <div key={prod.id} style={{background: "white"}} >
                                                                                            <div className='item border border-light'>
                                                                                              <img style={{height: "170px"}}src={"https://localhost:5001/images/"+ prod.imageName} alt="das"/>
                                                                                              <p className='preco'>{prod.price}€</p>
                                                                                              </div>
                                                                                          </div>
                                                                                )
                                                                                ))}else if(produtoSelected.divisionName === 'Sala de jantar' && produtoSelected.state === 'Active' && produtoSelected.category === 'Estantes'){
                                                                                  return(
                                                                                    allProducts.filter((prod) => prod.divisionName === 'Sala de jantar' && prod.state === 'Active' && prod.category ==='Estantes' && prod.id !== produtoSelected.id)
                                                                                             .map((prod) => (
                                                                                            <div key={prod.id} style={{background: "white"}} >
                                                                                              <div className='item border border-light'>
                                                                                                <img style={{height: "170px"}}src={"https://localhost:5001/images/"+ prod.imageName} alt="das"/>
                                                                                                <p className='preco'>{prod.price}€</p>
                                                                                                </div>
                                                                                            </div>
                                                                                  )
                                                                                  ))}else if(produtoSelected.divisionName === 'Sala de jantar' && produtoSelected.state === 'Active' && produtoSelected.category === 'Conjuntos'){
                                                                                    return(
                                                                                      allProducts.filter((prod) => prod.divisionName === 'Sala de jantar' && prod.state === 'Active' && prod.category ==='Conjuntos' && prod.id !== produtoSelected.id)
                                                                                               .map((prod) => (
                                                                                              <div key={prod.id} style={{background: "white"}} >
                                                                                                <div className='item border border-light'>
                                                                                                  <img style={{height: "170px"}}src={"https://localhost:5001/images/"+ prod.imageName} alt="das"/>
                                                                                                  <p className='preco'>{prod.price}€</p>
                                                                                                  </div>
                                                                                              </div>
                                                                                    )
                                                                                    ))}else if(produtoSelected.divisionName === 'Sala de jantar' && produtoSelected.state === 'Active' && produtoSelected.category === 'Cadeiras'){
                                                                                      return(
                                                                                        allProducts.filter((prod) => prod.divisionName === 'Sala de jantar' && prod.state === 'Active' && prod.category ==='Cadeiras' && prod.id !== produtoSelected.id)
                                                                                                 .map((prod) => (
                                                                                                <div key={prod.id} style={{background: "white"}} >
                                                                                                  <div className='item border border-light'>
                                                                                                    <img style={{height: "170px"}}src={"https://localhost:5001/images/"+ prod.imageName} alt="das"/>
                                                                                                    <p className='preco'>{prod.price}€</p>
                                                                                                    </div>
                                                                                                </div>
                                                                                      )
                                                                                      ))}
            
              })()}
          </OwlCarousel>
              )}
          })()}
          <div className='mt-4 container'>
            <h3>Comprado em conjunto</h3>
          </div>
          {(() => {
            if(Object.keys(allProducts).length > 0){
              return (
          <OwlCarousel
          className="owl-carousel owl-theme mb-5 ps-1 pe-1"
          items={Object.keys(allProducts).length}
          autoPlay={true}
          autoplayTimeout={1000}
          nav={true}
          dots={false}
          margin={10}
          responsive={
            0==={
              items:1
            },
            400==={
              items:3
            },
            600==={
              items:4
            },
            1000==={
              items:5
            }
          }   
          
          >
            {(() => {if(produtoSelected.divisionName === 'Cozinha' && produtoSelected.state === 'Active'){
                      return(
                        allProducts.filter((prod) => prod.divisionName === 'Cozinha' && prod.state === 'Active' && prod.id !== produtoSelected.id && prod.category !== 'Conjuntos')
                                 .map((prod) => (
                                <div key={prod.id} style={{background: "white"}} >
                                  <div className='item border border-light'>
                                    <img style={{height: "170px"}}src={"https://localhost:5001/images/"+ prod.imageName} alt="das"/>
                                    <p className='preco'>{prod.price}€</p>
                                    </div>
                                </div>
                      )
                      ))}else if(produtoSelected.divisionName === 'Escritório' && produtoSelected.state === 'Active' ){
                                return(
                                  allProducts.filter((prod) => prod.divisionName === 'Escritório' && prod.state === 'Active' && prod.id !== produtoSelected.id && prod.category !== 'Conjuntos')
                                           .map((prod) => (
                                          <div key={prod.id} style={{background: "white"}} >
                                            <div className='item border border-light'>
                                              <img style={{height: "170px"}}src={"https://localhost:5001/images/"+ prod.imageName} alt="das"/>
                                              <p className='preco'>{prod.price}€</p>
                                              </div>
                                          </div>
                                )
                                ))}else if(produtoSelected.divisionName === 'Exterior' && produtoSelected.state === 'Active' ){
                                        return(
                                          allProducts.filter((prod) => prod.divisionName === 'Exterior' && prod.state === 'Active'  && prod.id !== produtoSelected.id && prod.category !== 'Conjuntos')
                                                   .map((prod) => (
                                                  <div key={prod.id} style={{background: "white"}} >
                                                    <div className='item border border-light'>
                                                      <img style={{height: "170px"}}src={"https://localhost:5001/images/"+ prod.imageName} alt="das"/>
                                                      <p className='preco'>{prod.price}€</p>
                                                      </div>
                                                  </div>
                                        )
                                        ))}else if(produtoSelected.divisionName === 'Quarto' && produtoSelected.state === 'Active'){
                                                return(
                                                  allProducts.filter((prod) => prod.divisionName === 'Quarto' && prod.state === 'Active' && prod.id !== produtoSelected.id)
                                                           .map((prod) => (
                                                          <div key={prod.id} style={{background: "white"}} >
                                                            <div className='item border border-light'>
                                                              <img style={{height: "170px"}}src={"https://localhost:5001/images/"+ prod.imageName} alt="das"/>
                                                              <p className='preco'>{prod.price}€</p>
                                                              </div>
                                                          </div>
                                                )
                                                ))}else if(produtoSelected.divisionName === 'Sala de estar' && produtoSelected.state === 'Active'){
                                                                return(
                                                                  allProducts.filter((prod) => prod.divisionName === 'Sala de estar' && prod.state === 'Active' && prod.id !== produtoSelected.id)
                                                                           .map((prod) => (
                                                                          <div key={prod.id} style={{background: "white"}} >
                                                                            <div className='item border border-light'>
                                                                              <img style={{height: "170px"}}src={"https://localhost:5001/images/"+ prod.imageName} alt="das"/>
                                                                              <p className='preco'>{prod.price}€</p>
                                                                              </div>
                                                                          </div>
                                                                )
                                                                ))}else if(produtoSelected.divisionName === 'Sala de jantar' && produtoSelected.state === 'Active'){
                                                                            return(
                                                                              allProducts.filter((prod) => prod.divisionName === 'Sala de jantar' && prod.state === 'Active' && prod.id !== produtoSelected.id && prod.category !== "Conjuntos")
                                                                                       .map((prod) => (
                                                                                      <div key={prod.id} style={{background: "white"}} >
                                                                                        <div className='item border border-light'>
                                                                                          <img style={{height: "170px"}}src={"https://localhost:5001/images/"+ prod.imageName} alt="das"/>
                                                                                          <p className='preco'>{prod.price}€</p>
                                                                                          </div>
                                                                                      </div>
                                                                            )
                                                                            ))}else if(produtoSelected.divisionName === 'Casa de banho' && produtoSelected.state === 'Active'){
                                                                              return(
                                                                                allProducts.filter((prod) => prod.divisionName === 'Casade banho' && prod.state === 'Active' && prod.id !== produtoSelected.id)
                                                                                         .map((prod) => (
                                                                                        <div key={prod.id} style={{background: "white"}} >
                                                                                          <div className='item border border-light'>
                                                                                            <img style={{height: "170px"}}src={"https://localhost:5001/images/"+ prod.imageName} alt="das"/>
                                                                                            <p className='preco'>{prod.price}€</p>
                                                                                            </div>
                                                                                        </div>
                                                                              )
                                                                              ))}else if(produtoSelected.divisionName === 'Complementos' && produtoSelected.state === 'Active'){
                                                                                return(
                                                                                  allProducts.filter((prod) => prod.divisionName === 'Complementos' && prod.state === 'Active' && prod.id !== produtoSelected.id)
                                                                                           .map((prod) => (
                                                                                          <div key={prod.id} style={{background: "white"}} >
                                                                                            <div className='item border border-light'>
                                                                                              <img style={{height: "170px"}}src={"https://localhost:5001/images/"+ prod.imageName} alt="das"/>
                                                                                              <p className='preco'>{prod.price}€</p>
                                                                                              </div>
                                                                                          </div>
                                                                                )
                                                                                ))}
              })()}
          </OwlCarousel>
          )}
        })()}
        <Footer/>
        </>
        
    )
}