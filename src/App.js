import Login from "./components/Login/Login";
import Router from "./components/router/Router";
import {useSelector} from "react-redux";
import {auth} from "./utils/userAuth";
import {useTranslation} from "react-i18next";

auth()

function App() {
    const isAuth = useSelector(state => state.user.isAuth);
    const props = useTranslation();

    return props.ready ? (isAuth ? <Login/> : <Router />) : <div>loading...</div>
}

export default App;
