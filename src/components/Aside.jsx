import React, { useState } from "react";
import "../css/aside_module.css";

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
              <a className="links-icon-aside" href="">
                <i class="bx bx-home"></i>  
              </a>
              <a className="links-nav-aside" href="">
                Inicio
              </a>
            </li>
            <li className="li-nav-aside">
              <a className="links-icon-aside" href="">
                <i class="bx bxs-bank"></i>  
              </a>
              <a className="links-nav-aside" href="">
                Inventario
              </a>
            </li>
            <li className="li-nav-aside">
              <a className="links-icon-aside" href="">
                <i class="bx bx-dollar-circle"></i>  
              </a>
              <a className="links-nav-aside" href="">
              Venta
              </a>
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
