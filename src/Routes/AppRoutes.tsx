import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import DefaultLayout from '../config/layout/DefaultLayout';
import Character from '../pages/Character';
import Home from '../pages/Home';

// eslint-disable-next-line react/function-component-definition
const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultLayout component={Home} />} />
                <Route path="/person/:id" element={<DefaultLayout component={Character} />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
