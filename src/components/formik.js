import React from 'react';
import { useFormik, useFormikContext, Formik, Field } from 'formik';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import SubmitFormik from './submitFormik';



const Formik2 = (props, { setNewFullName, setNewPhone, setNewZipcode, setNewState }) => {
    const dirty = useFormikContext()

    const newname = props.setNewFullName
    const newphone = props.setNewPhone
    const newstate = props.setNewState
    const newzip = props.setNewZipcode
    const create = props.createStudent

    const formik = useFormik({
        initialValues: {
            setNewFullName,
            setNewPhone,
            setNewZipcode,
            setNewState,

        },

        onSubmit: ({ resetForm }) => {
            create()
        }

    });
    const handleReset = () => {
        formik.resetForm()
    }
    return (
        <div>
            <Formik onSubmit={handleReset} >
                <Form className='form-group' onSubmit={formik.handleSubmit}>
                    <Row>
                        <Col>
                            <label htmlFor="setNewFullName">Fullname</label>
                            <input
                                className='form-control'
                                id="setNewFullName"
                                name="setNewFullName"
                                type="text"
                                onChange={(e) => newname(e.target.value)}
                                value={formik.values.setNewFullName}
                            />

                            <label htmlFor="setNewPhone">Phone</label>
                            <input
                                className='form-control'
                                id="setNewPhone"
                                name="setNewPhone"
                                type="text"

                                onChange={(e) => newphone(e.target.value)}
                                value={formik.values.newphone}

                            />
                        </Col>


                        <Col>
                            <label htmlFor="setNewState">State</label>
                            <Field
                                className='form-control'
                                id="setNewState"
                                name="setNewState"
                                type="text"

                                onChange={(e) => newstate(e.target.value)}
                                value={formik.values.newstate}

                            />
                            <label htmlFor="setNewZipcode">Zipcode</label>
                            <Field
                                className='form-control'
                                id="setNewZipcode"
                                name="setNewZipcode"
                                type="text"
                                onChange={(e) => newzip(e.target.value)}
                                value={formik.values.newzip}
                            />
                        </Col>
                    </Row>
                    <Row>

                    </Row>
                    <Form.Group as={Row} className="mt-2">
                        <Col sm={{ span: 14 }}>
                            <SubmitFormik />
                        </Col>
                    </Form.Group>
                </Form>
            </Formik>
        </div>
    );
};
export default Formik2