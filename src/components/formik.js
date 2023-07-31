import React from 'react';
import { useFormik, useFormikContext , Formik} from 'formik';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import SubmitFormik from './submitFormik';



const Formik2 = (props) => {
  // Note that we have to initialize ALL of fields with values. These
  // could come from props, but since we don’t want to prefill this form,
  // we just use an empty string. If we don’t do this, React will yell
  // at us.
  const newname= props.setNewFullName 
  const newphone= props.setNewPhone
  const newstate= props.setNewState
  const newzip = props.setNewZipcode
  const create = props.createStudent 
  const dirty= useFormikContext()

  const formik = useFormik({
    initialValues: {
          newname,
          newphone,
          newstate,
          newzip
        },
        
        onSubmit: ()=>create(), 
        // formik.resetForm()
  });
//   formik.resetForm({
//     values:{
//         newname:"", newphone:"", newstate:"", newzip:""
//     }
//   })
  return (
    <div>
        <Formik>
    <Form className='form-group' onSubmit={formik.handleSubmit}>
        <Row>
<Col>
      <label htmlFor="newname">Fullname</label>
      <input
        id="newname"
        name="newname"
        type="text"
        className='form-control'
        onChange={(e)=>newname(e.target.value)}
        // value={formik.values.newname}
      />

      <label htmlFor="newphone">Phone</label>
      <input
        id="newphone"
        name="newphone"
        type="text"
        className='form-control'

        onChange={(e)=>newphone(e.target.value)}
        // value={formik.values.newphone}
      />
</Col>
        

<Col> 
     <label htmlFor="newstate">State</label>
      <input
        id="newstate"
        name="newstate"
        type="text"
        className='form-control'

        onChange={(e)=>newstate(e.target.value)}
        // value={formik.values.newstate}
      />
      <label htmlFor="newzip">Zipcode</label>
      <input
        id="newzip"
        name="newzip"
        type="text"
        className='form-control'

        onChange={(e)=>newzip(e.target.value)}
        // value={formik.values.newzip}
      />

        </Col>
        </Row>
        <Row>
      {/* <Button 
      variant='success'
      id='addSubmitButton'
      size='sm'
       className='form-control mt-2' 
      type="submit">
        Submit</Button> */}
        </Row>
        <>
       
        <Form.Group as={Row} className="mt-2">
        <Col sm={{  span: 14 }}>
            <SubmitFormik/>
          {/* <Button type="submit" disabled={!dirty}
          className='form-control'
          size='sm'>Submit</Button> */}
        </Col>
      </Form.Group> </>
    </Form>
    </Formik>
    </div>
  );
};
export default Formik2