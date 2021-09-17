import './App.css';
import Navbar from "./components/Navbar";
import Routes from "./components/Routes";

function App() {
  return (
    <div className="App bg-green-300 text-indigo-900 max-h-full max-w-screen-xl m-auto">
      <div>
        <Navbar />
      </div>
      <div className="h-full">
      <Routes />
      </div>
    </div>
  );
}

export default App;
