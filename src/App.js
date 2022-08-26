import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
    <Navbar/>
    <Header/>
    <Main/>
    <Footer/>
    </div>
  );
}

export default App;
