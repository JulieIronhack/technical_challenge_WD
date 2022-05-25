import { useEffect } from "react"

const PhoneDetails = () => {

    const [phoneDetails, setPhoneDetails] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        loadPhone()
    }, [])

    const loadPhone = () => {
        setLoading(true)
        phonesService
            .getPhone(id)
            .then(({ data }) => {
                setLoading(false)
                setPhoneDetails(data)
            })
    }


    return (
        <h2>Phone details</h2>

        
    )
}

export default PhoneDetails