import '../styles/components/login.sass'

import logo from "../assets/svg/XSYS.svg"
import lock from "../assets/svg/lock-login.svg";
import unlock from "../assets/svg/unlock-login.svg";
import help from "../assets/svg/help.svg";
import {useEffect, useState} from "react";

const Login = ({ onLogin, usernameT }) => {

  const [submitLogin, setSubmitLogin] = useState(false);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const enterLogin = (loginAuthorized) => {

    let user = document.getElementById("username").value;

    setSubmitLogin(!submitLogin);
    if (submitLogin) {
      console.log("funcao ok");
      const insertUnlockAnimation = document.getElementById("loginIn");
      insertUnlockAnimation.classList.add("lockIn");
      const unlockAnimation = document.getElementById("loginAnimation");
      unlockAnimation.classList.add("autorizarLogin");

      setInterval(() => {
        onLogin(user);
      }, 2000);
    }
    if(!loginAuthorized) {
      alert('Login falhou. Por favor, verifique suas credenciais.');
    }

  }


  const login = async () => {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    const response = await fetch("http://localhost:8080/login", {
      method: 'POST',
      headers: new Headers({
        "Content-Type": "application/json",
        "Accept": "application/json",
      }),
      body: JSON.stringify({
        username: username,
        password: password
      }),
      credentials:'include'
    })

    console.log(response.ok);

    if (response.ok) {
      console.log("dados ok");
      enterLogin(true);
    }
  }


  useEffect(() => {

    setUsername(username);

  }, []);


  return (
      <section className="code d-flex">
        <div className="logoWallpaper w-25 d-flex justify-content-center align-items-center">
          <img src={logo} alt="X Systems" className="logo w-50"/>
        </div>
        <div className="w-50">
          <div
              className="d-flex align-items-center justify-content-center align-items-center h-100">
            <div className="d-block">
              <div className="d-flex align-items-center" id="loginAnimation">
                <img src={lock} id="loginIn"/>
                <img src={unlock} className="unlockIn" id="unlockIn"/>
              </div>
              <div className="d-block container-fluid loginContainer textSizeSm">
                <input type="text" placeholder="Usuário" className="form-control" value="adm1" id="username"
                       onChange={(e) => setUsername(e.target.value)}
                />
                <input type="password" placeholder="Senha" className="form-control" value="senha123" id="password"
                       onKeyDown={(event) => {
                         if (event.key === "Enter") {
                           login();
                           event.preventDefault();
                         }
                       }}
                       onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="d-flex position-absolute bottom-0 end-0 pAjustes">
            <img src={help}/>
            <p className="text-white">Suporte Técnico</p>
          </div>
        </div>

      </section>
  )
}
export default Login;
