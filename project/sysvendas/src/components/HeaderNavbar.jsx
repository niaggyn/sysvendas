import "../styles/components/headerNavbar.sass"

import superuser from "../assets/svg/superuser.svg"
const HeaderNavbar = () => {
  return(
      <div className="header align-items-center d-flex justify-content-center m-0 ">
          <img src={superuser} className="w-20"/>
          <p className="text-white p-2">Usuário</p>
      </div>
  )
}
export default HeaderNavbar;