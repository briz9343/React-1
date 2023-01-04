import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './pages/Product';
import About from './pages/About';
import Contact from './pages/Contact';
import Layout from './components/Layout';


const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout> <Home /> </Layout>} />
          <Route path="/Product" element={<Layout>< Product /></Layout>} />
          <Route path='/About' element={<Layout><About /></Layout>} />
          <Route path='/Contact' element={<Layout><Contact /></Layout>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
