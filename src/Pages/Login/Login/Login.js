import React from 'react';
import './Login.css';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const login = () => {
    return (
        <div className='login-body'>
            <div className="container-full">
                <div className="item-container">
                    <h2 className="log-in">Log in</h2>
                </div>
                <div className="item-container">
                    <button>
                        <FcGoogle />
                    </button>
                    <button>
                        <BsFacebook />
                    </button>
                    <button>
                        <AiFillTwitterCircle />
                    </button>
                </div>
                <div className="item-container">
                    <p>or login using email</p>
                </div>
                <form>
                    <div className="form-input">
                        <label htmlFor="email" className="label">Email</label>
                        <input type="email" name='email' />
                    </div>
                    <div className="form-input">
                        <label htmlFor="password" className="label">Password</label>
                        <input type="password" name='password' />
                    </div>
                    <div className="display-space-between">
                        <div>
                            <input type="checkbox"/>
                            <label htmlFor="password" className="chekbox-label">Remember Me</label>
                        </div>
                        <div>
                            <Link to="/">Forget password</Link>
                        </div>
                    </div>
                    <div>
                        <button type="submit">Log in</button>
                    </div>
                </form>
                <div className="display-space-between">
                    <Link to="/">privacy policy</Link>
                    <Link to="/">Terms & condition</Link>
                </div>
                <div>
                    <Link to="/register">Create an Account</Link>
                </div>
            </div>
        </div>
    );
};

export default login;