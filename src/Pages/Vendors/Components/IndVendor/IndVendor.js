export default function IndVendor(props) {
    return (
        <div>
            <h2>{props.vendorName}</h2>
            <h3>{props.specialty} | {props.site}</h3>
            <h3>Follow up: {props.followUp}</h3>
        </div>
    )
}