import HeaderNavbar from "../components/HeaderNavbar.jsx";
import Navbar from "../components/Navbar.jsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Dashboard from "./Dashboard.jsx";
import Sales from "./Sales.jsx";
import SalesBudget from "../components/sales/SalesBudget.jsx";
import SalesHistory from "../components/sales/SalesHistory.jsx";
import Service from "./Service.jsx";
import ServiceBudget from "../components/service/ServiceBudget.jsx";
import ServiceHistory from "../components/service/ServiceHistory.jsx";
import Clients from "./Clients.jsx";
import Profissional from "./Profissional.jsx";
import Schedule from "./Schedule.jsx";

const MainPage = ({username}) => {
  return(
      <Router>
        <section className="d-flex container-fluid mainBkg p-0 ">
          <div className="d-block vh-100 start-0 asideContainer w-auto">
            <div>
              <HeaderNavbar/>
            </div>
            <div>
              <Navbar/>
            </div>
          </div>
          <div className="bar">|</div>
          <div className="route container-fluid w-100 content border-0 rounded m-2 overflow-auto p-0">
            <Routes>
              <Route exact path="/" element={<Dashboard/>}/>
              <Route exact path="/sales" element={<Sales/>}>
                <Route index path="budgetSales" element={<SalesBudget/>}/>
                <Route path="historySales" element={<SalesHistory/>}/>
              </Route>
              <Route exact path="/service" element={<Service/>}>
                <Route index path="budgetService" element={<ServiceBudget/>}/>
                <Route path="historyService" element={<ServiceHistory/>}/>
              </Route>
              <Route exact path="/clients" element={<Clients/>}/>
              <Route exact path="/pro" element={<Profissional/>}/>
              <Route exact path="/schedule" element={<Schedule/>}/>
            </Routes>
          </div>
        </section>
      </Router>
  )
}
export default MainPage;