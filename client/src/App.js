import './App.css';
import Navbar from "./components/Navbar";
import Routes from "./components/Routes";


function App() {
  return (

    <div className="App flex-col  font-kanit h-screen min-h-screen">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap" rel="stylesheet" />
      <div className="border-b-8 border-green-lt rounded-md">
        <Navbar />
      </div>
      <div className="mt-5">
        <Routes />
      </div>
    </div>
  );
}

export default App;
