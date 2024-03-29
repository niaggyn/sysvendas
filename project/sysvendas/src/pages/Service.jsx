import {Link, Outlet} from 'react-router-dom'

import "../styles/pages/service.sass"

import CollabInfo from "../components/CollabInfo.jsx";
import {useState} from "react";


const Service = () => {

  const [changePage,setChangePage] = useState(true);


  const handleSalesFunctions =()=>{
    setChangePage(!changePage);
  }

  return (
      <section className="container-fluid d-block p-0">
        <div className="container-fluid p-0">
          <CollabInfo/>
        </div>
        <div className="d-flex container mt-3 p-2">
          <button className="btn fw-bold border border-2 rounded button1 text-start p-2 justify-content-center"
                  onClick={handleSalesFunctions}
          >
            <Link to="/service/budgetService">Orçamento</Link>
          </button>
          <button className="btn fw-bold border border-2 rounded button2 text-start p-2 "
                  onClick={handleSalesFunctions}
          >
            <Link to="/service/historyService">Histórico</Link></button>
        </div>
        <div className="route w-100 min-vh-100 Service">
          <Outlet/>
        </div>
      </section>

  )
}
export default Service;