import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import {  useNavigate } from 'react-router-dom'
import {FcViewDetails} from 'react-icons/fc'
import { Link } from 'react-router-dom';







const Contacts = ({student,
    find,
    setFind,
    handleClick,
    }) => {
    
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
