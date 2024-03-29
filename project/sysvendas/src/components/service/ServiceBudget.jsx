import FindInput from "../FindInput.jsx";
import ServiceBudgetTable from "./ServiceBudgetTable.jsx";
import ButtonAction from "../ButtonAction.jsx";

const ServiceBudget = () => {
  return (
      <div className="container d-block border border-2 min-w-100 vh-100 rounded Window">
        <div className="d-inline-flex w-100 align-items-center">
          <FindInput codigo="Código da Venda:"/>
        </div>
        <ServiceBudgetTable/>
        <ButtonAction props1="Finalizar" props2="Cancelar"/>
      </div>
  )
}
export default ServiceBudget