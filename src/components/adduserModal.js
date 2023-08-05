import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Formik from './formik';


function AddMODAL({ API_URL,handleClose, show, handleShow, createStudent, setNewFullName, setNewPhone, setNewState, setNewZipcode}) {


  return (
    <>
      <Button className='mt-2' variant="secondary" onClick={handleShow} size="sm">
        Add User
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Enter new Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Formik setNewFullName={setNewFullName}
        createStudent={()=>createStudent()}
        setNewPhone={setNewPhone}
        setNewState={setNewState}
        setNewZipcode={setNewZipcode}
        API_URL={API_URL}
        />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" size='sm' onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary">Understood</Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMODAL;