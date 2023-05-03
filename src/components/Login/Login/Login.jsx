// import React from 'react';

import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import app from "../../../firebase/firebase.config";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {
    const [show, setShow] = useState(false);

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);


    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                navigate(form, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser);
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setUser(loggedUser);

            })
            .catch(error => {
                console.log('error', error.message)
            })
    }

    return (
        <div className='w-50 mx-auto'>
            {user ? <img src={user.image} /> : ""

            }

            <h1 className="text-5xl font-bold text-center mt-10">Please Login!</h1>

            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">


                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={show ? "text" : "password"} name='password' placeholder="password" className="input input-bordered" required />
                                <p onClick={() => setShow(!show)}><small>
                                    {
                                        show ? <span>Hide Password</span> : <span>Show Password</span>
                                    }
                                </small></p>
                                <label className="label">
                                    <Link to='/register' className="label-text-alt link link-hover">Have not any Account? Register Now!</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">

                                <button className="btn btn-warning">Login</button> :


                            </div>
                        </form>
                        <h2 className="text-center">OR</h2>
                        <hr />
                        <div className="flex ml-5 text-2xl cursor-pointer">   <FaGoogle onClick={handleGoogleSignIn} /> &emsp; <FaGithub onClick={handleGithubSignIn} /></div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;