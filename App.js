import Routes from "./src/routes.js";
import RoutesAuth from "./src/routsAuth.js";

const isUserAuth = true;

export default function App() {
  return isUserAuth ? <RoutesAuth /> : <Routes />;
}
 