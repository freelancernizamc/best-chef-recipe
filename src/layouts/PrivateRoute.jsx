// import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../src/components/providers/AuthProvider';
import { Navigate, useLocation } from "react-router";


const PrivateRoute = () => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    console.log('user in private route', user);

    return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;


