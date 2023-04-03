import Nav from "./components/Nav";
import About from './components/About';
import Footer from './components/Footer';
import Product from './components/Product';



function App() {
  return (
    <div>
      <div className='app'>
        <div className="app-home">
          <Nav />
        </div>
        <div className='home-content'>
          <h2 style={{color: 'red',fontSize:'30px'}}>Best Offer</h2>
          <h1 style={{marginTop:'0'}}>New Arrivals on Sale</h1>
        </div>
      </div>
      <Product />
      <About showButton={true} />
      <Footer />
    </div>
  );
}

export default App;
