import { useEffect } from "react"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const PhoneDetails = ({ phonesList }) => {
    const [phoneDetails, setPhoneDetails] = useState(null)
    const [fetchingDetails, setFetchingDetails] = useState(true)

    const { phoneId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        phoneDetails()
    }, [phoneId])

    const getPhoneDetails = async () => {
        setFetchingDetails(true)

        const phoneToRender = phonesList.find(eachPhone => eachPhone.id === Number(phoneId))

        setTimeout(() => {

        })
    }
    return (

    )
}