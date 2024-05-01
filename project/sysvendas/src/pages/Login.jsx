import '../styles/components/login.sass'

import logo from "../assets/svg/XSYS.svg"
import lock from "../assets/svg/lock-login.svg";
import unlock from "../assets/svg/unlock-login.svg";
import help from "../assets/svg/help.svg";
import {useState} from "react";

const Login = ({ onLogin }) => {

  const [submitLogin, setSubmitLogin] = useState(false);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const enterLogin = () => {
    const isAuthenticated = true;

    if (isAuthenticated) {
      setSubmitLogin(!submitLogin);
      if (submitLogin) {
        const insertunlockAnimation = document.getElementById("loginIn");
        insertunlockAnimation.classList.add("lockIn");
        const unlockAnimation = document.getElementById("loginAnimation");
        unlockAnimation.classList.add("autorizarLogin");
      }
      setInterval(() => {
        onLogin(username);
      }, 0);
    } else {
      alert('Login falhou. Por favor, verifique suas credenciais.');
    }
  }

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
                <input type="text" placeholder="Usuário" className="form-control" value="User1"
                       onChange={(e) => setUsername(e.target.value)}
                />
                <input type="password" placeholder="Senha" className="form-control" value="User1"
                       onKeyDown={(event) => {
                         if (event.key === "Enter") {
                           enterLogin();
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
