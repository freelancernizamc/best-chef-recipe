// import React from 'react';




const Blog = () => {
    return (

        <div>

            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-full md:px-24 lg:px-8 lg:py-20 bg-black text-white">
                <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                    <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
                        <a href="/" className="mb-6 sm:mx-auto">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-accent-400">
                                <svg
                                    className="w-10 h-10 text-deep-purple-900"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                        </a>
                        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
                                <span className="relative inline-block">
                                    <svg
                                        viewBox="0 0 52 24"
                                        fill="currentColor"
                                        className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-deep-purple-accent-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                    >
                                        <defs>
                                            <pattern
                                                id="700c93bf-0068-4e32-aafe-ef5b6a647708"
                                                x="0"
                                                y="0"
                                                width=".135"
                                                height=".30"
                                            >
                                                <circle cx="1" cy="1" r=".7" />
                                            </pattern>
                                        </defs>
                                        <rect
                                            fill="url(#700c93bf-0068-4e32-aafe-ef5b6a647708)"
                                            width="52"
                                            height="24"
                                        />
                                    </svg>
                                    <span className="relative text-9xl"></span>
                                </span>{' '}
                                Question & Answer Section
                            </h2>

                        </div>

                    </div>
                </div>
            </div>
            <div className="mr-10">
                <h2 className="text-3xl text-indigo-900 text-center mt-10 font-bold">Question 1: Tell us the differences between uncontrolled and controlled components.</h2>
                <p className="text-2xl ml-10 mb-5">Ans: The difference between uncontrolled and controlled components are as follows:<br />
                    Uncontrolled components are traditional HTML form elements like input, select, and textarea, where the value is controlled by the browser. In an uncontrolled component, the component manages its own state internally. For example, when a user types something in an input field, the value is updated directly in the DOM and the component state is not involved.

                    On the other hand, controlled components are form elements whose values are controlled by the React component. In a controlled component, the components state is the single source of truth for the value of the input. For example, when a user types something in an input field, the state of the component is updated, and the value of the input field is set to the value from the components state.</p>
                <h2 className="text-3xl text-indigo-900 text-center mt-10 font-bold"> Question 2: How to validate React props using PropTypes</h2>
                <p className="text-2xl ml-10 mb-5"> Ans: To validate React props using PropTypes, we can use the prop-types library as follows;<br />
                    First, we need to install the prop-types library by running the following command in our project directory:   npm install prop-types  <br />
                    2. Import PropTypes from the prop-types library in our component file:  import PropTypes from &apos;prop-types&apos;<br />
                    3.  Define the prop types for our component by adding a propTypes object as a static property of our component.
                </p>
                <h2 className="text-3xl text-indigo-900 text-center mt-10 font-bold">Question 3: Tell us the difference between nodejs and express js.</h2>
                <p className="text-2xl ml-10 mb-5">Ans: Difference between nodejs and express js are as follows:<br />

                    Node.js is an open-source, cross-platform, server-side runtime environment that allows developers to build server-side applications using JavaScript. It provides an event-driven, non-blocking I/O model that makes it lightweight and efficient, and it includes a built-in package manager (npm) for installing third-party libraries.<br />

                    Express.js, on the other hand, is a popular open-source web application framework for Node.js. It provides a set of features for building web applications, such as routing, middleware, templates, and much more. Express.js is built on top of Node.js and is designed to be flexible, modular, and easy to use.</p>
                <h2 className="text-3xl text-indigo-900 text-center mt-10 font-bold">Question 4: What is a custom hook, and why will you create a custom hook?</h2>
                <p className="text-2xl ml-10 mb-5">Ans: In React, a custom hook is a JavaScript function that allows you to extract and reuse logic that is commonly used in multiple components. Custom hooks provide a way to reuse code logic without duplicating it across components.

                    You would create a custom hook when you have some functionality that is used in multiple components, but that functionality does not fit well into the lifecycle methods of a class component or a useEffect hook of a functional component. Custom hooks allow you to create reusable functionality that can be shared across multiple components, improving code reusability and maintainability.</p>
            </div>


        </div>
    );
};


export default Blog;