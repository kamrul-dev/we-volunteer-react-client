import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import NavBar from '../../Shared/NavBar/NavBar';
import logo from '../../../logos/we-volunteer.png'
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-toastify';


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();


    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        return toast('Something went wrong!!')
    }

    if (user) {
        navigate('/home');
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
    }

    return (
        <div>
            <NavBar></NavBar>
            <div className='login-body'>
                <div className="container-full">
                    <div className="item-container d-flex flex-column">
                        <img className='w-25' src={logo} alt="" />
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
                    <form onSubmit={handleRegister}>
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
                    <div className="display-space-between">
                        <Link className='text-decoration-none' to="/">privacy policy</Link>
                        <Link className='text-decoration-none' to="/">Terms & condition</Link>
                    </div>
                    <div>
                        <span>Already Have an Account?</span> <Link className='text-decoration-none' to="/login">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;