import newUser from "../../assets/svg/newUser.svg";
import userchecked from "../../assets/svg/user-checked.svg"
import edit from "../../assets/svg/edit.svg"

import "../../styles/pages/clients.sass"
import ButtonAction from "../ButtonAction.jsx";
import Id from "../Id.jsx";
import ButtonDelete from "../ButtonDelete.jsx";
import ClientHistory from "./ClientHistory.jsx";


const ClientInfo = ({create}) => {
  return (
      <section>
        <div className="container route border border-0 rounded p-3 m-2 newClient">
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
              <input type="text" className="input-group-sm border-success border-opacity-25 rounded-1 w-100"/>
            </div>
            <div className="d-block w-25  col">
              <span className="d-block">CPF/CNPJ:</span>
              <input type="text" className="input-group-sm border-success border-opacity-25 rounded-1 w-100"/>
            </div>
            <div className="d-block w-25  col">
              <span className="d-block">Email:</span>
              <input type="text" className="input-group-sm border-success border-opacity-25 rounded-1 w-100"/>
            </div>
          </div>
          <div className="container d-flex align-items-baseline p-2 gap-2 justify-content-start  textSizeSm">
            <div className="d-block w-25  ">
              <span className="d-block">Endereço:</span>
              <input type="text" className="input-group-sm border-success border-opacity-25 rounded-1 w-100"/>
            </div>
            <div className="d-block w-25  ">
              <span className="d-block">Contato:</span>
              <input type="text" className="input-group-sm border-success border-opacity-25 rounded-1 w-100"/>
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
                <ButtonAction props1="Cadastrar" props2="Cancelar"/>
              </div>
              :
              <></>}
        </div>
        {!create ?
            <div className="container route border border-0 rounded p-0 m-2 mt-3">
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