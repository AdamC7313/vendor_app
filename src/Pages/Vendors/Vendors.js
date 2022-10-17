import './Vendors.css';
import AddNew from './Components/AddNew/AddNew';
import FilterComponent from './Components/FilterComponent/FilterComponent';

export default function Vendors() {
    return (
    <div className='vendors-container'>
        <div className='add-new-container'>
        <AddNew />
        </div>
        <div className='new-vendor-container filter-component'>
        <FilterComponent title='New Vendor' />
        </div>
        <div className='pursuing-container filter-component'>
        <FilterComponent title='Pusuing Lead' />
        </div>
        <div className='docs-sent-container filter-component'>
        <FilterComponent title='Docs Sent' />
        </div>
        <div className='fully-executed-container filter-component'>
        <FilterComponent title='Fully Executed' />
        </div>
    </div>
    )
}