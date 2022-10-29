import { Link } from "react-router-dom";

function HomeScreen() {
  return (
    <div>
      <h1>Welcome to Cave Phone</h1>
      <Link to={"/phones"}>
          <h3>List all phones</h3>
        </Link>
    </div>
  );
}

export default HomeScreen;