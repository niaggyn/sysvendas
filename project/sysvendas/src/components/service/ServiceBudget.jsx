import FindInput from "../FindInput.jsx";
import ServiceBudgetTable from "./ServiceBudgetTable.jsx";
import ButtonAction from "../ButtonAction.jsx";

const ServiceBudget = () => {

  const ID = "ID";
  const service = "Serviço";
  const data = "Data";

  return (
      <div className="container d-block border border-2 min-w-100 vh-100 rounded Window">
        <div className="d-inline-flex w-100 align-items-center">
          <FindInput codigo="Código do Serviço:" tipo1={ID} tipo2={service} tipo3={data} history={false} select={true}/>
        </div>
        <ServiceBudgetTable detail={true}/>
        <ButtonAction props1="Agendar" props2="Cancelar"/>
      </div>
  )
}
export default ServiceBudget