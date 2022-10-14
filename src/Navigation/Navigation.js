import { BrowserRouter as Router, NavLink } from 'react-router-dom';

export default function Navigation() {
    return (
        <div>
        <NavLink to="/Vendors">Vendors</NavLink>
        <NavLink to="/Assignments">Assignments</NavLink>
        <NavLink to="/ToDos">To-Dos</NavLink>
        </div>
    )
}