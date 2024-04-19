const SaleResume = ({details}) => {
  return (
      <div className="container d-flex align-self-center justify-content-between">

        {details ?
            <div className="total d-block align-self-baseline">
              <p className="mb-0 textSizeSm">Detalhes: </p>
              <div className="d-flex justify-content-between fw-semibold">
                <p className="mb-0">Crédito</p>
                <p className="mb-0">3X</p>
                <p className="fst-italic mb-0">100,00</p>
                <p className="mb-0">cartao</p>
              </div>
            </div>
            :
            <></>
        }
        <div className="total d-inline-flex align-items-end w-auto gap-2">
          <p className="mb-0">Valor Total: </p>
          <p className="p-0 mb-0 w-auto fw-semibold">R$ 001,00</p>
        </div>

      </div>
  )
}
export default SaleResume;