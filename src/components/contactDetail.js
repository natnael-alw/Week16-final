import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { Card, ListGroup } from 'react-bootstrap';


const ContactDetail = (props) => {
    // console.log(studentDetail)
    const studentDetail = props.studentDetail
    console.log(studentDetail)
    const name = studentDetail && studentDetail.fullName
    const phone = studentDetail && studentDetail.phoneNumber
    const state = studentDetail && studentDetail.state
    const zipcode = studentDetail && studentDetail.zipcode


    return (
        <Card id='contactDetailDiv'>
                {studentDetail&&<ListGroup>
      <ListGroup.Item><img src={studentDetail&& studentDetail.avatar}/></ListGroup.Item>
      <ListGroup.Item> Name : {name ? name : <p>404 Notfound</p>}</ListGroup.Item>
      <ListGroup.Item>Phone: {studentDetail && phone}</ListGroup.Item>
      <ListGroup.Item>State: {studentDetail && state}</ListGroup.Item>
      <ListGroup.Item>Zipcode: {studentDetail && zipcode}</ListGroup.Item>
    </ListGroup>}
             
            
        </Card>
    )
}

export default ContactDetail
