import  { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Index'
import Coin from './pages/Coin_details'
import About from './pages/About'
import './App.css'

function App() {
  
  return (
   <div>
<Router>

<Navbar/>

<Routes>

<Route  exact path='/' element={<Home/>}/>
<Route  exact path='/Coin/:id' element={<Coin/>}/>
<Route  exact path='/About' element={<About/>}/>
</Routes>



</Router>
   </div>

  );
}

export default App;
