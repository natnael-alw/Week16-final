import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import {  useNavigate } from 'react-router-dom'
import {FcViewDetails} from 'react-icons/fc'
import { Route, Routes, Link } from 'react-router-dom';







const Contacts = ({student,
    find,
    setFind,
    handleClick,
    }) => {
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
    // const [studentDetail, setStudentDetail]= useState(null)

//     const handleClick = async (id)=>{
//  {find && find.map((student)=>
//  student.id===id &&
//  setStudentDetail(student)) 
//  }
// }
// {studentDetail&&  console.log(studentDetail)}

    const handleChange = (e) => {
        if (!e.target.value) setFind(student)

        const found = student && student.filter(student =>
             student.fullName.toLowerCase().includes(e.target.value))
        setFind(found)
    }
    const to = '/contactDetails'
    const history = useNavigate()
    function delay (e){
        e.preventDefault()
        setTimeout(()=>history('/contactDetails'), 0)
    }
    return (
        <>
      
     
       {/* <Route path='/contacts' element={ <><header>
                <form onSubmit={(e) => e.preventDefault()} className="form-group mt-3" >
                    <h3>  <input className='mb-2' onChange={handleChange} 
                    id='searchInput' size='sm' placeholder="search.." />
                        <AiOutlineSearch /></h3>

                </form>
            </header>
            
                <ul>
            {find && find.map((student,index) =>
            
            
                   <li key={student.id} onTouchMove={PointerEvent} onClick={()=>handleClick(student.id)} id='contacts'>
                    
                   <FcViewDetails/>{student.fullName}: {student.phoneNumber} {student.state}
                    </li>
       

            )}
                </ul>
                <ContactDetail student={find} studentDetail={studentDetail}/>
                </> }  /> */}
       
            <header>
                <form onSubmit={(e) => e.preventDefault()} className="search mt-3" >
                    <h3>  <input className='mb-2' onChange={handleChange} 
                    id='searchInput' size='sm' placeholder="search.." />
                       <AiOutlineSearch/> </h3>
                       

                </form>
            </header>
                <ul>
            {find && find.map((student) =>
            
            
                   <li key={student.id} onTouchMove={PointerEvent} onClick={()=>handleClick(student.id)} id='contacts'>
                    <Link  onClick={delay} to={to}>
                        
                   <FcViewDetails/>{student.fullName}: {student.phoneNumber} {student.state}
                    </Link>
                    </li>
       

            )}
                </ul>

                {/* <ContactDetail student={find} studentDetail={studentDetail}/> */}
               
        </>
    )
}

export default Contacts
