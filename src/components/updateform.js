import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function UpdateForm(props) {
    // console.log(studentId)
    const setUpdateZip= props.setUpdateZip
    const updateStudent = props.updateStudent
    const setUpdateState= props.setUpdateState
    const setUpdateName = props.setUpdateName
    const setUpdatePhone =props.setUpdatePhone
    const student= props.student
  return (
<>

    <Form className='update-form' >
      <Form.Group className="mb-3" onSubmit={(e)=>updateStudent(e, student.id)} controlId='form1' >
        <Form.Label>Update {student.fullName}</Form.Label>
        <Form.Control size='sm' onChange={(e)=>setUpdateName(e.target.value)} type="text"  />
        <Form.Control size='sm' onChange={(e)=>setUpdatePhone(e.target.value)} type="Phone" placeholder="Enter Phone" />
        <Form.Control size='sm' onChange={(e)=>setUpdateState(e.target.value)} type="" placeholder="Enter state" />
        <Form.Control size='sm' onChange={(e)=>setUpdateZip(e.target.value)} type="Zipcode" placeholder="Enter Zip" />

        <Form.Text className="text-muted">
        </Form.Text>
        <Button variant="primary" size='sm' onClick={(e)=>updateStudent(e, student.id)} className='mt-2' type="submit">
        Submit
      </Button>
      </Form.Group>
    </Form>
    </>
  );
}

export default UpdateForm;