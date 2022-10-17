import './Vendors.css';
import AddNew from './Components/AddNew/AddNew';
import FilterComponent from './Components/FilterComponent/FilterComponent';

export default function Vendors() {
    return (
    <div className='vendors-container'>
        <AddNew />
        <FilterComponent />
    </div>
    )
}