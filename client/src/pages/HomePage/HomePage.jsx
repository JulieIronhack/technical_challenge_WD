import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HomePage = () => {

    return (
        <Container>
            <h1>Welcome to Phones Cave</h1>

            <Link to="/phones">
                <Button variant="dark" size='lg'>Go to Phones</Button>
            </Link>
            <hr />
            <Link to="/phones/:id">
                <Button variant="dark" size='lg'>Get a Phone details</Button>
            </Link>
            <hr />

        </Container>
    )
}

export default HomePage