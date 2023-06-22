import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import TopSeries from './components/TopSeries';
import About from './components/About';
import SeriesDetails from './components/SeriesDetails';
import LogIn from './components/LogIn';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

function App() {
  let dev: string = "SevaKoval";
  let year : number = 2023;
  return (
    <div className="App">
      <Router>
        
        <Routes>
      <Route path='/' element={<LogIn/>} />
      <Route path='/home' element={<Home />} />
      <Route path='/top-series' element={<TopSeries/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/top-series/:rank' element={<SeriesDetails/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
      <Footer devName= {dev}  devYear={year}/>
      </Router>
    </div>
  );
}

export default App;
