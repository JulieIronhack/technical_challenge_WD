import * as PATHS from "../utils/paths";
import HomePage from "../pages/Phones";

const routes = (props) => {
  return [
    {
      path: PATHS.HOMEPAGE,
      element: <HomePage {...props} />,
    },
  ];
};

export default routes;
