import {TiUserDelete} from 'react-icons/ti'
import {AiOutlineFileAdd} from 'react-icons/ai'
import {FcViewDetails} from 'react-icons/fc'
import{ Button} from 'react-bootstrap'
import{ Table} from 'react-bootstrap/'
import { useState, useEffect } from "react";
import UpdateModal from './updateModal';
import {AiOutlineSearch}  from 'react-icons/ai'

const Search =(props)=>{
    // const [student, setStudent]= useState(null)
    // useEffect(()=>{
    //     const fetching = async()=>{
    //         const get = await fetch(API_URL)
    //         const resp = await get.json()
    //         setStudent(resp) 
    //         setFind(resp)
    //     }

    //      fetching()},[]
    
    // )
    const student= props.student
    const setFind = props.setFind
    // const setUpdateZip= props.setUpdateZip
    // const updateStudent = props.updateStudent
    // const setUpdateState= props.setUpdateState
    // const setUpdateName = props.setUpdateName
    // const setUpdatePhone =props.setUpdatePhone
    // const nombre = props.nombre
    // const find = props.find
    // const deleteStudent =props.deleteStudent
    // const detail = props.detail 
    // const handleShowModal  =props.handleShowModal  
    // const updateModal= props.updateModal
    // const handleShow= props.handleShow

    const handleChange = (e) => {
        if (!e.target.value) setFind(student)

        const found = student && student.filter(student => student.fullName.toLowerCase().includes(e.target.value))
        setFind(found)
    }

    
    return (
        <>
            {/* <Button variant="secondary" onClick={handleShow} className='mt-2 mb-2' size='sm'>
             <h3><AiOutlineFileAdd/></h3></Button>{' '} */}
            <header>
            <form onSubmit={(e) => e.preventDefault()} className="form-group mt-3" >
         <h3>  <input className='mb-2'onChange={handleChange} id='searchInput' size='sm' placeholder="search.."/> 
         <AiOutlineSearch/></h3>
                     {/* <Button variant='secondary' className='mb-1' size='sm' type='submit' >
                        <AiOutlineSearch/></Button> */}
                </form>
            </header>

{/* {student? <Table striped bordered hover variant='light' size="sm">
    <thead>
  <tr>
    <th > #</th>
    <th>Student Fullname</th>
    <th>Phone</th>
    <th>State</th>
    <th>Zipcode</th>
    <th>Action</th>
    <th>Delete</th>
  </tr>
</thead>
<tbody>
  {find&& find.map((student)=>
  <tr key={student.id}>
    <td>{student.id}</td>
    <td onTouchMove={PointerEvent} onClick={()=>detail(student.id)}>{student.fullName} <span onClick={()=>handleShowModal()} onTouchMove={PointerEvent}><FcViewDetails/>
    </span></td>
   <td><form onSubmit={(e)=>updateStudent(e, student.id)}>
        <input onChange={(e)=>setUpdateName(e.target.value)}  placeholder="name"/>
        <input onChange={(e)=>setUpdatePhone(e.target.value)}/>
        <input onChange={(e)=>setUpdateState(e.target.value)}  placeholder="name"/>
        <input onChange={(e)=>setUpdateZip(e.target.value)}/>
        <button type="submit">button</button>
    </form></td>
    <td>{student.phoneNumber}</td>
    <td>{student.state}</td>
    <td>{student.zipcode}</td>
    {<td><UpdateModal/></td>}
    <td> <button onClick={()=>deleteStudent(student.id)} className="btn btn-danger mt-2 btn-sm"><TiUserDelete/></button></td>
  </tr>
            )}

</tbody>
  </Table>:<div>no result</div>} */}

        </>
       
    )
}

export default Search