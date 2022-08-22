import logo from "assets/images/logo.svg";
import "style/App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Apple />
                    Learn React
                </a>
            </header>
        </div>
    );
}

const Apple = () => {
    return <div>asdasdasdasd</div>;
};

export default App;
