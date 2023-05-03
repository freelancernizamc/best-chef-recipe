// import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../src/components/providers/AuthProvider';
import { Navigate } from "react-router";


const PrivateRoute = () => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div>Loading....</div>
    }
    if (user) {
        return;
    }
    // const location = useLocation();


    return <Navigate to="/login" replace></Navigate>;
};

export default PrivateRoute;


