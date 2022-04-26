
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Home/Blogs/Blogs';
import Donation from './Pages/Home/Donation/Donation';
import Events from './Pages/Home/Events/Events';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/donation' element={<Donation></Donation>}></Route>
        <Route path='/events' element={<Events></Events>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      </Routes>
    </div>
  );
}

export default App;
