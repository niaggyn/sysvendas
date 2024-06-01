import {useState} from "react";
import "./styles/app.scss";

import Login from "./pages/Login.jsx";
import MainPage from "./pages/MainPage.jsx";

const App = () => {

  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (username) => {
    setLogin(true);
    setUsername(username);
  };

  return (
      <>
        {/*<MainPage username = {username}/>*/}
        {login ? (
            <MainPage username = {username}/>
        ) : (
            <Login onLogin={handleLogin}/>
        )}
      </>
  )
}

export default App;
