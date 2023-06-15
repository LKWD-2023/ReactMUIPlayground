import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TablePage from './pages/TablePage';
import Layout from './components/Layout';
import DropDownPage from './pages/DropDownPage';
import DialogPage from './pages/DialogPage';

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/table-demo" element={<TablePage />} />
                <Route path="/autocomplete" element={<DropDownPage />} />
                <Route path='/dialog' element={<DialogPage />} />
            </Routes>
        </Layout>
    );
}

export default App;