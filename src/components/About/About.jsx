// import React from 'react';


import nizam from '../../../public/images/nizam.png';

const About = () => {
    return (
        <div className='my-5'>


            <h2 className='text-center my-5 text-5xl'>About Me</h2>
            <div className='flex items-center justify-around'>
                <div>
                    <img src={nizam} />
                </div>
                <div className="w-[500px] text-3xl">
                    <p>
                        I am Md Nizam Uddin. I am a Professional Web Developer. I completed total web developing course from
                        Programming Hero.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;