import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card'
import {AiOutlineFileAdd} from 'react-icons/ai'

function BasicExample() {
  return (
    <>
    {/* <Formik/> */}
   
<Card>
    <Card.Body>

    <Form>
      <Form.Group className="mb-3" controlId="">
        <Form.Label><h3><AiOutlineFileAdd/></h3>New Student </Form.Label>
        <Form.Control size='sm' type="Name" placeholder="Enter Fullname" />
        <Form.Control size='sm' type="Phone" placeholder="Enter Phone" />
        <Form.Control size='sm' type="State" placeholder="Enter state" />
        <Form.Control size='sm' type="Zipcode" placeholder="Enter Zip" />

        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
        <Button variant="primary" size='sm' className='mt-2' type="submit">
        Submit
      </Button>
      </Form.Group>
    </Form>
    </Card.Body>
    </Card>
    </>

  );
}

export default BasicExample;