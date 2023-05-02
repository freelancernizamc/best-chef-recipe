import logo from '../../../public/images/logo.png'

const Header = () => {
    return (
        <div>
            <div className="navbar bg-black pt-5 text-white">
                <div className="flex-1 ml-10">
                    <img className='w-[300px]' src={logo} alt='logo' />
                </div>
                <div className="flex-none gap-2 mr-5">
                    <div className="flex justify-center">
                        <ul className="menu menu-horizontal px-1">
                            <li><a>Home</a></li>
                            <li><a>About</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0}>
                            <div className="navbar-end">
                                <button to='/login' className="btn btn-warning">Login</button>
                            </div>
                        </label>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;