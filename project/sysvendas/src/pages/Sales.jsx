import {Link, Outlet} from 'react-router-dom'

import "../styles/pages/sales.sass"


import CollabInfo from "../components/CollabInfo.jsx";
import {useState} from "react";


const Sales = () => {

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
          <button className="btn btn-sm fw-medium border border-2 rounded button1 text-start p-2 justify-content-center"
                  onClick={handleSalesFunctions}
          >
            <Link to="/sales/budgetSales">Orçamento</Link>
          </button>
          <button className="btn btn-sm fw-medium border border-2 rounded button2 text-start p-2 "
                  onClick={handleSalesFunctions}
          >
            <Link to="/sales/historySales">Histórico</Link></button>
        </div>
        <div className="route w-100 min-vh-100 Sales ">
          <Outlet/>
        </div>
      </section>

  )
}
export default Sales;