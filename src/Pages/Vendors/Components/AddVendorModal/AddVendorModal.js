import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './AddVendorModal.css';

export default function AddVendorModal(props) {
    return (
        <div className="new-vendor-modal-container">
        <Modal show={props.show} onHide={props.handleClose} centered>
            <Modal.Header>
                <Modal.Title>Add a New Vendor</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <form>
                    <p>form</p>
                </form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>Close</Button>
                <Button variant="primary" onClick={props.handleClose}>Add Vendor</Button>
            </Modal.Footer>
        </Modal>
        </div>
    )
}