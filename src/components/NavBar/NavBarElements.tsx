import { Link } from "react-router-dom";
import './NavBarElements.css';

export function NavBarElements(){
 return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <pre><span><Link to="/starter-helpi/" className='nav-link'>Home</Link></span></pre>
    <pre><span><Link to="/basicQuestions" className='nav-link'>Basic Questions</Link></span></pre>
    <pre><span><Link to="/detailedQuestions" className='nav-link'>Detailed Questions</Link></span></pre>
    <pre><span><Link to="/about" className="nav-link">About</Link></span></pre>
  </nav>
 )
}