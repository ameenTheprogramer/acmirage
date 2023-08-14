import './App.css';
import Container from './compos/container/Container';
import Footer from './compos/footer/Footer';
import Header from './compos/header/Header';
import Trailar from './compos/trailar/Trailar';
import VH2 from './compos/vh2/VH2';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Container />


      </div>
      <div className="container2">
        <div className="border"></div>

        <div className="border2"> </div>
        <Trailar />

        <VH2 />

      </div>
      <Footer />






    </div>
  );
}

export default App;
