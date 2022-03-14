import React from 'react'

  function divisionNameLabel (param) {
    switch(param) {
      case 'SalaEstar':
        return 'Sala de estar'
      case 'SalaJantar':
        return 'Sala de jantar'
      case 'Escritorio':
        return 'Escritório'
      case 'Casa de banho':
      case 'Quarto':
      case 'Complementos':
      case 'Cozinha':
      case 'Exterior':
          return param;
      default:
        return 'Não definido';
    }
  }
  function stateLabel (param) {
    switch(param) {
      case 'Active':
        return 'Ativo';
      case 'Inactive':
        return 'Inativo';
      default:
        return 'Não definido';
    }
  }
  function stateStyle (param) {
    switch(param) {
      case 'Active':
        return 'smile';
      case 'Inactive':
        return 'frown';
      default:
        return 'meh';
    }
  }
  function stateColor (param) {
    switch(param) {
      case 'Active':
        return 'primary';
      case 'Inactive':
        return 'danger';
      default:
        return 'dark';
    }
  }

export default function ProdutoItem(props) {

  return (
            <div className='container bg-light'>
              <div className='card col-md-12 mb-2 mt-3 shadow m-auto' align="center">
                <div className='card-body'>
                  <div className='d-flex justify-content-between'>
                    <h5 className='card-tittle'>
                      <span className="badge rounded-pill bg-secondary">Produto</span> - {props.prod.name}
                    </h5>
                    <h6>
                      <strong>
                        {divisionNameLabel(props.prod.divisionName)}
                      </strong>
                    </h6>
                  </div>
                      <h6>Detalhes do produto:</h6>
                      <div className='cold-md-12 border shadow-sm mb-3'>
                        <p>{props.prod.details} </p>
                      </div>
                  <div className="col-md-12">
                    <img alt="not fount" className='imagemProduto' src={"https://localhost:5001/images/"+ props.prod.imageName}/>
                  </div>

                  <div className='card-text'>

                    <h6>Descrição do produto:</h6>
                    <div className='cold-md-12 border shadow-sm mb-3'>
                        <p>{props.prod.description} </p>
                    </div>

                    <div className='col-md-12 d-flex justify-content-between'>
                      <div className='col-md-4' align="center">
                        <h6 className='col-md-4 ms-2'>Preço</h6>
                      </div>
                      <div className='col-md-4' align="center">
                       <h6 className='col-md-4 me-2'>Preço por entrega</h6> 
                      </div>
                      <div className='col-md-4' align="center">
                       <h6 className='col-md-4 me-2'>Quantidade de stock</h6> 
                      </div>
                    </div>  

                    <div className='col-md-12 d-flex justify-content-between'>
                      <div className='col-md-4' align="center">
                        <h6 className='col-md-6 ms-3 border shadow p-1 rounded'>{props.prod.price}€</h6>
                      </div>
                      <div className='col-md-4' align="center">
                       <h6 className='col-md-6 me-3 border shadow p-1 rounded'>{Math.round((props.prod.deliveryPrice + Number.EPSILON) * 100) / 100}€</h6> 
                      </div>
                      <div className='col-md-4' align="center">
                       <h6 className='col-md-6 me-3 border shadow p-1 rounded'>{props.prod.quantity} un</h6> 
                      </div>
                    </div>
                  </div>
                  <div className='d-flex justify-content-between border-top'>
                    <h6 className='mt-4'>
                      Estado:
                      <span className={'ms-1 text-' + stateColor(props.prod.state)}><i className={'me-1 far fa-' + stateStyle(props.prod.state)}>&nbsp;{stateLabel(props.prod.state)}</i></span>
                    </h6>
                    <div className='d-flex justify-content-end pb-2 pt-2'>
                      <div className='btn btn-outline-primary me-2'
                        onClick={() => props.editProductsAdm(props.prod.id, props.e)}>
                        <i className='fas fa-pen me-2'></i>
                        Editar
                      </div>
                      <div className='btn btn-outline-danger'
                          onClick={() => props.handleConfirmModal(props.prod.id)}>
                          <i className='fas fa-trash me-2'></i>
                        Eliminar
                      </div>
                    </div>
                  </div>  
                </div>
              </div>
            </div>
  )
}
