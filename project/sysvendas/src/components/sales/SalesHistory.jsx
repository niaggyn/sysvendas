import FindInput from "../FindInput.jsx";
import ButtonAction from "../ButtonAction.jsx";
import CollabInfo from "../CollabInfo.jsx";
import SalesHistoryTable from "./SalesHistoryTable.jsx";

const SalesHistory = () => {

  const ID = "ID";
  const colaborador = "Colaborador";
  const data = "Data";

  return(
      <>
        <div className="container d-block border border-2 min-w-100 vh-100 rounded Window">
          <div className="d-inline-flex w-100 mb-2">
            <FindInput codigo="Buscar Venda:" tipo1={ID} tipo2={colaborador} tipo3={data} history={true} select={true}/>
            <CollabInfo info="true"/>
          </div>
          <div className="mt-3">
            <SalesHistoryTable resume={true} detail={true}/>
          </div>
          <div className="mt-3">
            <ButtonAction props1="Nova Busca" props2="Cancelar" printer={true}/>
          </div>
        </div>
      </>
  )
}
export default SalesHistory