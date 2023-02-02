
import './App.css';
import Callout from './Components/Callout';
import Topbar from './Components/Topbar';
import Main from './Components/Main';
import Card from './Components/Card';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <Topbar/>
      <Callout/>
      <hr></hr>
      <Main/>
      <hr></hr>
    <h3 className="row column">Our Recent Work</h3>
    
      <Card/>
      {/* <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/> */}
      <hr></hr>
      <Footer/>
    </div>
  );
}

export default App;
