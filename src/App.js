import './App.css';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import playPage from './Components/playPage';
import bookPage from './Components/bookPage';
import trainerPage from './Components/trainerPage';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">

<Header/>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/play' Component={playPage}/>
        <Route path='/book' Component={bookPage}/>
        <Route path='/trainer' Component={trainerPage}/>
      </Routes>
    </div>
  );
}

export default App;
