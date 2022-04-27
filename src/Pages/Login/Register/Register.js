import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';

const Register = () => {
    return (
        <div className='login-body'>
            <div className="container-full">
                <div className="item-container">
                    <h2 className="log-in">Registration</h2>
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
                        <label htmlFor="name" className="label">Name</label>
                        <input type="text" name='name' />
                    </div>
                    <div className="form-input">
                        <label htmlFor="email" className="label">Email</label>
                        <input type="email" name='email' />
                    </div>
                    <div className="form-input">
                        <label htmlFor="password" className="label">Password</label>
                        <input type="password" name='password' />
                    </div>
                    <div>
                        <button type="submit">Register</button>
                    </div>
                </form>
                <div className="display-space-between">
                    <Link className='text-decoration-none' to="/">privacy policy</Link>
                    <Link className='text-decoration-none' to="/">Terms & condition</Link>
                </div>
                <div>
                    <span>Already Have an Account?</span> <Link className='text-decoration-none' to="/login">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;