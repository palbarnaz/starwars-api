import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import DefaultLayout from '../config/layout/DefaultLayout';
import Home from '../pages/Home';
import Person from '../pages/Person';

// eslint-disable-next-line react/function-component-definition
const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultLayout component={Home} />} />
                <Route path="/person/:id" element={<DefaultLayout component={Person} />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
