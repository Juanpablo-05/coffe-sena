import React, { useState } from "react";
import "../css/aside_module.css";
import { Link } from "react-router-dom";

function Aside() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <aside className={menu ? `aside open` : `aside`}>

      <div className={menu ? `container-aside-top open` : `container-aside-top`} >

        <div className="menu" onClick={toggleMenu}>
          <div className="barra"></div>
          <div className="barra"></div>
          <div className="barra"></div>
        </div>

        <div className="title-aside">
          <i className='bx bxs-coffee-alt'></i>
          <h1>Coffee</h1>
        </div>

        <nav className="nav-aside">
          <ul className="ul-aside">
            <li className="li-nav-aside">
              <Link to={"/inicio"} className="links-icon-aside" >
                {/* <i class="bx bx-home"></i>   */}
              </Link>
              <Link className="links-nav-aside" to={"/inicio"}>
                Inicio
              </Link>
            </li>
            <li className="li-nav-aside">
              <Link className="links-icon-aside" to={"/inventario"}>
                {/* <i class="bx bxs-bank"></i>   */}
              </Link>
              <Link className="links-nav-aside" to={"/inventario"}>
                Inventario
              </Link>
            </li>
            <li className="li-nav-aside">
              <link className="links-icon-aside" to={"/venta"}>
                {/* <i class="bx bx-dollar-circle"></i>   */}
              </link>
              <Link className="links-nav-aside" to={"/venta"}>
                Venta
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="container-aside-bottom">
        <div className="organize">
          <div className="container-aside-img-rol">
            <div className="container-img-aside">
              <img src="" alt="" />
            </div>
            <span>Admin</span>
            </div>
            <div className="container-buttom-leave">
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </div>
          </div>
      </div>

    </aside>
  );
}

export default Aside;
