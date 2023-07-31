import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
// import '../node_modules/bootstrap/dist/css/bootstrap-min-css'
import Adduser from '../src/components/adduserModal'
import UpdateModal from '../src/components/updateModal';
import Navbar from '../src/components/navbar'
import AddForm from '../src/components/addForm'
import StudentData from './studentData';
import Details from './components/details';
import { useState, useEffect } from 'react';
import Contacts from './components/contacts';
import ContactDetail from './components/contactDetail';
import ContactHolder from './components/contactHolder';

const API_URL=  'https://648e2ea82de8d0ea11e89bb7.mockapi.io/studentRoster'

function App() {

  const [student, setStudent] = useState('')
    const [find, setFind] = useState(null)

    useEffect(() => {
        const fetching = async () => {
            const get = await fetch(API_URL)
            const resp = await get.json()
            setStudent(resp)
            setFind(resp)

        }

        fetching()
    }, []
    )
    const handleClick = async (id)=>{
        {find && find.map((student)=>
        student.id===id &&
        setStudentDetail(student)) 
        }
       }
       const [studentDetail, setStudentDetail]= useState(null)
      //  useEffect(() => {
      //   // storing input name
      //   localStorage.setItem("studentDetail", JSON.stringify(studentDetail&& studentDetail));
      // }, [studentDetail]); 
      //  console.log(studentDetail)

    // return(
    //     <>
    //     <Contacts student={student} handleClick={handleClick} setFind={setFind} find={find} studentDetail={studentDetail} setStudentDetail={setStudentDetail}/>
    //     <ContactDetail student={student} find={find} studentDetail={studentDetail} setStudentDetail={setStudentDetail}/>
    //     </>
    // )
  return (
    <div className="App">
     
     <Navbar/>
     {/* <ContactHolder API_URL={API_URL}/> */}
      {/* <StudentData/> */}
      <Routes>
        <Route path='/' element={<StudentData  studentDetail={studentDetail} setStudentDetail={setStudentDetail} API_URL={API_URL}/>}/>
        <Route path='/contacts/*' element={<Contacts student={student} handleClick={handleClick} find={find} studentDetail={studentDetail} setStudentDetail={setStudentDetail}/>}>

        {/* <Route path=":contactDetails" element={<ContactDetail />}/> */}
        </Route>
        
        <Route path="/contactDetails/*" element={<ContactDetail student={student} find={find} studentDetail={studentDetail} setStudentDetail={setStudentDetail} />}/>
         <Route path="/add" element={<Adduser/>}/>
         <Route path="/addform" element ={<AddForm/> } />
        {/* <Route path='/addform' element={<Formik/>}/> */}
        <Route path="/update" element={<UpdateModal/>}/>
        <Route path='/details' element={<Details  API_URL={API_URL} /> }/>
       
      </Routes>
    </div>
  )
}

export default App;
