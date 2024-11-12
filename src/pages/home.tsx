import './home.css';
import {BasicButton} from "../components/basicButton";
import {DetailedButton} from "../components/detailedButton";


export function Home(){
  return (
  <div className="home-container">
    <header className="App-header">
      <h1 className="home-top-left-title">Career Helpi</h1>

      <div className="main-content">
        <div className="quiz-sections">
          <div className="quiz-section">
            <div className = "quiz-description">
              <h2 className="description-header-text">Option 1: Basic Questions</h2>
              <p className="description-text">
                This simplified quiz provides a quick overview to help guide your career interests.
                It includes basic questions to help you get started.
              </p>
            </div>
              <BasicButton />
          </div>

          <div className="quiz-section">
            <div className = "quiz-description">
              <h2 className="description-header-text">Option 2: Detailed Questions</h2>
              <p className="description-text">
                This in-depth quiz offers comprehensive insights based on a range of questions to
                better understand your career preferences. Perfect for those wanting a deeper analysis.
              </p>
            </div>
            <DetailedButton />
          </div>
        </div>

        <div className="intro-box">
          <h2>About Career Helpi</h2>
          <p>
            Welcome to Career Helpi! Our platform is dedicated to helping you discover your ideal career path.
            Start with a quick quiz or delve into a detailed analysis to understand your career preferences
            and opportunities. 
          </p>
        </div>
      </div>
    </header>
      
    <footer className="home-footer">
      <p>
        Tarun Baskaran | Connor Griffith | Chris Yanko | Olivia Bouvier
      </p>
    </footer>
  </div>
  )
}