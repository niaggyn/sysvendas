import FindInput from "../FindInput.jsx";
import SalesBudgetTable from "./SalesBudgetTable.jsx";
import ButtonAction from "../ButtonAction.jsx";

const SalesBudget = () => {

  const ID = "ID";
  const produto = "Produto";
  const marca = "Marca";

  return (
      <div className="container d-block border border-2 min-w-100 vh-100 rounded Window">
        <div className="d-inline-flex w-100 align-items-center">
          <FindInput codigo="Buscar Item:" tipo1={ID} tipo2={produto} tipo3={marca} history={false} select={true}/>
        </div>
        <div className="mt-3">
          <SalesBudgetTable/>
        </div>
        <div className="mt-3">
          <ButtonAction props1="Confirmar" props2="Cancelar"/>
        </div>
      </div>
  )
}
export default SalesBudget