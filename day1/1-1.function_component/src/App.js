import "./App.css";
import Logo from "./components/Logo";
import Paragraph from "./components/Paragraph";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo size={100} />
        <Paragraph>
          Edit <code>src/App.js</code> and save to reload.
        </Paragraph>
        <Paragraph size={14} color="blue">
          Edit <code>src/App.js</code> and save to reload.
        </Paragraph>
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
