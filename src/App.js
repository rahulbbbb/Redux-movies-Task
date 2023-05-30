import styles from './App.module.css';
import Movies from './component/Movies';
import Favourites from './component/Favourites';
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';


function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Movies/>}/>
        <Route path='/Favourites' element={<Favourites/>}/>
      </Routes>
    </div>
  );
}

export default App;