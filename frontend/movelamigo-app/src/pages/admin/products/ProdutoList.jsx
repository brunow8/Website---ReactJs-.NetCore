import React from 'react'
import ProdutoItem from './ProdutoItem';


export default function ProdutoList(props) {
    return (
        <div className='mt-3 mb-4'>
            {(() => {
                if(props.divisao === "CasaBanho" || props.divisao === 'Complementos'){
                    return (props.produtosad.filter((prod) => prod.divisionName === props.divisao)
                             .map((prod)=> (
                        <ProdutoItem
                            key={prod.id}
                            prod = {prod}
                            editProductsAdm = {props.editProductsAdm}
                            handleConfirmModal = {props.handleConfirmModal}
                        />
                    ))

                    )
                }else{
                    return (props.produtosad.filter((prod) => prod.divisionName === props.divisao  && prod.category === props.categoria)
                             .map((prod)=> (
                        <ProdutoItem
                            key={prod.id}
                            prod = {prod}
                            editProductsAdm = {props.editProductsAdm}
                            handleConfirmModal = {props.handleConfirmModal}
                        />
                    ))

                    )
                }
            })()}
            
        </div>
    )
}