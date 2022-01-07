import { Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import { Link ,useNavigate} from 'react-router-dom'





const Header = () => {
    const Navigate=useNavigate();
    function LogOut() {

        localStorage.clear()
        Navigate("/Register")
    }
    return (
        
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/Register">Dashboard</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="me-auto">
                        {
                            localStorage.getItem('user-info') ?
                                <>
                                    <Link className='navlink' to="/AddProduct">Add Products</Link>
                                    <Link className='navlink' to="/UpdateProduct">Update Products</Link>
                                </>
                                :
                                <>
                                    <Link className='navlink' to="/Login">Login</Link>
                                    <Link className='navlink' to="/Register">SignUp</Link>
                                </>
                        }
                    </Nav>
                    <Nav>
                        <NavDropdown title="User Name" >
                            <NavDropdown.Item   to="/a" onClick={LogOut}>LogOut</NavDropdown.Item>
                            <NavDropdown.Item> Profile </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Header;
