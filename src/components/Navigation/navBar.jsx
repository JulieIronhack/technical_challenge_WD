import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './navBar.css'

const Navigation = () => {

    return (

        <Navbar expand="lg" variant='dark' id="basic-navbar-nav">
            <Container>
                <Nav className="ms-auto">
                    <Link to="/phones" className='nav-link'>
                        <Nav.Link as="span" className='nav-text'>Phones</Nav.Link>
                    </Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navigation