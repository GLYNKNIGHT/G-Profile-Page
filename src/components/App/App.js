import Header from '../Header/Header'
import './App.css';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Nav from '../Nav/Nav';
import Connect from '../Connect/Connect';
import Experience from '../Experience/Experience';
import Footer from '../Footer/Footer';

function App() {


  return (
    <div className="App"  >
     <Nav/>
      <header className="App-header">
                  <Header />
          </header>
      
      <div className='main'>
            <About/>
            <Projects/> 
            <Experience/>
            <Connect/>
        </div>
      <Footer/>
    </div>
  );
}

export default App;
