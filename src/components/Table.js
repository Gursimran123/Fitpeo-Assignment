import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import img1 from "../images/img1.png";

const Table = () => {
  return (
    <div>
      <div className="table-container">
        <div className="table-display">
          <div className="table-content">
            <h2>Product Sell</h2>
            <div className="right">
              <div className="input-box2">
                <FontAwesomeIcon icon={faSearch} className="icon-search2" />
                <input type="search" placeholder="Search" className="input2" />
              </div>
              <div className="select">
                <label>Last 30 days</label>
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className="icon-arrowdown"
                />
              </div>
            </div>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Stock</th>
                  <th>Price</th>
                  <th>Total Sales</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="first">
                    <img src={img1} alt="img1" />
                    <div className="content2">
                      <h2>Abstract 3D</h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                  </td>
                  <td>32 in Stock</td>
                  <td>
                    <h4>$45.99</h4>
                  </td>
                  <td>20</td>
                </tr>
                <tr>
                  <td className="first">
                    <img src={img1} alt="img1" />
                    <div className="content2">
                      <h2>Abstract 3D</h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                  </td>
                  <td>32 in Stock</td>
                  <td>
                    <h4>$45.99</h4>
                  </td>
                  <td>20</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table