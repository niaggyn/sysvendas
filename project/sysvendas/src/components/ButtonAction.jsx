import check from "../assets/svg/check.svg"
import cancel from "../assets/svg/cancel.svg"
import print from "../assets/svg/printer.svg"

import "../styles/components/buttonAction.sass"


const ButtonAction = ({props1, props2, printer}) => {

  return (
      <section className="d-flex justify-content-between mt-3">
        <div>
          {printer ?
              <button className="btn btn-sm d-flex align-items-center border-0 buttonPrinter">
                <img src={print}/>
                <p className="p-2 m-0 fw-semibold">Gerar Resumo</p>
              </button>
              :
              <div></div>}
        </div>

        <div className="d-flex gap-2 m-1">
          <button className="btn btn-sm d-flex align-items-center border-0 buttonConfirm"
                  type="button"
            >
            <img src={check}/>
            <p className="p-2 m-0 fw-semibold text-white">{props1}</p>
          </button>
          <button className="btn btn-sm d-flex align-items-center border-0 buttonCancel "
            type="button">
            <img src={cancel}/>
            <p className="p-2 m-0 fw-semibold">{props2}</p>
          </button>
        </div>

      </section>
  )
}
export default ButtonAction