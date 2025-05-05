import React from "react"
import { Home } from "./pages/Home"
//import about page
//import contact page
import Layout from "./components/Layout"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  

  return (
   <Router>
    <Routes>
      <Route path="/" element={<Layout><Home/></Layout>}/>
    </Routes>
   </Router>
   
   
  )
}

export default App
