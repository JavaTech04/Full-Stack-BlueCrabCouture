import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './layout/Navbar';
import Home from './page/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddUser from './user/AddUser';
import EditUser from './user/EditUser';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/add' element={<AddUser />}></Route>
          <Route path='/edit-user/:id' element={<EditUser />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
