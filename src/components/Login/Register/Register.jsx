import { Link } from "react-router-dom";

import { FaGoogle, FaGithub } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../../firebase/firebase.config";
import { useState } from "react";

const auth = getAuth(app);

const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [user, setUser] = useState(null);
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
    const handleSubmit = (event) => {
        event.preventDefault();
        setSuccess('');
        setError('');
        const email = event.target.email.value;
        const password = event.target.password.value;
        const name = event.target.name.value;
        const photo = event.target.photo.value;
        console.log(email, password, name, photo);
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please add at least one Uppercase');
            return;
        }
        else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError('Please add at least two numbers');
            return;
        }
        else if (password.length < 6) {
            setError('Please add at least 6 characters');
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const loggedUser = userCredential.user;
                console.log(loggedUser);
                setError('');
                event.target.reset();
                setSuccess('User has been created successfully');
            })
            .catch((error) => {
                console.error(error.message);
                setError(error.message);
            });


    }

    // const handlePasswordBlur = (event) => {
    //     // console.log(event.target.value);
    // }

    return (
        <div className='w-50 mx-auto'>
            {user ? <h2>{user.name}</h2> : ""}

            <h1 className="text-5xl font-bold text-center mt-10">Register Now!</h1>

            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Enter Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="url" name='photo' placeholder="Enter Your Photo Url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input onChange={(event) => event.target.value} type="email" name='email' placeholder="email" className="input input-bordered" required />


                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link to="/login" className="label-text-alt link link-hover">Already Have an Account? Login!</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-warning">Register</button>
                            </div>
                        </form>
                        <p className="text-red-500">{error}</p>
                        <p className="text-green-700">{success}</p>
                        <h2 className="text-center">OR</h2>
                        <hr />
                        <div className="flex ml-5 text-2xl">   <FaGoogle onClick={handleGoogleSignIn} /> &emsp; <FaGithub onClick={handleGithubSignIn} /></div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Register;