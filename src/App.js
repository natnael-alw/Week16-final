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

const API_URL = 'https://648e2ea82de8d0ea11e89bb7.mockapi.io/studentRoster'

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
  const handleClick = async (id) => {
    {
      find && find.map((student) =>
        student.id === id &&
        setStudentDetail(student))
    }
  }
  const [studentDetail, setStudentDetail] = useState(null)
  const [darkMode, setDarkMode] = useState(false)
  const handleMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={darkMode ? 'darkApp' : 'lightApp'}>
      <Navbar handleMode={handleMode} />
      <Routes>
        <Route path='/' element={<StudentData darkMode={darkMode} studentDetail={studentDetail} setStudentDetail={setStudentDetail} API_URL={API_URL} />} />
        <Route path='/contacts/*' element={<Contacts student={student} handleClick={handleClick} setFind={setFind} find={find} studentDetail={studentDetail} setStudentDetail={setStudentDetail} />}>
        </Route>
        <Route path="/contactDetails/*" element={<ContactDetail darkMode={darkMode} student={student} find={find} studentDetail={studentDetail} setStudentDetail={setStudentDetail} />} />
        <Route path="/add" element={<Adduser />} />
        <Route path="/addform" element={<AddForm darkMode={darkMode} />} />
        <Route path="/update" element={<UpdateModal />} />
        <Route path='/details' element={<Details darkMode={darkMode} API_URL={API_URL} />} />
      </Routes>
    </div>
  )
}

export default App;
