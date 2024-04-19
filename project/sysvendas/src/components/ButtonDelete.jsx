import del from "../assets/svg/delete.svg"
import printer from "../assets/svg/printer.svg"

import "../styles/components/buttonAction.sass"


const ButtonDelete = ({type,description}) => {

  let style = type;

  if(type==="Excluir"){
    style = true
  }else{
    style = false
  }

  return (
      <section className="d-flex justify-content-between">
        <button className="btn btn-sm d-flex align-items-center border-0 buttonDelete">
          {style ?
              <img src={del}/>
              :
              <img src={printer}/>
          }
          <p className="p-2 m-0 fw-semibold">{description}</p>
        </button>
      </section>
  )
}
export default ButtonDelete