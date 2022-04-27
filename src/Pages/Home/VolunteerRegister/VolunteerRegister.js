import React from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import logo from '../../../logos/we-volunteer.png'

const VolunteerRegister = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='login-body'>
                <div className="container-full">
                    <div className="item-container d-flex flex-column">
                        <div className='log-in text-center'>
                            <img className='w-50' src={logo} alt="" />
                        </div>
                    </div>
                    <div className="item-container">
                        <p>Register as a Volunteer</p>
                    </div>
                    <form>
                        <div className="form-input">
                            <input type="text" name='name' placeholder='Name' />
                        </div>
                        <div className="form-input">
                            <input type="email" name='email' placeholder='Email' required />
                        </div>
                        <div className="form-input">
                            <input type="password" name='password' placeholder='Password' required />
                        </div>
                        <div>
                            <button type="submit">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default VolunteerRegister;