import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/Home';
import AddCar from './Pages/AddCar';
const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/addcar' element={<AddCar />} />
            </Routes>
        </Layout>
    );
}

export default App;