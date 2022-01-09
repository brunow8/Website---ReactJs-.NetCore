import React from 'react'

function divisionNameLabel (param) {
    switch(param) {
      case 'Cozinha':
      case 'Sala de estar':
      case 'Sala de jantar':
      case 'Casa de banho':
      case 'Quarto':
      case 'Complementos':
      case 'Exterior':
      case 'Escritório':
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
                      {divisionNameLabel(props.prod.divisionName)}
                    </h6>
                  </div>
                  <div className='card-text'>

                    <h6>Descrição do produto:</h6>
                    <div className='cold-md-12 border shadow-sm'>
                        {props.prod.description} 
                    </div>

                    <div className='col-md-12 d-flex justify-content-between'>
                      <div className='col-md-6' align="center">
                        <h6 className='col-md-6 ms-3'>Preço</h6>
                      </div>
                      <div className='col-md-6' align="center">
                       <h6 className='col-md-6 me-3'>Quantidade de stock</h6> 
                      </div>
                    </div>  

                    <div className='col-md-12 d-flex justify-content-between'>
                      <div className='col-md-6' align="center">
                        <h6 className='col-md-6 ms-3 border shadow'>{props.prod.price}€</h6>
                      </div>
                      <div className='col-md-6' align="center">
                       <h6 className='col-md-6 me-3 border shadow'>{props.prod.quantity} un</h6> 
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
                        onClick={() => props.editProductsAdm(props.prod.id)}>
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
