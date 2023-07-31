import React from 'react'
import { useState, useEffect } from 'react'
import ContactDetail from './contactDetail'
import Contacts from './contacts'
const ContactHolder = ({API_URL}) => {
  
    // const [student, setStudent] = useState('')
    // const [find, setFind] = useState(null)

    // useEffect(() => {
    //     const fetching = async () => {
    //         const get = await fetch(API_URL)
    //         const resp = await get.json()
    //         setStudent(resp)
    //         setFind(resp)

    //     }

    //     fetching()
    // }, []
    // )
    // const handleClick = async (id)=>{
    //     {find && find.map((student)=>
    //     student.id===id &&
    //     setStudentDetail(student)) 
    //     }
    //    }
    //    const [studentDetail, setStudentDetail]= useState(null)
    //    useEffect(() => {
    //     // storing input name
    //     localStorage.setItem("studentDetail", JSON.stringify(studentDetail&& studentDetail));
    //   }, [studentDetail]); 
    //    console.log(studentDetail)

    // return(
    //     <>
    //     <Contacts student={student} handleClick={handleClick} setFind={setFind} find={find} studentDetail={studentDetail} setStudentDetail={setStudentDetail}/>
    //     <ContactDetail student={student} find={find} studentDetail={studentDetail} setStudentDetail={setStudentDetail}/>
    //     </>
    // )
}

export default ContactHolder
