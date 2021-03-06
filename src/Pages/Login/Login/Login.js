import React, { useRef } from 'react';
import './Login.css';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../../Shared/NavBar/NavBar';
import logo from '../../../logos/we-volunteer.png';
import auth from '../../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-toastify';


const Login = () => {
    const emailRef = useRef('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const [sendPasswordResetEmail, sending, errorReset] = useSendPasswordResetEmail(
        auth
    );

    if (loading || sending) {
        return <Loading></Loading>
    }
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'> *Error: {error?.message}</p>
    }
    if (user) {
        navigate('/home');
    }

    const handleLogin = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        await signInWithEmailAndPassword(email, password);
    }

    const handleResetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        if (email) {
            toast('Sent Email')
        }
        else {
            toast('Please Enter Email Address');
        }

    }

    return (
        <div>
            <NavBar></NavBar>
            <div className='login-body'>
                <div className="container-full">
                    <div className="item-container d-flex flex-column">
                        <img className='w-25' src={logo} alt="" />
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
                    <form onSubmit={handleLogin}>
                        <div className="form-input">
                            <input ref={emailRef} type="email" name='email' placeholder='Email' required />
                        </div>
                        <div className="form-input">
                            <input type="password" name='password' placeholder='Password' required />
                        </div>
                        <div className="display-space-between">
                            <div>
                                <input type="checkbox" />
                                <label htmlFor="password" className="chekbox-label">Remember Me</label>
                            </div>
                            <div>
                                <p onClick={handleResetPassword} className='btn btn-link text-primary pe-atuo text-decoration-none'>Forget password?</p>
                            </div>
                        </div>
                        <div>
                            <button type="submit">Log in</button>
                        </div>
                    </form>
                    {errorElement}
                    <div className="display-space-between">
                        <Link className='text-decoration-none' to="/">privacy policy</Link>
                        <Link className='text-decoration-none' to="/">Terms & condition</Link>
                    </div>
                    <div>
                        <Link className='text-decoration-none' to="/register">Create an Account</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;