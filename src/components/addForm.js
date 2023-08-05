import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card'
import {AiOutlineFileAdd} from 'react-icons/ai'

function AddForm(props) {
console.log(props.newFullName)
const setName = props.setNewFullName
const {setNewFullName, setNewPhoneNumber, setNewZipcode, setNewState, createStudent, darkMode}= props
  return (
    <>
    {/* <Formik/> */}
   <div className='form'>
<Card style={{ width: '100rem', color: darkMode? 'white':'rgba(64, 43, 43, 0.55)' ,backgroundColor: darkMode? 'rgba(64, 43, 43, 0.55)': 'white'}} className='text-centered'>
    <Card.Body>

    <Form onSubmit={(event)=>createStudent(event)}>
      <Form.Group className="mb-3"  controlId="">
        <Form.Label><h3><AiOutlineFileAdd/></h3>New Student </Form.Label> 
        <Form.Control disabled style={{color:'white', backgroundColor: darkMode? 'rgba(115, 104, 104, 0.55)': 'white'}}size='sm' type="Name" placeholder="Enter Fullname" onChange={(e)=>setNewFullName(e.target.value)}/>
        <Form.Control disabled style={{color:'white', backgroundColor: darkMode? 'rgba(115, 104, 104, 0.55)': 'white'}}size='sm' type="Phone" placeholder="Enter Phone" onChange={(e)=>setNewPhoneNumber(e.target.value)}/>
        <Form.Control disabled style={{color:'white', backgroundColor: darkMode? 'rgba(115, 104, 104, 0.55)': 'white'}}size='sm' type="State" placeholder="Enter state" onChange={(e)=>setNewState(e.target.value)}/>
        <Form.Control disabled style={{color:'white', backgroundColor: darkMode? 'rgba(115, 104, 104, 0.55)': 'white'}}size='sm' type="Zipcode" placeholder="Enter Zip"onChange={(e)=>setNewZipcode(e.target.value)} />

        <Form.Text className="text-muted">
          This Form is not Active Yet
        </Form.Text> {' '}
        <Button variant="primary" size='sm' className='mt-2' disabled type="submit">
        Submit
      </Button>
      </Form.Group>
    </Form>
    </Card.Body>
    </Card>
    </div>
    </>

  );
}

export default AddForm;