import Login from "./components/Login/Login";
import {useSelector} from "react-redux";
import Home from "./components/Home/Home";

function App() {
const isAuth = useSelector(state => state.user.isAuth);
  return (
      <>
          <Home/>
      </>
  )
}

export default App;
