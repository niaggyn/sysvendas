import newPro from "../../assets/svg/pro2.svg";
import edit from "../../assets/svg/edit.svg"

import "../../styles/pages/clients.sass"

import ButtonAction from "../ButtonAction.jsx";
import Id from "../Id.jsx";
import ButtonDelete from "../ButtonDelete.jsx";
import ProHistory from "./ProHistory.jsx";


const ProInfo = ({create}) => {
  return (
      <section>
        <div className="container route border border-0 rounded newClient mt-4">
          {create ?
              <div className="fw-semibold mt-2 p-2">
                Novo Profissional <img src={newPro} alt="Cadastrar novo Profissional"/>
              </div>
              :
              <div className="container d-flex w-auto justify-content-between">
                <div className="d-inline-flex align-items-center gap-2">
                  <img src={newPro} alt="" className=""/>
                  <p className="fw-semibold w-100 text-start mb-0">Nome Completo do Profissional</p>
                  <div className="p-0"><Id service={true}/></div>
                  <button className="btn btn-sm d-flex align-items-center border-0">
                    <img src={edit}/>
                  </button>
                </div>
                <div className="p-2">
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
          <div className="row container d-flex align-items-baseline p-2 gap-2 justify-content-start textSizeSm">
            <div className="d-block w-25  col">
              <span className="d-block">Endereço:</span>
              <input type="text" className="input-group-sm border-success border-opacity-25 rounded-1 w-100"/>
            </div>
            <div className="d-block w-25  ">
              <span className="d-block">Contato:</span>
              <input type="text" className="input-group-sm border-success border-opacity-25 rounded-1 w-100"/>
            </div>
            {!create ?
                <div className="d-block w-25  ">
                  <span className="d-block">Nível de Acesso:</span>
                  <input type="text" className="input-group-sm border-success border-opacity-25 rounded-1 w-100"/>
                </div>
                :
                <></>}
          </div>
          <div className="row container d-flex align-items-baseline p-2 gap-2 justify-content-start textSizeSm">
            <div className="d-block w-25  ">
              <span className="d-block">Senha:</span>
              <input type="password" className="input-group-sm border-success border-opacity-25 rounded-1 w-100"/>
            </div>
            <div className="d-block w-25  ">
              <span className="d-block">Confirmar Senha:</span>
              <input type="password" className="input-group-sm border-success border-opacity-25 rounded-1 w-100"/>
            </div>
            <div className="d-block w-25  ">
              <span className="fst-normal mb-0">Nível de Acesso:</span>
              <select className="form-select form-select-sm selectDefault text-white"
                      aria-label="Default select example">
                <option selected>ADMIN</option>
                <option value="1">PRO1</option>
                <option value="2">PRO2</option>
              </select>
            </div>
            {create ?
                <div className="container p-2">
                  <ButtonAction props1="Cadastrar" props2="Cancelar"/>
                </div>
                :
                <></>}
          </div>
        </div>
        {!create ?
            <div className="container route border border-0 rounded p-0 m-0 mt-5">
              <div className="d-flex justify-content-between mb-2">
                <h4 className="fw-semibold">Histórico</h4>
                <ButtonDelete type="Printer" description="Imprimir"/>
              </div>
              <div className="container p-0">
                <ProHistory/>
              </div>
            </div>
            : <></>}

      </section>
  )
}
export default ProInfo