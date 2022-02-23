import logo from "./logo.svg";
import "./App.css";

const title = "Let's learn React together!";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {title}
        <p>I just edited this content !+2</p>
        <p>I edited this content too !!+2</p>
        <p>I edited this content too. +2!!</p>
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
  );
}

export default App;
