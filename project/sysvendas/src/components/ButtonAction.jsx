import check from "../assets/svg/check.svg"
import cancel from "../assets/svg/cancel.svg"
import print from "../assets/svg/printer.svg"

import "../styles/components/buttonAction.sass"


const ButtonAction = ({props1, props2, printer}) => {

  return (
      <section className="d-flex justify-content-between">
        <div>
          {printer ?
              <button className="btn d-flex align-items-center border border-2 buttonStyle">
                <img src={print}/>
                <p className="p-2 m-0 fw-bold">Gerar Resumo</p>
              </button>
              :
              <div></div>}
        </div>

        <div className="d-flex gap-2">
          <button className="btn d-flex align-items-center border border-2">
            <img src={check}/>
            <p className="p-2 m-0 fw-bold">{props1}</p>
          </button>
          <button className="btn d-flex align-items-center border border-2">
            <img src={cancel}/>
            <p className="p-2 m-0 fw-bold">{props2}</p>
          </button>
        </div>

      </section>
  )
}
export default ButtonAction