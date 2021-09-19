import './App.css';
import Navbar from "./components/Navbar";
import Routes from "./components/Routes";


function App() {
  return (

    <div className="App  bg-gray-900 text-gray-100 flex-col font-nerko">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Nerko+One&display=swap" rel="stylesheet" />
      <div className="border-b-8 border-gray-100">
        <Navbar />
      </div>
      <div className="h-screen">
      <Routes />
      </div>
    </div>
  );
}

export default App;
