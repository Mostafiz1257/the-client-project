import React from 'react';
import NavegationBar from '../../pages/Shared/NavegationBar/NavegationBar';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <NavegationBar></NavegationBar>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;