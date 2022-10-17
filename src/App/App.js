import './App.css';
import AddVendorModal from '../Pages/Vendors/Components/AddVendorModal/AddVendorModal';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Vendors from '../Pages/Vendors/Vendors';
import Assignments from '../Pages/Assignments/Assignments';
import ToDos from '../Pages/ToDos/ToDos';

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='full-container'>
       <Router>
      <Navigation />
      <main>
        <Routes>
        <Route path='/Vendors' element={<Vendors handleShow={handleShow}/>} />
        <Route path='/Assignments' element={<Assignments />} />
        <Route path='/ToDos' element={<ToDos />} />
      </Routes>
      <AddVendorModal show={show} handleClose={handleClose} />
      </main>
      </Router>
    </div>
  );
}

export default App;
