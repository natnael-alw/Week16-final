import React from "react";
import { useEffect, useState } from "react";
import { Alert, Button, Table } from 'react-bootstrap'
import UpdateModal from "./components/updateModal";
import { TiUserDelete } from 'react-icons/ti'
import { AiOutlineFileAdd } from 'react-icons/ai'
import Modal from 'react-bootstrap/Modal';
import Details from "./components/details";
import { FcViewDetails } from 'react-icons/fc'
import Search from "./components/search";
import AddMODAL from "./components/adduserModal";
import Adduser from './components/addForm'




export default function StudentData({ API_URL, darkMode }) {

  const [student, setStudent] = useState(null)
  const [find, setFind] = useState('')
  const [loading, setLoading] = useState(false)
  const [studentDetail, setStudentDetail] = useState('')
  const [error, setError] = useState(false)
  const [showAdduser, setShowAddUser] = useState(false)

  useEffect(() => {

    const fetching = async () => {
      try {
        setLoading(true)
        const get = await fetch(API_URL)
        const resp = await get.json()
        setFind(resp)
        setStudent(resp)

        setLoading(false)

      } catch (error) { return setError(true) }
    }

    fetching()
  }, []
  )
  const detail = (id) => {
    {
      find && find.map((student) =>
        student.id === id &&
        setStudentDetail(student),
      )
    }

  }

  const deleteStudent = async (id) => {
    await fetch(`${API_URL}/${id}`, {
      method: 'DELETE'
    });
    const get = await fetch(API_URL)
    const resp = await get.json()
    setStudent(resp)
    setFind(resp)

  }
  const [newFullName, setNewFullName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')
  const [newState, setNewState] = useState('')
  const [newZipcode, setNewZipcode] = useState('')

  const createStudent = async () => {
    let newStudentObject = {
      fullName: newFullName,
      state: newState,
      phoneNumber: newPhoneNumber,
      zipcode: newZipcode
    }

    await fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify(newStudentObject),
      headers: { 'content-Type': 'application/json' }
    })
    const get = await fetch(API_URL)
    const resp = await get.json()
    setStudent(resp)
    setFind(resp)
  }
  const handleCreate = (event) => {
    createStudent()
    event.preventDefault()
  }
  //add modal items
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //details modal items
  const [showDetailsModal, setShowDetailsModal] = useState(false)
  const handleShowModal = () => setShowDetailsModal(true)
  const handleCloseDetail = () => setShowDetailsModal(false);


  //PUT METHOD
  const [updateName, setUpdateName] = useState('')
  const [updatePhone, setUpdatePhone] = useState('')
  const [updateState, setUpdateState] = useState('')
  const [updateZip, setUpdateZip] = useState('')

  const updateStudent = async (e, student) => {
    const updateObject = {
      ...student,
      fullName: updateName,
      phoneNumber: updatePhone,
      state: updateState,
      zipcode: updateZip
    }
    e.preventDefault()
    await fetch(`${API_URL}/${student.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        ...student,
        fullName: updateName,
        phoneNumber: updatePhone,
        state: updateState,
        zipcode: updateZip
      }),
      headers: { 'content-Type': 'application/json' }
    });
    const get = await fetch(API_URL)
    const resp = await get.json()
    setStudent(resp)
    setFind(resp)
  }
  return (
    <>

      <div id="block">
        {showAdduser &&
          < Adduser
            newFullName={newFullName}
            setNewFullName={(e) => setNewFullName(e)}
            setNewPhoneNumber={(e) => setNewPhoneNumber(e)}
            setNewState={(e) => setNewState(e)}
            setNewZipcode={(e) => setNewZipcode(e)}
            createStudent={handleCreate}
          />
        }
        <Search
          // student={student}
          setUpdateName={(e) => setUpdateName(e)}
          setUpdatePhone={(e) => setUpdatePhone(e)}
          setUpdateState={(e) => setUpdateState(e)}
          setUpdateZip={(e) => setUpdateZip(e)}
          updateStudent={(e) => updateStudent(e, student)}
          find={find} setFind={setFind}
          student={student}
          setStudent={() => setStudent()}
          deleteStudent={deleteStudent}
          handleShowModal={handleShowModal}
          detail={detail} handleShow={handleShow} />
        <Button variant="secondary" onClick={handleShow} className='mt-2 mb-2' size='sm'>
          <h3><AiOutlineFileAdd /></h3></Button>
        {loading && <h2 style={{ color: 'black', backgroundColor: darkMode ? 'rgba(115, 104, 104, 0.55)' : 'white' }}>loading ...</h2>}
        {error && <Alert className="Alert alert-danger">failed to fetch</Alert >}
      </div>
      {find && <Table className="table" striped bordered hover variant={darkMode ? 'dark' : 'light'} id="table" size="sm">
        <thead>
          <tr>
            <th > #</th>
            <th>Student Fullname</th>
            <th>Phone</th>
            <th>State</th>
            <th>Zipcode</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {find && find.map((student) =>
            <tr key={student.id}>
              <td>{student.id}</td>
              <td onTouchMove={PointerEvent} onClick={() => detail(student.id)}>{student.fullName} <span onClick={() => handleShowModal()} onTouchMove={PointerEvent}><FcViewDetails />
              </span></td>

              <td>{student.phoneNumber}</td>

              <td>{student.state}</td>
              <td>{student.zipcode}</td>
              <td><UpdateModal
                student={student}
                API_URL={API_URL}
                setUpdateName={(e) => setUpdateName(e)}
                setUpdatePhone={(e) => setUpdatePhone(e)}
                setUpdateState={(e) => setUpdateState(e)}
                setUpdateZip={(e) => setUpdateZip(e)}
                updateStudent={(e) => updateStudent(e, student)} />
              </td>
              <td> <button onClick={() => deleteStudent(student.id)} className="btn btn-danger mt-2 btn-sm"><TiUserDelete /></button></td>
            </tr>
          )}

        </tbody>
      </Table>}

      <AddMODAL
        handleClose={handleClose}
        handleShow={handleShow}
        show={show}


        setNewFullName={(e) => setNewFullName(e)}
        setNewPhone={(e) => setNewPhoneNumber(e)}
        setNewState={(e) => setNewState(e)}
        setNewZipcode={(e) => setNewZipcode(e)}
        createStudent={() => createStudent()} />
      
      <Modal
        show={showDetailsModal}
        onHide={handleClose}
        backdrop={true}
        keyboard={true}

      >
        <Modal.Header  >
          <Modal.Title> {studentDetail.fullName} </Modal.Title>

        </Modal.Header>
        <Modal.Body>

          <Details studentDetail={studentDetail} />

        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" size='sm' onClick={handleCloseDetail}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )

}
