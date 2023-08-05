import React from 'react'
import { Card, ListGroup } from 'react-bootstrap';

//for the link in contacts
const ContactDetail = (props) => {
    // console.log(studentDetail)
    const studentDetail = props.studentDetail
    console.log(studentDetail)
    const name = studentDetail && studentDetail.fullName
    const phone = studentDetail && studentDetail.phoneNumber
    const state = studentDetail && studentDetail.state
    const zipcode = studentDetail && studentDetail.zipcode
    const darkMode = props.darkMode


    return (
        <Card id='contactDetailDiv' style={{ color: 'black', backgroundColor: darkMode ? 'rgba(115, 104, 104, 0.55)' : 'white' }} >
            {studentDetail && <ListGroup>
                <ListGroup.Item style={{ color: 'black', backgroundColor: darkMode ? 'rgba(115, 104, 104, 0.55)' : 'white' }}><img src={studentDetail && studentDetail.avatar} /></ListGroup.Item>
                <ListGroup.Item style={{ color: 'black', backgroundColor: darkMode ? 'rgba(115, 104, 104, 0.55)' : 'white' }}> Name : {name ? name : <p>404 Notfound</p>}</ListGroup.Item>
                <ListGroup.Item style={{ color: 'black', backgroundColor: darkMode ? 'rgba(115, 104, 104, 0.55)' : 'white' }}>Phone: {studentDetail && phone}</ListGroup.Item>
                <ListGroup.Item style={{ color: 'black', backgroundColor: darkMode ? 'rgba(115, 104, 104, 0.55)' : 'white' }}>State: {studentDetail && state}</ListGroup.Item>
                <ListGroup.Item style={{ color: 'black', backgroundColor: darkMode ? 'rgba(115, 104, 104, 0.55)' : 'white' }}>Zipcode: {studentDetail && zipcode}</ListGroup.Item>
            </ListGroup>}


        </Card>
    )
}

export default ContactDetail
