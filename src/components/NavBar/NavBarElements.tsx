import { Link } from "react-router-dom";
import './NavBarElements.css';
import { useState } from "react";

export function NavBarElements(){
  const [homeStyle, setHomeStyle] = useState<React.CSSProperties>({color: "white", textShadow: "0 0 1em white, 0 0 0.2em white"});
  const [basicStyle, setBasicStyle] = useState<React.CSSProperties>();
  const [detailedStyle, setDetailedStyle] = useState<React.CSSProperties>();
  const [aboutStyle, setAboutStyle] = useState<React.CSSProperties>();

  function clickHome(){
    setHomeStyle({color: "white", textShadow: "0 0 1em white, 0 0 0.2em white"});
    setBasicStyle({});
    setDetailedStyle({});
    setAboutStyle({});
    
  }

  function clickBasic(){
    setHomeStyle({});
    setBasicStyle({color: "white", textShadow: "0 0 1em white, 0 0 0.2em white"});
    setDetailedStyle({});
    setAboutStyle({});
  }

  function clickDetailed(){
    setHomeStyle({});
    setBasicStyle({});
    setDetailedStyle({color: "white", textShadow: "0 0 1em white, 0 0 0.2em white"});
    setAboutStyle({});
  }

  function clickAbout(){
    setHomeStyle({});
    setBasicStyle({});
    setDetailedStyle({});
    setAboutStyle({color: "white", textShadow: "0 0 1em white, 0 0 0.2em white"});
  }

 return (
  <nav className="navbar navbar-expand-lg navbar-custom">
    <pre><span><Link to="/" className='nav-link' onClick = {clickHome} style={homeStyle}>Home</Link></span></pre>
    <pre><span><Link to="/basicQuestions" className='nav-link' onClick = {clickBasic} style={basicStyle}>Basic Questions</Link></span></pre>
    <pre><span><Link to="/detailedQuestions" className='nav-link' onClick = {clickDetailed} style={detailedStyle}>Detailed Questions</Link></span></pre>
    <pre><span><Link to="/about" className="nav-link" onClick = {clickAbout} style={aboutStyle}>About</Link></span></pre>
  </nav>
 )
}