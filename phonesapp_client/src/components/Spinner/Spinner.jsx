import { Spinner as Loader } from "react-bootstrap"

const Spinner = () => {
    return (

        <Loader animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Loader>

    )
}

export default Spinner