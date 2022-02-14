import {useState, React, useEffect} from 'react'
import {Button, Modal} from 'react-bootstrap';
import api from '../../api/product';
import ProdutoList from './ProdutoList';
import ProdutoForm from './ProdutoForm';
import TittlePage from '../../components/TittlePage';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Menu from './Menu';

export default function Produto() {

  const [showProdModal, setShowProdModal] = useState (false);
  const [smShowConfirmModal, setSmShowConfirmModal] = useState (false);
  
  const [produtosad, setProdutosad] = useState([]);
  const [produtoad, setProdutoad] = useState({id: 0});
  
  const handleProdModal = () => setShowProdModal(!showProdModal);

  const handleConfirmModal = (id) => {
    if(id !== 0 && id !== undefined){
      const product = produtosad.filter((prod) => prod.id === id);
      setProdutoad(product[0]);
    }else{
      setProdutoad({id: 0})
    }
    setSmShowConfirmModal(!smShowConfirmModal);
  } 

  /*Ligação base dados*/
  const catchAllProductsAdm = async () => {
      const response = await api.get('movel');
      return response.data;
  }
  useEffect(() => {
    const getProductsAdm = async () => {
      const AllProductsAdm = await catchAllProductsAdm();
        if( /*Se esta variável tiver valor dentro ele faz o passo seguinte*/AllProductsAdm) 
            setProdutosad(AllProductsAdm);
      };
      
      getProductsAdm();
    }, []);

  const addProductsAdm = async (prod) =>{
    let formData = new FormData();
        formData.append('id', prod.id)
        formData.append('name', prod.name)
        formData.append('divisionName', prod.divisionName)
        formData.append('description', prod.description)
        formData.append('price', prod.price)
        formData.append('quantity', prod.quantity)
        formData.append('state', prod.state)
        formData.append('deliveryPrice', prod.deliveryPrice)
        formData.append('deliveryState', prod.deliveryState)
        formData.append('details', prod.details)
        formData.append('category', prod.category)
        formData.append('imageName', prod.imageName)
        formData.append('imageFile', prod.imageFile)
      const response = await api.post('movel', formData);
      setProdutosad([...formData, response.data]);
      handleProdModal();
  }


  const deleteProductsAdm = async (id) => {
    handleConfirmModal(0);
      if(await api.delete(`movel/${id}`)){
        const produtosadDeleted = produtosad.filter(
          (prod) => prod.id !== id);
        setProdutosad([...produtosadDeleted]);
      }
  };
  
  function editProductsAdm (id, e) {
    const product = produtosad.filter((prod) => prod.id === id)
    setProdutoad(product[0]);
    handleProdModal();
  }

  function cancelProductAdm () {
    setProdutoad({id: 0})
    handleProdModal();
  }
  /*Estas duas funções estão interligadas poderiam estar na msm até */
  function resetProductAdm () {
    setProdutoad({id: 0})
    handleProdModal();
  }

  const updateProductAdm = async (prod) => {
      const response = await api.put(`movel/${prod.id}`, prod);
      const { id } = response.data;
      setProdutosad(
        produtosad.map((item) => (item.id === id ? response.data : item))
      );
      setProdutoad({id: 0})
      handleProdModal();
  }

  return (
    <>
        <Menu/>
        
        <div className='container'>
          <TittlePage title = {'Produtos'}> 
          <Button variant="outline-secondary" onClick={resetProductAdm}>
            <i className='fas fa-plus me-2'></i>Adicionar produto
          </Button>
        </TittlePage>
        </div>

        <ProdutoList
            produtosad={produtosad}
            editProductsAdm = {editProductsAdm}
            handleConfirmModal = {handleConfirmModal}
        />

        {/*Modal de adicionar e editar produtos*/}
        <Modal show={showProdModal} onHide={handleProdModal}>
          <Modal.Body>
            <ProdutoForm
              addProductsAdm={addProductsAdm}
              prodSelected = {produtoad}
              produtosad={produtosad}
              updateProductAdm = {updateProductAdm}
              cancelProductAdm = {cancelProductAdm}
              
            />
          </Modal.Body>
        </Modal>

        {/*Modal de eliminar produtos*/}
        <Modal size="sm" show={smShowConfirmModal} onHide={handleConfirmModal} animation={false}>
          <Modal.Header closeButton>
            <h3 className=' text-warning'>Eliminar Produto</h3>
          </Modal.Header>
          <Modal.Body>
            Tem a certeza que deseja eliminar o produto selecionado?
          </Modal.Body>
          <Modal.Footer className='d-flex justify-content-between algin-items-center border'>
              <div className='btn btn-outline-danger me-2' onClick={() => deleteProductsAdm(produtoad.id)}>
                <i className='fa fas-check me-2' ></i>
                Sim
              </div>
              <div className='btn btn-outline-secondary me-2' onClick={() => handleConfirmModal(0)}>
                <i className='fa fas-times me-2'></i>
                Não
              </div>
          </Modal.Footer>
        </Modal>
    </>
  );
}
