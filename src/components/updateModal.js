import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import UpdateForm from './updateform';
import {AiFillEdit} from 'react-icons/ai'

function UpdateModal(props) {
    
    const setUpdateZip= props.setUpdateZip
    const updateStudent = props.updateStudent
    const setUpdateState= props.setUpdateState 
    const setUpdateName = props.setUpdateName
    const setUpdatePhone =props.setUpdatePhone
    const student= props.student
  
  const nombre = props.setUpdateName
    const [show, setShow] = useState(false); 

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className='mt-2' variant="secondary" onClick={handleShow} size="sm">
        <AiFillEdit/> 
      </Button>

          <Modal
              show={show}
              onHide={handleClose}
              backdrop={true}
              keyboard={true}
          >
              <Modal.Header closeButton>
                  <Modal.Title> #{student.id}{', '} {student.fullName} {'from'} <i> {student.state}</i></Modal.Title>

              </Modal.Header>
              <Modal.Body>
                  <UpdateForm
                      student={student} updateStudent={updateStudent} setUpdateZip={setUpdateZip} setUpdateName={setUpdateName}
                      setUpdatePhone={setUpdatePhone} setUpdateState={setUpdateState} />
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

export default UpdateModal;