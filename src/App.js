import './App.css';
import { Navbar } from './Components/Navbar';
import MainRoute from './Routes/MainRoute';

function App() {
  return (
    <div className="App">
     
      <Navbar/>
      <h1>App Page</h1>
      <MainRoute />
    </div>
  );
}

export default App;
