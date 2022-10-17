import './IndVendor.css';
import { BsArrowsAngleExpand as Expand} from 'react-icons/bs'

export default function IndVendor(props) {
    return (
        <div className='ind-vendor-container'>
            <h2 className='vendor-name'>{props.vendorName} | <span className='follow-up-text'>FU: {props.followUp}</span> <span className='expand-icon'><Expand size={14} /></span></h2>
            <h3 className='vendor-info'>{props.specialty} | {props.site}</h3>
            <h3 className='vendor-status'>Status: {props.status}</h3>
        </div>
    )
}