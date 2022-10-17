import './Vendors.css';
import AddNew from './Components/AddNew/AddNew';
import FilterComponent from './Components/FilterComponent/FilterComponent';
import vendors from './Components/FilterComponent/vendors';

export default function Vendors() {
    let newVendorList = vendors.filter(vendor => vendor.category == 'New Vendor')
    let pursuingList = vendors.filter(vendor => vendor.category == 'Pursuing')
    let docsSentList = vendors.filter(vendor => vendor.category == 'Docs Sent')
    let fullyExecutedList = vendors.filter(vendor => vendor.category == 'Fully Executed')
    
    return (
    <div className='vendors-container'>
        <div className='add-new-container'>
        <AddNew />
        </div>
        <div className='new-vendor-container filter-component'>
        <FilterComponent title='New Vendor' vendors={newVendorList} />
        </div>
        <div className='pursuing-container filter-component'>
        <FilterComponent title='Pusuing Lead' vendors={pursuingList} />
        </div>
        <div className='docs-sent-container filter-component'>
        <FilterComponent title='Docs Sent' vendors={docsSentList} />
        </div>
        <div className='fully-executed-container filter-component'>
        <FilterComponent title='Fully Executed' vendors={fullyExecutedList} />
        </div>
    </div>
    )
}