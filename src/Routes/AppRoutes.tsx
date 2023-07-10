import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Characters from '../pages/Characters';
import Detail from '../pages/Detail';
import Home from '../pages/Home';

const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/characters" element={<Characters />} />
                <Route path="/detail/:id" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
