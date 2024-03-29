import Id from "./Id.jsx";
import "../styles/components/collabInfo.sass"

const CollabInfo = ({info}) => {
  return (
      <section className="container-fluid d-flex justify-content-start collabContainer align-items-center gap-2">
        <div className="d-block infoContent border-2 border-bottom">
          <p className="fs-6 text mb-0">Nome:</p>
          <div className="">
            <p className="fs-6 text mb-0 fw-bold">Usuário</p>
          </div>
        </div>
        <div className="d-block infoContent border-2 border-bottom">
          <p className="fs-6 text mb-0">Cargo:</p>
          <div className="d-flex align-baseline">
            <p className="fs-6 text mb-0 fw-bold">Gerente</p>
          </div>
        </div>
        {
          info ? <div className="d-block infoContent border-2 border-bottom">
            <p className="fs-6 text mb-0">Informações:</p>
            <div className="d-flex align-baseline">
              <p className="fs-6 text mb-0 fw-bold">23/02/2024 12:00</p>
            </div>
          </div> : <div></div>
        }
        <div className="infoContent mt-5">
          <Id/>
        </div>
      </section>
  )
}
export default CollabInfo