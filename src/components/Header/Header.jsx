import { Link } from 'react-router-dom';
import logo from '../../../public/images/logo.png'
// import { getAuth, signOut } from 'firebase/auth';
// import app from '../../firebase/firebase.config';
// import { useState } from 'react';


// const handleSignOut = () => {
//     const auth = getAuth(app);
//     const { user, setUser } = useState(user);
//     signOut(auth)
//         .then(result => {
//             console.log(result)
//             setUser(null);
//         })
//         .catch(error => {
//             console.log(error)
//         })
// }

const Header = () => {
    return (
        <div>
            <div className="navbar bg-black pt-5 text-white">
                <div className="md:flex-1 ml-10">
                    <img className='md:w-[300px] sm:w-[200px]' src={logo} alt='logo' />
                </div>
                <div className="flex-none gap-2 mr-5">
                    <div className="md:flex justify-center items-center">
                        <ul className="menu menu-horizontal px-5">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0}>
                            <div className="md:navbar-end">

                                <button className='btn btn-warning'><Link to='/login'>Login</Link></button>

                            </div>
                        </label>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;