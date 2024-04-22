import "../styles/pages/sales.sass"
import "../styles/pages/clients.sass"

import {useState} from "react";
import FindInput from "../components/FindInput.jsx";

import hist from "../assets/svg/history.svg";
import ClientInfo from "../components/clients/ClientInfo.jsx";
import delet from "../assets/svg/delete.svg";


const Clients = () => {

  //objeto
  const [line, setLine] = useState([
    {
      ID: 1112,
      Nome: "Peggy Sykes",
      CPF: "123.***.***-**",
      Endereco: "545 Broome Street, Watchtower, Washington, 9819",
      Email: "peggysykes@comtract.com",
      Contato: "9899989-9999"
    },
    {
      ID: 1113,
      Nome: "Mamie Cotton",
      CPF: "123.***.***-**",
      Endereco: "444 Oceanview Avenue, Watrous, Arkansas, 3120",
      Email: "asdsadsds@gmail.com",
      Contato: "9899989-9999"
    },
    {
      ID: 1114,
      Nome: "Britney Petty",
      CPF: "123.***.***-**",
      Endereco: "R990 Bethel Loop, Oretta, Georgia, 6450",
      Email: "asdsadsds@gmail.com",
      Contato: "9899989-9999"
    },
    {
      ID: 1115,
      Nome: "Wolf Mayer",
      CPF: "123.***.***-**",
      Endereco: "377 Rock Street, Gibsonia, Maryland, 7184",
      Email: "asdsadsds@gmail.com",
      Contato: "9899989-9999"
    }
  ]);

  const [create, setCreate] = useState(true)

  const UpdateInfo = ()=>{
    setCreate(!create);
  }

  return (
      <section className="container-fluid d-block overflow-auto">
        <div className="container-fluid d-flex p-0 align-items-center justify-content-between ">
          <FindInput history={true} list={true}/>
        </div>
        <div className="d-flex container mt-3 p-2">
          <table className="table table-hover table-sm text-nowrap ">
            <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col-sm-4">ID</th>
              <th scope="col">Nome</th>
              <th scope="col">CPF/CNPJ</th>
              <th scope="col-sm-6">Endereço</th>
              <th scope="col">Email</th>
              <th scope="col">Contato</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            {line.map((line) => (
                <tr key={line.ID}>
                  <th scope="row"><input type="checkbox"/></th>
                  <th>{line.ID}</th>
                  <td>{line.Nome}</td>
                  <td>{line.CPF}</td>
                  <td>{line.Endereco}</td>
                  <td>{line.Email}</td>
                  <td>{line.Contato}</td>
                  <td>
                    <button className="buttonSearch"
                      onClick={UpdateInfo}
                    >
                      <img src={hist} alt="Histórico do Cliente"/>
                    </button>
                  </td>
                  <td>
                    <button value="History" className="buttonSearch">
                      <img src={delet} alt=""/>
                    </button>
                  </td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
        <div className="container route border border-0 rounded shadow-sm p-2 m-0">
          {create ?
              <ClientInfo create={true}/>
              :
              <ClientInfo create={false}/>}
        </div>

      </section>

  )
}
export default Clients;