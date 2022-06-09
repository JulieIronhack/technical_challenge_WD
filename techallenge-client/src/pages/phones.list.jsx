import { NavLink } from "react-router-dom";

function PhoneList(props) {
    const renderPhones = () => {
        const result = props?.phones?.map((element) => {
            return (
                <section>
                    <p> name: {element?.name}</p>
                    <p> manufacturer: {element?.manufacturer}</p>
                    <p> description: {element?.description}</p>
                    <p> color: {element?.color}</p>
                    <p> price: {element?.price}</p>
                    <p> image: {element?.imageFileName}</p>
                    <p> screen size: {element?.screen}</p>
                    <p> processor: {element?.processor}</p>
                    <p> ram: {element?.ram}</p>
                    <a href="">More Details</a>
                </section>
                
            )
        })
        return result;
    }
    return (
    <div>
<h1> Our phones</h1>
<br /> 

<section>
    {props.phones === null ? <p>Loading</p> : renderPhones()}
</section>
<br />
<br />
<br />

<br />

    </div>
    )
}

export default PhoneList;