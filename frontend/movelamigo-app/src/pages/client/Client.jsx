import React from 'react'
import Cart from '../../components/Cart/Cart';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar/NavBar';
import NoviProm from '../../components/Novi-Prom/NoviProm';
import SobreNos from '../../components/SobreNos/SobreNos';
import Video from './../../components/Video';
import Categorias from './Categorias';
import Ideias from './Ideias';
export default function Client() {

    return (
            <>
                <Video/>
                <NavBar/>
                <Cart/>
                <Categorias/>
                <Ideias/>
                <NoviProm/>
                <SobreNos/>
                <Footer/>
            </>
    )
}
