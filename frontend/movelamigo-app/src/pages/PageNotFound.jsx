import React from 'react'
import NavBar from '../components/NavBar/NavBar';
import Video from '../components/Video';
import Footer from './../components/Footer';
import erro from './client/images/erro.jpg'

export default function PageNotFound() {
    return (
        <>
       <NavBar/>
        <div className='notfound'>
            <h1 className=" mt-4 mb-4 text-center ms-5 menuitemsNotFound">
                Ops...
                <br/>
                <br/>
                Página não encontrada!
            </h1>
        </div>
        <Footer/>
        </>
        
    )
}
