import {useState, useEffect} from 'react'

const productInitial = {
    id: 0,
    name: '',
    divisionName: '',
    description: '',
    price: 0,
    quantity: 0,
    state: '0',
}

export default function ProdutoForm(props) {
    const [productad, setProductsad] = useState(productAtual())

    /*Editar*/
    useEffect(() =>{
        if(props.prodSelected.id !== 0){
            setProductsad(props.prodSelected);
        }
    }, [props.prodSelected]);

    const inputTextHandler = (e) => {
        const {name, value} = e.target;
        
        setProductsad({...productad, [name]: value});
    };

    /*Adicionar*/
    const handleSubmit = (e) => {
        e.preventDefault();
        if(props.prodSelected.id !== 0)
            props.updateProductAdm(productad);
        else
            props.addProductsAdm(productad);
           
        setProductsad(productInitial); 
    };

    const handleCancelar = (e) => {
        e.preventDefault();
        props.cancelProductAdm();
        setProductsad(productInitial);
    };

    function productAtual (){
        if(props.prodSelected.id !== 0){
            return props.prodSelected
        }else{
            return productInitial;
        }
    }

    return (
        <>
            <div className='container bg-light'>
                <form className=' row g-3 mt-3' onSubmit={handleSubmit}>

                    <div className="col-md-6">
                    <label className="form-label">Nome do Produto</label>
                    <input type="text" className="form-control" id="name" 
                        name='name' onChange={inputTextHandler} value={productad.name}/>
                    </div>

                    <div className="col-md-6">
                        <label className='form-label'>Nome da divisão</label>
                        <select id="divisionName" name='divisionName' onChange={inputTextHandler} 
                        value={productad.divisionName} className='form-select'>
                            <option defaultValue="0">Não definido</option>
                            <option value="Cozinha">Cozinha</option>
                            <option value="Sala de estar">Sala de estar</option>
                            <option value="Sala de jantar">Sala de jantar</option>
                            <option value="Casa de banho">Casa de banho</option>
                            <option value="Quarto">Quarto</option>
                            <option value="Escritório">Escritório</option>
                            <option value="Complementos">Complementos</option>
                            <option value="Exterior">Exterior</option>
                        </select>
                    </div>

                    <div className="col-md-12">
                    <label className="form-label">Descrição</label>
                    <textarea type="text" className="form-control" id="description" 
                    name='description' onChange={inputTextHandler} value={productad.description}/>
                    <hr/>
                    </div>

                    <div className="col-md-6">
                    <label className="form-label">Preço do produto</label>
                    <input type="number" className="form-control" id="price" 
                    name='price' onChange={inputTextHandler} value={productad.price}/>
                    </div>

                    <div className="col-md-6">
                    <label className="form-label">Quantidade do produto</label>
                    <input type="number" className="form-control" id="quantity" 
                    name='quantity' onChange={inputTextHandler} value={productad.quantity}/>
                    </div>

                    {/*
                    <div className='col-md-3'></div>
                    <div className='col-md-6'>
                        <label className="form-label mt-1 pt-2" align="center">Imagem do produto</label>
                        <input type="file" className="form-control" id="image" aria-describedby="inputGroupFileAddon04" aria-label="Upload"/>
                    </div>
                    <div className='col-md-3'></div>*/}

                    <div className="col-md-6">
                        <label className='form-label'>Estado do produto</label>
                        <select id="state" name='state' className='form-select'
                            onChange={inputTextHandler} value={productad.state}>
                            <option defaultValue="0">Não definido</option>
                            <option value="Active">Ativo</option>
                            <option value="Inactive">Inativo</option>
                        </select>
                    </div>

                    <div className='col-md-12' align="center">
                        {
                            productad.id === 0 ? (
                            <>
                            <div className='d-flex justify-content-between'>
                                <button type="submit" className='btn btn-outline-primary'><i className="fa fa-check me-2"></i>Confirmar</button>
                                <button className='btn btn-outline-danger' onClick={handleCancelar}><i className="fa fa-xmark me-2"></i>Cancelar</button>
                            </div>
                            </>
                        ) : (
                            <>
                            <div className='d-flex justify-content-between'>
                                <button type="submit" className='btn btn-outline-success'><i className="fa fa-check me-2"></i>Guardar Alterações</button>
                                <button className='btn btn-outline-danger' onClick={handleCancelar}><i className="fa fa-xmark me-2"></i>Cancelar</button>
                            </div>
                            </>
                        )}
                    </div>
                </form>
            </div>
        </>    
    );
}
