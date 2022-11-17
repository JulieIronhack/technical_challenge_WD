import { Routes, Route, Link } from "react-router-dom";


function BeerList() {
    return (
        <div>
            <h1>HomePage</h1>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/phones'}>All Phones</Link></li>
            </ul>
        </div>
    );
}

export default BeerList;