import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
    <h1>Welcome to The Phone Cave!</h1>
      <Link to={'/phones'}>
        <h4>See all our Phones</h4>
      </Link>
    </div>
  );
}

export default Homepage;