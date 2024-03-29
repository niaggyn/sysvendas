import '../styles/components/login.sass'

import lock from "../assets/svg/lock-login.svg";
import unlock from "../assets/svg/unlock-login.svg";
import help from "../assets/svg/help.svg";
import {useState} from "react";

const Login = () => {

    const [submitLogin, setSubmitLogin] = useState(false);


    const enterLogin = () => {
        setSubmitLogin(!submitLogin);
        if (submitLogin){
            const insertunlockAnimation = document.getElementById("loginIn");
            insertunlockAnimation.classList.add("lockIn");
            const unlockAnimation = document.getElementById("loginAnimation");
            unlockAnimation.classList.add("autorizarLogin");
        }
    }

    return (
        <section className="code">
            <div className="d-flex align-items-center justify-content-center position-absolute top-50 start-50 translate-middle">
                <div className="d-block">
                    <div className="d-flex align-items-center" id="loginAnimation">
                        <img src={lock} id="loginIn"/>
                        <img src={unlock} className="unlockIn" id="unlockIn"/>
                    </div>
                    <div className="d-block container-fluid loginContainer">
                        <input type="text" placeholder="Usuário" className="form-control"/>
                        <input type="password" placeholder="Senha" className="form-control"
                               onKeyDown={(event) => {
                                   if(event.key === "Enter"){
                                       enterLogin();
                                       event.preventDefault();
                                   }
                               }}/>
                    </div>
                </div>
            </div>
            <div className="d-flex position-absolute bottom-0 end-0 pAjustes">
                <img src={help}/>
                <p className="text-white">Suporte Técnico</p>
            </div>
        </section>
    )
}
export default Login;
