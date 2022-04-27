import React from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import './Banner.css'

const Banner = () => {
    return (
        <div className='hero-banner'>
            <NavBar></NavBar>
            <div className='d-flex flex-column align-items-center'>
                <h2 className=''>WE GROW PEOPLE FOR HELPING</h2>
                <div className='search-field'>
                    <input className='' type="text" name="" id="" placeholder='search' />
                </div>
            </div>
        </div>
    );
};

export default Banner;