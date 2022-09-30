
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Home/Header/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home/Home/Home';
import Bannar from './Home/Bannar/Bannar';



function App() {
  return (
    <div>
      <Header></Header>
      <Bannar></Bannar>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
    
      {/* <Route path='/breakfast' element={<Breakfast></Breakfast>}></Route>
      
      <Route path='/lunch' element={<Lunch></Lunch>}></Route>
      <Route path='/dinnar' element={<Dinner></Dinner>}></Route> */}
     </Routes>
    </div>
  );
}

export default App;
