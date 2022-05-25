import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div>
            <Link to={'/phones'}>List of all phones</Link>
        </div>
    )
}

export default HomePage