import { Link } from "react-router-dom";
import "./pages.css/Homepage.css"

function Homepage() {
  return (
    <div className="homepage">
    <img className="homepageImg" src="https://images.pexels.com/photos/369376/pexels-photo-369376.jpeg?auto=compress&cs=tinysrgb&w=600" alt="woman holding phone"/>
    <h1 className="homepageTitle">Welcome to The Phone Cave!</h1>
      <Link to={'/phones'}>
        <h4 className="homepageLink">See all our Phones</h4>
      </Link>
    </div>
  );
}

export default Homepage;