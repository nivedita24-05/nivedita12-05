import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
//import ProductCard from './productCard';
import Card1 from './card1';
import { Card2,Card3 } from './card1';

function Home() {
  return <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}}>
    <h2>🏠 Home Page</h2>;
<Card1/>
<Card2/>
<Card3/>
</div>
}

function About() {
  return <h2>¡About Us<br></br>we will offer 30% discount if you apply the promo code provided our company employees🙍‍♂️,extra discount to the new couples like Mr and Mrs Kshitij S P and our beloved Shree Ram <br></br>And the offer closes soon. <br></br>Hurry up!</h2>;
}

function Contact() {
  return <h2>☎Contact Us<br></br>for more details contact our team members Veeranna.M-7996322907,Vikram.J-7795002873.
</h2>;
}

function Routerex() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default Routerex;