import logo from './logo.svg';
import './styles/App.css';
import Home from './Home.js';
import Navbar from './Navbar.js';
import Footer from './Footer.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}


export default App;
