import IndVendor from '../IndVendor/IndVendor';
import './FilterComponent.css';

export default function FilterComponent(props) {
    let title = props.title;
    let vendors = [
        {vendorName: 'VendorABC', 
        specialty: 'Ophthalmology', 
        site: 'Orlando', 
        followUp: '09/15',
        status: 'Message left for person of contact LIsa Wiley',
        category: ''}, 
        {vendorName: 'VendorDEF', 
        specialty: 'Radiology', site: 'Orlando', 
        followUp: '09/15'},
        {vendorName: 'VendorDEF', 
        specialty: 'Radiology', site: 'Orlando', 
        followUp: '09/15'}, {vendorName: 'VendorDEF', 
        specialty: 'Radiology', site: 'Orlando', 
        followUp: '09/15'}]
    let count = vendors.length;

    function createVendors() {
        let vendorList = []
        for (let i = 0; i < vendors.length; i++) {
            vendorList.push(<IndVendor 
                vendorName={vendors[i].vendorName} 
                specialty={vendors[i].specialty} 
                site={vendors[i].site} 
                status={vendors[i].status} 
                followUp = {vendors[i].followUp} 
                key={i}/>)
    }
    return <div>{vendorList}</div>}

    return (
        <div className='filter-component-container'>
            <h2 className='title'>{title}</h2>
            <h3 className='count'>{count}</h3>
            <div className='indvend-container'>
                {createVendors()}
            </div>
        </div>
    )
}