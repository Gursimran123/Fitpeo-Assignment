import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBagShopping, faDashboard, faGear, faKey, faMessage, faUser, faWallet } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import img1 from '../images/img1.png';

const Sidebar = ({open}) => {
    const [active,setActive]=useState(true);
    const handleactive =()=>{
        setActive((prev)=>!prev);
    }
  return (
    <div>
      <aside className={`aside ${open ? "visible" : ""}`}>
        <div className="side">
          <div className="upper-side">
            <FontAwesomeIcon icon={faDashboard} className="icon-gear" />
            <h2 className="logo">Dashboard</h2>
          </div>
          <ul className="lower-side">
            <li onClick={handleactive} className={active ? "active" : ""}>
              <span>
                <FontAwesomeIcon icon={faKey} className="icon-display" />
                Dashboard
              </span>
            </li>
            <li>
              <span>
                <FontAwesomeIcon
                  icon={faBagShopping}
                  className="icon-display"
                />
                Products
              </span>
              <FontAwesomeIcon icon={faAngleRight} className="icon-arrow" />
            </li>
            <li>
              <span>
                <FontAwesomeIcon icon={faUser} className="icon-display" />
                Customers
              </span>
              <FontAwesomeIcon icon={faAngleRight} className="icon-arrow" />
            </li>
            <li>
              <span>
                <FontAwesomeIcon icon={faWallet} className="icon-display" />
                Income
              </span>
              <FontAwesomeIcon icon={faAngleRight} className="icon-arrow" />
            </li>
            <li>
              <span>
                <FontAwesomeIcon icon={faGear} className="icon-display" />
                Promote
              </span>
              <FontAwesomeIcon icon={faAngleRight} className="icon-arrow" />
            </li>
            <li>
              <span>
                <FontAwesomeIcon icon={faMessage} className="icon-display" />
                Help
              </span>
              <FontAwesomeIcon icon={faAngleRight} className="icon-arrow" />
            </li>
          </ul>
        </div>
        <div className="side2">
          <div className="content-container active">
            <img src={img1} alt="" />
            <div className="content">
              <h4>Evano</h4>
              <p>Project Manager</p>
            </div>
            <FontAwesomeIcon icon={faAngleDown} className="icon-arrowdown" />
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar