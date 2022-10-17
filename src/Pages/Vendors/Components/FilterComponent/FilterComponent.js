import IndVendor from '../IndVendor/IndVendor';
import './FilterComponent.css';

export default function FilterComponent(props) {
    let title = props.title;

    let count = props.vendors.length;

    function createVendors() {
        let vendorList = []
        for (let i = 0; i < props.vendors.length; i++) {
            vendorList.push(<IndVendor 
                vendorName={props.vendors[i].vendorName} 
                specialty={props.vendors[i].specialty} 
                site={props.vendors[i].site} 
                status={props.vendors[i].status} 
                followUp = {props.vendors[i].followUp}
                category = {props.vendors[i].category} 
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