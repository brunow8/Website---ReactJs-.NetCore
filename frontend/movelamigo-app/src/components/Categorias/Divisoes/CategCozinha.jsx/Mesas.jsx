import { useState, React, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import api from '../../../../api/product'
import classes from './../../../../css/Categorias.module.css'

export default function Mesas() {

  const [produtosad, setProdutosad] = useState([]);
  const history = useHistory();

  
  const catchAllProductsAdm = async () => {
    const response = await api.get('movel');
    return response.data;
}

  useEffect(() => {
    const getProductsAdm = async () => {
      const produtosad = await catchAllProductsAdm();
        if( /*Se esta variável tiver valor dentro ele faz o passo seguinte*/produtosad) 
            setProdutosad(produtosad);
      };
      
      getProductsAdm();
    }, []);
    
  return (
    <>
          <section className={classes.CategoriasForm}>
            <div className="container ">
                <div className='row'>
                    {produtosad.filter((prod) => prod.divisionName === 'Cozinha' && prod.state === 'Active' && prod.category === 'Mesas')
                               .map((prod) => (
                    <div key={prod.id} className="col-sm-6 col-md-4 mb-5 borderbaixa">
                        <div className='ProductsCard'>
                          <div className='col-12'>
                            <h6 className='text-black' align="center">{prod.name}</h6>
                          </div>
                          <div className='image-popup '>
                              <img className="img-fluidme efeitoimg-cardsprod rounded mb-2" src={"https://localhost:5001/images/"+ prod.imageName} alt="dasd"/>
                              <div className='d-flex justify-content-between'>
                                <p className='preco'>{prod.price}€</p>
                                <div className='d-flex'>
                                  <i className="fa fa-store mt-1 fa-xs icon-entregas me-2"></i>
                                  {prod.deliveryState = "Yes" ? <i className="fa-solid fa-truck fa-xs margemcarrinha icon-entregas"></i> : ''}
                                </div>
                              </div>
                          </div>
                          <div className='mb-2 col-12' align="center">
                            <button align="center" className='btn btn-outline-dark text-warning mb-2 ms-2 rounded me-4 btn-sm' 
                            onClick={() => history.push(`/product/detail/${prod.id}`)}>
                              Ver artigo
                            </button>
                          </div>
                        </div>
                    </div>    
                    ))}
                </div>
            </div>
          </section>
    </>
          

  );
}
