import React from 'react'
import { useFormikContext } from 'formik'
import Button from 'react-bootstrap/Button';



const SubmitFormik = () => {
    const dirty = useFormikContext()
  return (
    
    <Button type="submit" disabled={!dirty}
    className='form-control'
    size='sm'>Submit</Button>
  )
}

export default SubmitFormik
