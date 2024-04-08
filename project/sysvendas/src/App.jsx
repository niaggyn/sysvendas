import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import "./styles/app.scss";

import Navbar from "./components/Navbar.jsx";
import HeaderNavbar from "./components/HeaderNavbar.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Sales from "./pages/Sales.jsx";
import SalesBudget from "./components/sales/SalesBudget.jsx";
import SalesHistory from "./components/sales/SalesHistory.jsx";
import Service from "./pages/Service.jsx";
import ServiceBudget from "./components/service/ServiceBudget.jsx";
import ServiceHistory from "./components/service/ServiceHistory.jsx";


const App = () => {
    //const [count, setCount] = useState(0)
    return (
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
                <div className="route container-fluid w-100 content border-0 rounded m-2">
                    <Routes>
                        <Route exact path="/" element={<Dashboard/>}></Route>
                        <Route exact path="/sales" element={<Sales/>}>
                            <Route index path="budgetSales" element={<SalesBudget/>}/>
                            <Route path="historySales" element={<SalesHistory/>}/>
                        </Route>
                        <Route exact path="/service" element={<Service/>}>
                            <Route index path="budgetService" element={<ServiceBudget/>}/>
                            <Route path="historyService" element={<ServiceHistory/>}/>
                        </Route>
                    </Routes>
                </div>
            </section>
        </Router>
    )
}

export default App;
