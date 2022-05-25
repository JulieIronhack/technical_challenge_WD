import './Navigation.css'
import { Navbar, Container, Nav } from 'react-bootstrap'

const Navigation = () => {


    return (

        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/phones">Phones</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    )
}

export default Navigation