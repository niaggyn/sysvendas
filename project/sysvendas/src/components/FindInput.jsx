
import plus from "../assets/svg/plus.svg"

import "../styles/components/fileInput.sass"

const FindInput = ({codigo}) => {
    return(
        <div className="d-block m-3">
            <span className="fs-6 fst-normal">{codigo}</span><br/>
          <div className="d-inline-flex align-items-baseline">
            <input placeholder="Insira o código" className="input mt-2"/>
            <button className="buttonSearch">
              <img src={plus}/>
            </button>
          </div>
        </div>
    )
}
export default FindInput