import React from 'react'
import ProdutoItem from './../admin/ProdutoItem';


export default function ProdutoList(props) {
    return (
        <div className='mt-3 mb-4'>
            {props.produtosad.map((prod)=> (
            <ProdutoItem
                key={prod.id}
                prod = {prod}
                editProductsAdm = {props.editProductsAdm}
                handleConfirmModal = {props.handleConfirmModal}
            />
            ))}
        </div>
    )
}
