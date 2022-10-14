import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
    return (
        <div className='container'>
        <NavLink to="/Vendors">Vendors</NavLink>
        <NavLink to="/Assignments">Assignments</NavLink>
        <NavLink to="/ToDos">To-Dos</NavLink>
        </div>
    )
}