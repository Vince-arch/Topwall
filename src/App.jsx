import React from "react"
import { Home } from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"
import ProductDetail from "./components/ProductDetail"
import Contact from "./pages/Contact"
import Layout from "./components/Layout"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="products" element={<Layout><Products /></Layout>} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="contact" element={<Layout><Contact /></Layout>} />
      </Routes>
    </Router>


  )
}

export default App
