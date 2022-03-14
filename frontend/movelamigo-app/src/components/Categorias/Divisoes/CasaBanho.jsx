import { useState, React, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import api from '../../../api/product'
import classes from './../../../css/Categorias.module.css'

export default function CasaBanho() {

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
                              <div className='col-12 mb-3'>
                                <h3 align="center" className='text-black titulojust'>Casa de banho</h3>
                                <p className='justificado'>A casa de banho também conhecida como instalações sanitárias, quarto de banho ou WC (sigla de water closet), é um compartimento (ou cômodo) de uma habitação utilizado para os cuidados de 
                                higiene pessoal.</p>
                            </div>
                    {produtosad.filter((prod) => prod.divisionName === 'CasaBanho' && prod.state === 'Active')
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


