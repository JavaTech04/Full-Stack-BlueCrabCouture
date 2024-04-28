import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './layout/Navbar';
import Home from './page/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddUser from './user/AddUser';
import EditUser from './user/EditUser';
import ViewUser from './user/ViewUser';
import UploadPhoto from './upload_photo/UploadPhoto';
import ViewProduct from './product/ViewProduct';
import AddProduct from './product/AddProduct';



function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/upload' element={<UploadPhoto />}></Route>
            <Route path='/user' element={<ViewUser />}></Route>
            <Route path='/user/create' element={<AddUser />}></Route>
            <Route path='/user/edit/:id' element={<EditUser />}></Route>
            <Route path='/product' element={<ViewProduct />}></Route>
            <Route path='/product/create' element={<AddProduct />}></Route>
            <Route path='/product/edit:id' element={<ViewProduct />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
