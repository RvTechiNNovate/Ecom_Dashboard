import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import  Header  from './Component/Header'
import Protected from './Component/Protected'
import  Login  from './Component/LoginPage'
import  AddProduct  from './Component/AddProduct'
import  Register  from './Component/Register'
import  UpdateProduct  from './Component/UpdateProduct'
import {BrowserRouter,Route,Routes} from 'react-router-dom'


function App() {
  return (
    
    <div className="App">
      
      <BrowserRouter>
  
      {/* <Header /> */}
      <Routes>
        
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/AddProduct" element={<AddProduct/>} />
        <Route path="/UpdateProduct" element={<UpdateProduct />} />
        
      </Routes>
      </BrowserRouter>
        
    </div>
    
  );
}

export default App;
