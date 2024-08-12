import React from 'react';
import HeroSection from './HeroSection';
import Reels from './Section/Reels';
import Navbar from './Shared/Navbar';
import Collection from './Section/Collection';
import Chose from './Section/Chose';
import Moment from './Section/Moment';
import Footer from './Shared/Footer';

const Homepage = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <HeroSection></HeroSection>
            <Reels></Reels>
            <Collection></Collection>
            <Chose></Chose>
            <Moment></Moment>
            <Footer></Footer>
        </div>
    );
};

export default Homepage;