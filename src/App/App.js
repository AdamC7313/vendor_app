import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Vendors from '../Pages/Vendors/Vendors';
import Assignments from '../Pages/Assignments/Assignments';
import ToDos from '../Pages/ToDos/ToDos';

function App() {
  return (
    <div>
       <Router>
      <Navigation />
      <main>
        <Routes>
        <Route path='/Vendors' element={<Vendors />} />
        <Route path='/Assignments' element={<Assignments />} />
        <Route path='/ToDos' element={<ToDos />} />
      </Routes>
      </main>
      </Router>
    </div>
  );
}

export default App;
