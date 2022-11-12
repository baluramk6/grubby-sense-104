import './App.css';
import { Footer } from './Components/Footer/Footer';
import { Navbar } from './Components/Navbar';
import MainRoute from './Routes/MainRoute';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoute />
      <Footer/>
    </div>
  );
}

export default App;
