import FindInput from "../FindInput.jsx";
import ButtonAction from "../ButtonAction.jsx";
import CollabInfo from "../CollabInfo.jsx";
import ServiceHistoryTable from "./ServiceHistoryTable.jsx";

const ServiceHistory = () => {

  const ID = "ID";
  const service = "Serviço";
  const data = "Data";

  return(
      <>
        <div className="container d-block border border-2 min-w-100 vh-100 rounded Window">
          <div className="d-inline-flex w-100 align-items-center">
            <FindInput codigo="Código da Venda:" tipo1={ID} tipo2={service} tipo3={data} history={true} select={true}/>
            <CollabInfo info="true"/>
          </div>
          <ServiceHistoryTable detail={true}/>
          <ButtonAction props1="Nova Busca" props2="Cancelar" printer={true}/>
        </div>
      </>
  )
}
export default ServiceHistory