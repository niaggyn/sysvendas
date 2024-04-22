import "../styles/pages/sales.sass"
import "../styles/pages/clients.sass"

import {useState} from "react";
import FindInput from "../components/FindInput.jsx";

import user from "../assets/svg/user-cicle.svg";
import hist from "../assets/svg/history.svg";
import delet from "../assets/svg/delete.svg";

import Id from "../components/Id.jsx";
import ProInfo from "../components/profissional/ProInfo.jsx";


const Profissional = () => {

  //objeto
  const [line, setLine] = useState([
    {
      ID: 0,
      nome: "Peggy Sykes",
      cpf: "13548467496",
      cargo: "COMTRACT",
      email: "peggysykes@comtract.com",
      telefone: "+1 (971) 574-2305",
      endereco: "990 Bethel Loop, Oretta, Georgia, 6450",
      nivelAltor: 1
    },
    {
      ID: 1,
      nome: "Mamie Cotton",
      cpf: "20581827595",
      cargo: "TURNABOUT",
      email: "mamiecotton@turnabout.com",
      telefone: "+1 (903) 404-2877",
      endereco: "444 Oceanview Avenue, Watrous, Arkansas, 3120",
      nivelAltor: 1
    },
    {
      ID: 2,
      nome: "Britney Petty",
      cpf: "88455184937",
      cargo: "ORBIN",
      email: "britneypetty@orbin.com",
      telefone: "+1 (807) 589-2738",
      endereco: "211 Quay Street, Williamson, Vermont, 8809",
      nivelAltor: 1
    },
    {
      ID: 3,
      nome: "Wolf Mayer",
      cpf: "35477035062",
      cargo: "KIDSTOCK",
      email: "wolfmayer@kidstock.com",
      telefone: "+1 (857) 477-2946",
      endereco: "545 Broome Street, Watchtower, Washington, 9819",
      nivelAltor: 1
    },
    {
      ID: 4,
      nome: "Candy Sosa",
      cpf: "27571517682",
      cargo: "STEELFAB",
      email: "candysosa@steelfab.com",
      telefone: "+1 (899) 595-3690",
      endereco: "377 Rock Street, Gibsonia, Maryland, 7184",
      nivelAltor: 1
    },
    {
      ID: 5,
      nome: "Chrystal Campbell",
      cpf: "55283192894",
      cargo: "MEDALERT",
      email: "chrystalcampbell@medalert.com",
      telefone: "+1 (956) 438-2596",
      endereco: "337 Garland Court, Libertytown, West Virginia, 9018",
      nivelAltor: 1
    }
  ]);

  const [create, setCreate] = useState(true)

  const UpdateInfo = () => {
    setCreate(!create);
  }

  return (
      <section className="container-fluid d-block ">
        <div className="container-fluid d-flex p-0 align-items-center justify-content-between ">
          <FindInput history={true} list={true}/>
        </div>
        <div className="d-flex container row g-2 overflow-x-auto">
          {line.map((line) => (
              <div key={line.ID} className="col-6 border border-1 rounded shadow-sm p-3">
                <div className="d-flex justify-content-between">
                  <div className="d-flex justify-content-start">
                    <div className="pe-3">
                      <img src={user} alt="photo"/>
                    </div>
                    <div>
                      <p className="p-0 mb-0 fw-semibold">{line.nome}</p>
                      <p className="fw-normal text-muted textSizeSm">{line.cargo}</p>
                    </div>
                  </div>
                  <div className="">
                    <Id service={false}/>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="fw-normal textSizeSm align-items-baseline">
                    <p className="p-0 mb-0 ">{line.telefone}</p>
                    <p className="p-0 mb-0 ">{line.endereco}</p>
                    <p className="p-0 mb-0 ">{line.email}</p>
                  </div>
                  <div className="d-flex justify-content-end align-items-end">
                    <button value="History" className="buttonSearch"
                            onClick={UpdateInfo}
                    >
                      <img src={hist} alt=""/>
                    </button>
                    {/*<button value="History" className="buttonSearch">
                      <img src={edit} alt=""/>
                    </button>*/}
                    <button value="History" className="buttonSearch">
                      <img src={delet} alt=""/>
                    </button>
                  </div>
                </div>
              </div>
          ))}
        </div>
        <div className="container m-0 p-0 mb-5">
          {create ?
              <ProInfo create={true}/>
              :
              <ProInfo create={false}/>}

        </div>

      </section>

  )
}
export default Profissional;