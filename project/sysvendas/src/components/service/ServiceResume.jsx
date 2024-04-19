const SaleResume = () => {
  return (
      <div className="container d-flex textSizeSm p-0">
        <div className="container d-flex align-items-baseline p-0 gap-2">
          <div className="d-block w-25 shadow-sm">
            <span className="d-block">Nome:</span>
            <input type="text" className="input-group-sm border-success border-opacity-25 rounded-1 w-100"/>
          </div>
          <div className="d-block shadow-sm">
            <span className="d-block">Data:</span>
            <input type="date" className="input-group-sm border-success border-opacity-25 rounded-1"/>
          </div>
          <div className="d-block shadow-sm">
            <span className="d-block">Horário:</span>
            <input type="time" className="input-group-sm border-success border-opacity-25 rounded-1"/>
          </div>
        </div>
        <div className="d-block">
          <span>Valor Total :</span>
          <input type="text" className="input-group-sm border-success border-opacity-25 rounded-1 w-100"
                 disabled={true}
                 placeholder="R$ 000,00"
          />
        </div>
      </div>
  )
}
export default SaleResume;