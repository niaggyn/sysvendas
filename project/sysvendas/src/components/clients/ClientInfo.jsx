import newUser from "../../assets/svg/newUser.svg";
import userchecked from "../../assets/svg/user-checked.svg"
import edit from "../../assets/svg/edit.svg"

import "../../styles/pages/clients.sass"
import ButtonAction from "../ButtonAction.jsx";
import Id from "../Id.jsx";
import ButtonDelete from "../ButtonDelete.jsx";
import ClientHistory from "./ClientHistory.jsx";
import {useState} from "react";


const ClientInfo = ({create,infoToCreate}) => {

  //objeto vazio para os inputs
  const client = {
    id: 0,
    nome: '',
    cpf_cnpj: '',
    email: '',
    endereco: '',
    contato: ''
  }

  const [clients, setClients] = useState([]);
  const [objClient, setObjClient] = useState(client);

  const onInputChange = (e) => {
    setObjClient({...objClient, [e.target.name]: e.target.value});
  }

  const cleanForm = ()=>{
    setObjClient(client);
  }
  const cadastrar = () => {
    fetch('http://localhost:8080/clients', {
      method: "post",
      body: JSON.stringify(objClient),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(retorno => retorno.json())
        .then(retorno_convetido => {

          alert("Cliente Cadastrado com Sucesso");
          cleanForm();
        })
  }

  return (
      <section>
        <div className="container route border border-0 rounded p-3 m-0 newClient">
          {create ?
              <div className="fw-semibold mb-3">
                Novo Cliente <img src={newUser} alt="Cadastrar novo Cliente"/>
              </div>
              :
              <div className="d-flex w-auto justify-content-between">
                <div className="d-inline-flex align-items-center gap-2">
                  <img src={userchecked} alt="" className=""/>
                  <p className="fw-semibold w-100 text-start mb-0">Nome Completo do Cliente</p>
                  <div className="p-0"><Id service={true}/></div>
                  <button className="btn btn-sm d-flex align-items-center border-0">
                    <img src={edit}/>
                  </button>
                </div>
                <div>
                  <ButtonDelete type="Excluir" description="Excluir"/>
                </div>
              </div>}
          <div className="container d-flex align-items-baseline p-2  justify-content-start row textSizeSm">
            <div className="d-block w-25  col">
              <span className="d-block">Nome:</span>
              <input type="text" className="input-group-sm border-success border-opacity-25 rounded-1 w-100"
                      onChange={onInputChange} name="nome" value={objClient.nome}
              />
            </div>
            <div className="d-block w-25  col">
              <span className="d-block">CPF/CNPJ:</span>
              <input type="text" className="input-group-sm border-success border-opacity-25 rounded-1 w-100"
                     onChange={onInputChange} name="cpf_cnpj" maxLength="11" value={objClient.cpf_cnpj}/>
            </div>
            <div className="d-block w-25  col">
              <span className="d-block">Email:</span>
              <input type="text" className="input-group-sm border-success border-opacity-25 rounded-1 w-100"
                     onChange={onInputChange} name="email" value={objClient.email}/>
            </div>
          </div>
          <div className="container d-flex align-items-baseline p-2 gap-2 justify-content-start  textSizeSm">
            <div className="d-block w-25  ">
              <span className="d-block">Endereço:</span>
              <input type="text" className="input-group-sm border-success border-opacity-25 rounded-1 w-100"
                     onChange={onInputChange} name="endereco" value={objClient.endereco}/>
            </div>
            <div className="d-block w-25  ">
              <span className="d-block">Contato:</span>
              <input type="text" className="input-group-sm border-success border-opacity-25 rounded-1 w-100"
                     onChange={onInputChange} name="contato" value={objClient.contato}/>
            </div>
            {!create ?
                <div className="d-block w-25  ">
                  <span className="d-block">Cliente Desde:</span>
                  <input type="text" className="input-group-sm border-success border-opacity-25 rounded-1 w-100"/>
                </div>
                :
                <></>}
          </div>
          {create ?
              <div className="container p-2">
                <ButtonAction props1="Cadastrar" props2="Cancelar" action={cadastrar}/>
              </div>
              :
              <></>}
        </div>
        {!create ?
            <div className="container route border border-0 rounded p-0 m-2 mt-5">
              <div className="d-flex justify-content-between mb-2">
                <h4 className="fw-semibold">Histórico</h4>
                <ButtonDelete type="Printer" description="Imprimir"/>
              </div>
              <div>
                <ClientHistory/>
              </div>
            </div>
            : <></>}
      </section>
  )
}
export default ClientInfo