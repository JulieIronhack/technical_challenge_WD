import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

const NavBar = ({ phonesList }) => {

    return (
        <Navbar bg='light' expand='lg'>
            <Container>
                <Link to={'/'}>Home</Link>

                <NavBar.Toggle aria-controles='basic-navbar-nav' />

                <NavBar.Collapse id='basic-navbar-nav'>
                    <Nav className="me-auto">
                        {
                            phonesList.map(eachPhone => {
                                return (
                                    <Link to={`/phone-details/${eachPhone.id}`} key={eachPhone.id}>
                                        {eachPhone.name}
                                    </Link>
                                )
                            })
                        }
                    </Nav>
                </NavBar.Collapse>
            </Container>
        </Navbar>
    )

}

export default NavBar