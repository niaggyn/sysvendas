import plus from "../assets/svg/plus.svg"
import listIcon from "../assets/svg/list.svg"

import "../styles/components/fileInput.sass"

const FindInput = ({codigo, tipo1, tipo2, tipo3, history, select,list}) => {
  return (
      <div className="d-block m-1 mb-3 pt-2">
        <div className="mb-0">
          <span className="textSizeSm fst-normal mb-0">{codigo}</span>
        </div>
        <div className="d-inline-flex align-items-baseline gap-2">
          {select ?
              <select className="form-select form-select-sm selectDefault text-white"
                      aria-label="Default select example">
                <option selected>{tipo1}</option>
                <option value="1">{tipo2}</option>
                <option value="2">{tipo3}</option>
              </select>
              :
              <></>
          }
          <input placeholder="Procurar" className="input input-group-sm rounded"/>
          {!history ? <button className="buttonSearch">
                <img src={plus}/>
              </button>
              :
              <></>}
          {list ? <button className="buttonList">
                <img src={listIcon}/>
              </button>
              :
              <></>}
        </div>
      </div>
  )
}
export default FindInput