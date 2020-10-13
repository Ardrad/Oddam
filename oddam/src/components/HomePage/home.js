import React, {useState} from 'react';
import Authuser from "./Nav/Authuser";
import Navbar from "./Nav/Navigation";
import MainContent from "./Main/Main";
import Achievements from "./Columns/Achievements";
import FourSteps from "./Columns/FourSteps";
import AboutUs from "./Columns/AboutUs";
import Footer from "./Footer/footer";
import Contact from "./Contact/Contact";



const Home = () => {

    return (
        <>
            <div className='main-container'>
                <div className='main-center'>
                    <Authuser/>
                    <Navbar/>
                </div>
                <MainContent/>
            </div>
            <div className='sections-container'>
                <Achievements/>
                <FourSteps/>
                <AboutUs name='AboutUs'/>
                <Contact/>
                <Footer/>
            </div>
        </>

    )
}

export default Home;