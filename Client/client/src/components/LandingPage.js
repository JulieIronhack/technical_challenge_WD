import { Link } from "react-router-dom";

function Phones () {


    return (
        <div>
            <h1>Hi, there</h1>
               <Link to={"/phones"}>View list of phones</Link>
        </div>
    )
}

export default Phones;