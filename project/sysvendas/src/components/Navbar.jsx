import "../styles/components/navbar.sass";
import home from "../assets/svg/home.svg";
import sales from "../assets/svg/sells.svg"
import services from "../assets/svg/services.svg"
import clients from "../assets/svg/clients.svg"
import pro from "../assets/svg/pro.svg"
import calendar from "../assets/svg/calendar.svg"
import {Link} from "react-router-dom";


const Navbar = () => {

  const menuItem = ["Home","Vendas","Serviços","Clientes","Profissional","Agendamentos"];
  const menutItensIcons = [home,sales,services,clients,pro,calendar];
  const directLink = ["/","/sales","/service","/","/","/"];

  return (
      <section className="d-flex">
        <nav className="d-block navContainer position-absolute start-0">
          {/*<ul className="list-unstyled text-white m-0 justify-content-start p-0 w-100 ">
            <li className="d-inline-flex list-group-item align-items-center justify-content-start w-100">
              <img src={home} className="m-2"/>
              <Link to="/">Home</Link>
            </li>
          </ul>
          <ul className="list-unstyled text-white m-0 justify-content-start p-0 w-100">
            <li className="d-inline-flex list-group-item align-items-center justify-content-start w-100 ">
              <img src={sales} className="m-2"/>
              <Link to="/sales">Vendas</Link>
            </li>
          </ul>*/}
          {menuItem.map((item,indice)=>(
              <ul key={indice}
                  className="list-unstyled text-white m-0 justify-content-start p-0 w-100 "
              >
                <li className="container-fluid list-group-item align-items-center d-flex justify-content-start w-100">
                  <img src={menutItensIcons[indice]} className="m-2"/>
                    <Link to={directLink[indice]}>{item}</Link>
                </li>
              </ul>
          ))}
        </nav>

      </section>
  )
}

export default Navbar;