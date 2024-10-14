import logo from '../logo.svg';

export function Home(){
  return (<div><h1>Home Page</h1>
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          
          Tarun Baskaran
          Connor Griffith
          Chris
          Olivia Bouvier
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
      </div>
  )
}