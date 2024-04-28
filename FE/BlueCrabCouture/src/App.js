import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './layout/Navbar';
import Home from './page/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddUser from './user/AddUser';
import UploadPhoto from './document/upload_photo/UploadPhoto'
import EditUser from './user/EditUser';
import ViewUser from './user/ViewUser';
import ViewProduct from './product/ViewProduct';
import AddProduct from './product/AddProduct';
import HookForm from './document/hook_doc/HookForm';
import ContextAPI from './document/context_doc/ContextAPI';
import ContextAPI_Demo from './document/context_doc/ContextAPI_Demo';
import { FullNameProvider } from './context/FullNameContext';



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
            <Route path='/document/hook-form' element={<HookForm />}></Route>
            <Route path='/document/context' element={<FullNameProvider> <ContextAPI /> </FullNameProvider>}></Route> {/* Add Provider in the center component */}
            <Route path='/document/context-demo' element={<FullNameProvider><ContextAPI_Demo /> </FullNameProvider>}></Route> {/* Add Provider in the center component */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
