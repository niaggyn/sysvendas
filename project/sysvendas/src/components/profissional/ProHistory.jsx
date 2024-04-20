import SalesHistoryTable from "../sales/SalesHistoryTable.jsx";
import ServiceHistoryTable from "../service/ServiceHistoryTable.jsx";

const ProHistory = () => {
  return(
      <section>
        <div className="container border border-1 rounded shadow-sm h-auto p-0 mb-3">
          <div className="clientSale">
            <h5 className="text-white fw-normal p-2">Últimas Vendas</h5>
          </div>
          <div>
            <SalesHistoryTable resume={false} detail={false}/>
          </div>
        </div>
        <div className="container border border-1 rounded shadow-sm h-auto p-0">
          <div className="clientService">
            <h5 className="text-white fw-normal p-2">Últimos Serviços</h5>
          </div>
          <div>
            <ServiceHistoryTable resume={false} detail={false}/>
          </div>
        </div>
      </section>

  )
}
export default ProHistory