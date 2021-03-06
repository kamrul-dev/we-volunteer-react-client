
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Home/Blogs/Blogs';
import Donation from './Pages/Home/Donation/Donation';
import Events from './Pages/Home/Events/Events';
import Home from './Pages/Home/Home/Home';
import VolunteerRegister from './Pages/Home/VolunteerRegister/VolunteerRegister';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/donation' element={<Donation></Donation>}></Route>
        <Route path='/events' element={<Events></Events>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/volunteerregister/:actId' element={<VolunteerRegister></VolunteerRegister>}></Route>
      </Routes>
    <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;