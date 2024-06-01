import "../styles/pages/sales.sass"
import "../styles/pages/clients.sass"

import {useEffect, useState, createContext} from "react";
import FindInput from "../components/FindInput.jsx";

import hist from "../assets/svg/history.svg";
import ClientInfo from "../components/clients/ClientInfo.jsx";
import delet from "../assets/svg/delete.svg";


export const ClientPage = createContext();

const Clients = () => {

/*  //objeto para teste
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
  ]);*/

  const [create, setCreate] = useState(true);
  const [clients, setClients] = useState([]);
  const [isClientCreate, setIsClientCreate] = useState(false);

  const UpdateInfo = () => {
    setCreate(!create);
  }

  const updateList=()=>{
    fetch("http://localhost:8080/client/clientList")
        .then(client => client.json())
        .then(clientList => setClients((clientList)));
  }

  useEffect(() => {
    if(isClientCreate){
      updateList();
    }
    updateList();
  }, []);

  return (
      <ClientPage.Provider value={isClientCreate}>
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
            {clients.map((clients) => (
                <tr key={clients.id}>
                  <th scope="row"><input type="checkbox"/></th>
                  <th>{clients.id}</th>
                  <td>{clients.nome}</td>
                  <td>{clients.cpf_cnpj}</td>
                  <td>{clients.endereco}</td>
                  <td>{clients.email}</td>
                  <td>{clients.contato}</td>
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
      </ClientPage.Provider>
  )
}
export default Clients;