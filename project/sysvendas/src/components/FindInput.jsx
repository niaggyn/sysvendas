
import plus from "../assets/svg/plus.svg"

import "../styles/components/fileInput.sass"

const FindInput = ({codigo}) => {
    return(
        <div className="d-block m-1 mb-3">
          <div className="mb-0">
            <span className="textSizeSm fst-normal mb-0">{codigo}</span>
          </div>
          <div className="d-inline-flex align-items-baseline gap-2">
            <select className="form-select selectDefault text-white text-center" aria-label="Default select example">
              <option selected>ID</option>
              <option value="1">Produto</option>
              <option value="2">Marca</option>
            </select>
            <input placeholder="Insira o código" className="input input-group-sm rounded"/>
            <button className="buttonSearch">
              <img src={plus}/>
            </button>
          </div>
        </div>
    )
}
export default FindInput