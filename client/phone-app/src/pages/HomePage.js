import {useEffect, useState} from 'react'
import axios from 'axios'
import PhoneList from '../component/PhoneList'
import PhoneCard from '../component/PhoneCard'
import {ClipLoader} from 'react-spinners'



function HomePage () {
    const [phones,setPhones] = useState([])
    const [selectedPhoneId,setSelectedPhoneId] = useState(null)
    const [detailPhone,setDetailPhone] = useState(null)
    const [loading, setLoading] = useState(false)

    const selectPhone = (e) => {
        setSelectedPhoneId(e.target.getAttribute('data-index'))
    }

    const getSinglePhone = async (id) => {
        try {
            setLoading(true)
            setTimeout(()=>setLoading(false),300)
            const res = await axios.get(`http://localhost:5005/api/phones/${id}`)
            setDetailPhone(res.data)
        }
        catch (err){console.log(err)}
    }

    const getData = async () => {
        try {
            const response = await axios.get('http://localhost:5005/api/phones')
        setPhones(response.data)

        }
        catch (err) {
            console.error(err)
        }
    }


    useEffect(()=>{
        getSinglePhone(selectedPhoneId)
        getData()
    },[selectedPhoneId])

    return (
        <>
        <div className='HomePageWrapper'>
        <div className={'phoneList'}>
           {phones.map(phone => {
                return (<h3 key={phone.id} data-index={phone.id} onClick={selectPhone}>{phone.name}</h3>)
            })}
           
            {/* <PhoneList {...phones}/> */}
           
           </div>
        
        {loading && (
            <ClipLoader/>
        )}
        {!loading && (
            
        
           
            <PhoneCard {...detailPhone}/>
           
           
           

       
        )}
        </div>
       
        </>
        
    )
}

export default HomePage