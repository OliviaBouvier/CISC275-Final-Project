import { Link } from "react-router-dom";

export function Navbar(){
    return <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/basicQuestions">Basic Questions</Link>
            </li>
            <li>
              <Link to="/detailedQuestions">Detailed Questions</Link>
            </li>
          </ul>
        </nav>
}