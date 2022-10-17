import IndVendor from '../IndVendor/IndVendor';

export default function FilterComponent() {
    let title = 'New Vendor';
    let count = 3;
    let vendors = [
        {vendorName: 'VendorABC', 
        specialty: 'Ophthalmology', 
        site: 'Orlando', 
        followUp: '09/15'}, 
        {vendorName: 'VendorDEF', 
        specialty: 'Radiology', site: 'Orlando', 
        followUp: '09/15'}]

    function createVendors() {
        let vendorList = []
        for (let i = 0; i < vendors.length; i++) {
            vendorList.push(<IndVendor vendorName={vendors[i].vendorName} specialty={vendors[i].specialty} site={vendors[i].site} followUp={vendors[i].followUp} key={i}/>)
    }
    return <div>{vendorList}</div>}

    return (
        <div>
            <h2>{title}</h2>
            <h3>{count}</h3>
            <div>
                {createVendors()}
            </div>
        </div>
    )
}