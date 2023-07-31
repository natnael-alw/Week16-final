import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom'
import Contacts from './contacts';
import Button from 'react-bootstrap/Button';
import AddForm from './addForm'
import StudentData from '../studentData';
import { PiStudentThin } from 'react-icons/pi';
import { AiOutlineFileAdd } from 'react-icons/ai'
import { ImBrightnessContrast } from 'react-icons/im'




function NavbarFunc() {
  return (
    <>

      <Navbar variant="tabs" expand="lg" data-bs-theme="dark" className="bg-body-tertiary bg-dark">
        <Container>
          <Navbar.Brand as={Link} to="/" element={<StudentData />}><h1><PiStudentThin />
          </h1></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to='/addusedModla'> </Link>
              <Nav.Link as={Link} to="/" element={<StudentData />} > All Student
              </Nav.Link>
              <Nav.Link as={Link} element={<AddForm />} to="/addform" > Add User<h2></h2>
              </Nav.Link>
              <Nav.Link as={Link} element={<Contacts />} to="/contacts">Contacts</Nav.Link>
              <NavDropdown title="Modify" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} element={<AddForm />} to='/addForm' ><AiOutlineFileAdd /> Add</NavDropdown.Item>
                {/* <NavDropdown.Item as={Link} element={<UpdateModal />} to="/update" >
                  Update
                </NavDropdown.Item> */}
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Button variant='dark'><ImBrightnessContrast /></Button>

        </Container>
      </Navbar>

    </>
  );
}

export default NavbarFunc;