import {useState, useEffect} from 'react';

const defaultImageName = 'img/default-image.jfif'

const productInitial = {
    id: 0,
    name: '',
    divisionName: '',
    description: '',
    price: '',
    quantity: 0,
    state: '0',
    category: '',
    deliveryPrice: 0,
    deliveryState: '0',
    details: '',
    imageName:defaultImageName,
    imageFile: null
}

export default function ProdutoForm(props) {
    const [productad, setProductsad] = useState(productAtual())
    const [errors, setErrors] = useState ({});

    /*Editar*/
    useEffect(() =>{
        if(props.prodSelected.id !== 0){
            setProductsad(props.prodSelected);
            console.log(props.prodSelected)
        }
    }, [props.prodSelected]);

    const inputTextHandler = (e) => {
        const {name, value} = e.target;
        
        setProductsad({...productad, [name]: value});
    };

    const validate = () => {
        let temp = {}
        temp.name = productad.name===''?false:true;
        temp.imageName = productad.imageName===defaultImageName?false:true;
        setErrors(temp);
        return Object.values(temp).every(x => x === true);
    }

        const handleFile = (e) => {
            if(e.target.files && e.target.files[0]){
                let file = e.target.files[0];
                productad.imageFile = file;
                const reader = new FileReader();
                    reader.onload = x => {
                        setProductsad({...productad, file, imageName: x.target.result})
                    }
                    reader.readAsDataURL(file)
            }else{
                setProductsad({...productad, imagefile : null, imageName: defaultImageName})
            }
        }    

    /*Adicionar*/
    const handleSubmit = (e) => {
        e.preventDefault();
        if(validate()){

            if(props.prodSelected.id !== 0){
                        props.updateProductAdm(productad);
                    }else{
                        props.addProductsAdm(productad);
                    }  
                        
                        setProductsad(productInitial);
                        setErrors({});
                        window.location.reload();
        }
    };

    const applyErrorClass = field => ((field in errors && errors[field] ===false) ? 'invalid-field' : '')

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
                <form className=' row g-3 mt-3'autoComplete='off' onSubmit={handleSubmit} encType="multipart/form-data">

                    <div className="col-md-6">
                    <label className="form-label">Nome do Produto</label>
                    <input type="text" className={"form-control"+ applyErrorClass('name')} id="name" 
                        name='name' onChange={inputTextHandler} value={productad.name}/>
                    </div>
                    
                    <div className="col-md-6">
                        <label className='form-label'>Nome da divisão</label>
                        <select id="divisionName" name='divisionName' onChange={inputTextHandler} 
                        value={productad.divisionName} className='form-select'>
                            <option defaultValue="0">Não definido</option>
                            <option value="Cozinha">Cozinha</option>
                            <option value="SalaEstar">Sala de estar</option>
                            <option value="SalaJantar">Sala de jantar</option>
                            <option value="CasaBanho">Casa de banho</option>
                            <option value="Quarto">Quarto</option>
                            <option value="Escritorio">Escritório</option>
                            <option value="Complementos">Complementos</option>
                            <option value="Exterior">Exterior</option>
                        </select>
                    </div>
                    <div className="col-md-12">
                        <label className="form-label">Detalhes do produto</label>
                        <textarea type="text" className="form-control" id="details" 
                            name='details' onChange={inputTextHandler} value={productad.details}/>
                        <hr/>
                    </div>
                    <div className="input-group mb-3 col-md-12">
                        {
                            productad.id === 0 ? (
                            <>
                                <div className='col-md-12 mb-2'>
                                    <img className="card-img-top" alt="not fount" width={"442px"} height={"300px"} src={productad.imageName}/>
                                    <br></br>
                                </div>
                                <input type="file" className={"form-control-file"+ applyErrorClass('imageName')} onChange={(e) => handleFile(e)} accept="image/*" id="image-uploader"/>
                            </>
                        ) : (
                            <>
                                <div className='col-md-12 mb-2'>
                                <img className="card-img-top" alt="not fount" width={"442px"} height={"300px"} src={"https://localhost:5001/images/"+ productad.imageName}/>
                                    <br></br>
                                </div>
                            </>
                        )}
                    </div>

                    <div className="col-md-12">
                    <label className="form-label">Descrição</label>
                    <textarea type="text" className="form-control" id="description" 
                    name='description' onChange={inputTextHandler} value={productad.description}/>
                    <hr/>
                    </div>

                    <div className="col-md-6">
                    <label className="form-label">Preço do produto</label>
                    <input type="text" className="form-control" id="price" 
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
                    {productad.divisionName === 'Cozinha' ?
                        <div className="col-md-6">
                            <label className='form-label'>Categoria do produto</label>
                            <select id="category" name='category' className='form-select'
                                onChange={inputTextHandler} value={productad.category}>
                                <option defaultValue="0">Não definido</option>
                                <option value="Conjuntos">Conjuntos</option>
                                <option value="Mesas">Mesas</option>
                                <option value="Cadeiras">Cadeiras</option>
                                <option value="Louceiros">Louceiros</option>
                                <option value="MovelCozinha">Móveis de cozinha</option>
                                <option value="AuxiliarCozinha">Auxiliares de cozinha</option>
                            </select>
                        </div>
                    : ''}
                    {productad.divisionName === 'SalaEstar' ?
                        <div className="col-md-6">
                            <label className='form-label'>Categoria do produto</label>
                            <select id="category" name='category' className='form-select'
                                onChange={inputTextHandler} value={productad.category}>
                                <option defaultValue="0">Não definido</option>
                                <option value="Sofas">Sofás</option>
                                <option value="Estantes">Estantes</option>
                                <option value="Prateleiras">Prateleiras</option>
                                <option value="BasesTV">Bases de multimédia</option>
                                <option value="MovelBar">Móveis de Bar</option>
                                <option value="MesinhaCentro">Mesinhas de centro/apoio</option>
                            </select>
                        </div>
                    : ''}
                    {productad.divisionName === 'SalaJantar' ?
                        <div className="col-md-6">
                            <label className='form-label'>Categoria do produto</label>
                            <select id="category" name='category' className='form-select'
                                onChange={inputTextHandler} value={productad.category}>
                                <option defaultValue="0">Não definido</option>
                                <option value="Conjuntos">Conjuntos</option>
                                <option value="Mesas">Mesas</option>
                                <option value="Cadeiras">Cadeiras</option>
                                <option value="Estantes">Estantes</option>
                                <option value="Vitrines">Vitrines</option>
                                <option value="Aparadores">Aparadores</option>
                            </select>
                        </div>
                    : ''}
                    {productad.divisionName === 'Quarto' ?
                        <div className="col-md-6">
                            <label className='form-label'>Categoria do produto</label>
                            <select id="category" name='category' className='form-select'
                                onChange={inputTextHandler} value={productad.category}>
                                <option defaultValue="0">Não definido</option>
                                <option value="CamaCasal">Cama de casal</option>
                                <option value="CamaIndividual">Camas individuais</option>
                                <option value="CamaArrumacao">Camas com arrumação</option>
                                <option value="Bercos">Berços</option>
                                <option value="Beliches">Beliches</option>
                                <option value="Comodas">Cômodas</option>
                                <option value="Roupeiros">Roupeiros</option>
                                <option value="MesinhaCabeceira">Mesinha de cabeceira</option>
                            </select>
                        </div>
                    : ''}
                    {productad.divisionName === 'Escritorio' ?
                        <div className="col-md-6">
                            <label className='form-label'>Categoria do produto</label>
                            <select id="category" name='category' className='form-select'
                                onChange={inputTextHandler} value={productad.category}>
                                <option defaultValue="0">Não definido</option>
                                <option value="Conjuntos">Conjuntos</option>
                                <option value="Secretarias">Secretárias</option>
                                <option value="Cadeiras">Cadeiras</option>
                                <option value="Livrarias">Livrarias</option>
                            </select>
                        </div>
                    : ''}
                    {productad.divisionName === 'Exterior' ?
                        <div className="col-md-6">
                            <label className='form-label'>Categoria do produto</label>
                            <select id="category" name='category' className='form-select'
                                onChange={inputTextHandler} value={productad.category}>
                                <option defaultValue="0">Não definido</option>
                                <option value="Conjuntos">Conjuntos</option>
                                <option value="Mesas">Mesas</option>
                                <option value="Cadeiras">Cadeiras</option>
                                <option value="Bancos">Bancos</option>
                            </select>
                        </div>
                    : ''}
                    <div className='col-12'>
                    <label className='form-label'>Entrega ao domícilio</label>
                            <select id="deliveryState" name='deliveryState' className='form-select'
                                onChange={inputTextHandler} value={productad.deliveryState}>
                                <option defaultValue="0">Não definido</option>
                                <option value="Yes">Sim</option>
                                <option value="No">Não</option>
                            </select>
                    </div>
                    <hr></hr>
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
