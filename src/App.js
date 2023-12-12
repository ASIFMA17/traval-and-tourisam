import './app.css'
import Footer from './componets/Footer/Footer';
import Home from './componets/Home/Home';
import Main from './componets/Main/Main';
import Navbar from './componets/Navbar/Navbar';

function App() {
  return (
    <div >
      <Navbar/>
      <Home/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
