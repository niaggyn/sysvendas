import "../styles/pages/sales.sass"
import "../styles/pages/clients.sass"

import {useState} from "react";
import FindInput from "../components/FindInput.jsx";

import hist from "../assets/svg/history.svg";
import edite from "../assets/svg/edit.svg";
import ClientInfo from "../components/clients/ClientInfo.jsx";


const Clients = () => {

  //objeto
  const [line, setLine] = useState([
    {
      ID: 1112,
      Nome: "User 1",
      CPF: "123.456.789-10",
      Endereco: "Rua XXXX, 5866",
      Email: "asdsadsds@gmail.com",
      Contato: "9899989-9999"
    },
    {
      ID: 1113,
      Nome: "User 2",
      CPF: "123.456.789-10",
      Endereco: "Rua XXXX, 5866",
      Email: "asdsadsds@gmail.com",
      Contato: "9899989-9999"
    },
    {
      ID: 1114,
      Nome: "User 3",
      CPF: "123.456.789-10",
      Endereco: "Rua XXXX, 5866",
      Email: "asdsadsds@gmail.com",
      Contato: "9899989-9999"
    },
    {
      ID: 1115,
      Nome: "User 4",
      CPF: "123.456.789-10",
      Endereco: "Rua XXXX, 5866",
      Email: "asdsadsds@gmail.com",
      Contato: "9899989-9999"
    }
  ]);

  return (
      <section className="container-fluid d-block p-0 overflow-auto">
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
                  <td><img src={hist} alt="histórico" className="icon-size"/></td>
                  <td><img src={edite} alt="editar cliente" className="icon-size"/></td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
        <div className="container route border border-0 rounded shadow-sm p-2">
          <ClientInfo create={false}/>
        </div>

      </section>

  )
}
export default Clients;