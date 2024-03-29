import DateAndTime from "../components/DateAndTime.jsx";
import "../styles/pages/dashboard.sass"
import Id from "../components/Id.jsx";


const Dashboard = ()=>{
    return(
        <section>
            <div>
                <DateAndTime/>
            </div>
            <div className="container-fluid BemVindo ">
                <p className="mb-0">Seja Bem-Vindo</p>
                <div className="d-flex">
                    <h3>Usuário</h3>
                    <Id/>
                </div>
            </div>
          <div className="dashboard min-vh-100"></div>
        </section>
    )
}
export default Dashboard;