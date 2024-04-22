import DateAndTime from "../components/DateAndTime.jsx";
import "../styles/pages/dashboard.sass"
import Id from "../components/Id.jsx";


const Dashboard = ()=>{
    return(
        <section className="container m-0 p-0 min-vh-100 dashboard">
          <div className="d-flex justify-content-between">
            <div className="d-block justify-content-start m-4">
              <p className="mb-0">Seja Bem-Vindo</p>
              <div className="d-flex">
                <h3>Usuário</h3>
                <Id/>
              </div>
            </div>
            <div className="justify-content-end">
              <DateAndTime/>
            </div>
          </div>
        </section>
    )
}
export default Dashboard;