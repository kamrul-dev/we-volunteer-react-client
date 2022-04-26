import React from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import './Banner.css'

const Banner = () => {
    return (
        <div className='hero-banner'>
            <NavBar></NavBar>
            <div className='text-center'>
                <h2 className=''>WE GROW PEOPLE FOR HELPING</h2>
                <input className='w-50' type="text" name="" id="" placeholder='search' />
            </div>
        </div>
    );
};

export default Banner;