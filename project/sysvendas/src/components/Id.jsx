import id from "../assets/svg/id.svg"

const Id = () => {
  return(
      <>
          <div className="d-flex container-fluid align-items-center" style={{height:43 + "px"}}>
              <img src={id}/>
              <span className="p-0 m-0 h-50 justify-content-center align-content-center border border-3 rounded">
                  <p className="h-50 text-muted fw-normal ">00000</p>
              </span>
          </div>
      </>
  )
}
export default Id;