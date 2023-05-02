// import React from 'react';

import Chefs from "../Chefs/Chefs";

import Header from "../Header/Header";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/hZ9QjS5/banner.png")` }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-extrabold">Best Chef Recipe</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-warning">Let Meet Our Chef&apos;s</button>
                    </div>
                </div>
            </div>
            <Chefs />
        </div>
    );
};

export default Home;