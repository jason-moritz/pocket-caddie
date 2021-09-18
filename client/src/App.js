import './App.css';
import Navbar from "./components/Navbar";
import Routes from "./components/Routes";

function App() {
  return (
    <div className="App bg-gray-900 text-gray-100 max-h-full max-w-screen-xl m-auto">
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
