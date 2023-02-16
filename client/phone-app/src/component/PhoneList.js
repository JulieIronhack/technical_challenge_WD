function PhoneList (phones) {
    

    console.log(typeof phones, phones)
        return (
            <>
            {phones.length > 1 && 
                phones.map(phone => {
                return (
                    <h1>{phone.name}</h1>
                )
            })
            }
           
            </>
        )
    }
   


export default PhoneList