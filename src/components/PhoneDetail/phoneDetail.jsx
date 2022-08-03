import { Card } from "react-bootstrap"
import { useParams } from "react-router-dom"
import Loader from "../Loader/loader"

const PhoneDetail = ({ phones }) => {
    const { phone_id } = useParams()

    const foundPhone = phones.filter(elm => {
        console.log(elm)
        elm.id === phone_id
    })
    console.log(phone_id)
    return (
        <>
            {
                !foundPhone ?
                    <Loader />
                    :
                    <Card>
                        <Card.Body>
                            <Card.Title>{foundPhone.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"> {foundPhone.manufacturer}</Card.Subtitle>
                            <Card.Text>{foundPhone.description}</Card.Text>
                        </Card.Body>
                    </Card >
            }
        </>

    )
}

export default PhoneDetail