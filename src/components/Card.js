import { faDollar, faArrowUp, faArrowDown, faNoteSticky, faBagShopping,  faPiggyBank } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Chart from './Chart'
import Table from './Table'

const Card = () => {
  return (
    <>
      <section className='section'>
       <div className="card-container">
        <div className="card">
            <span className='img-span'>
              <FontAwesomeIcon icon={faDollar} className='icon-used dollar'/>
            </span>
            <div className="card-content">
              <h3>Earning</h3>
              <h5>$198K</h5>
              <p><span>
                <FontAwesomeIcon icon={faArrowUp}/>
                37.8%
              </span> this month.</p>
            </div>
        </div>
        <div className="card">
            <span className='img-span'>
              <FontAwesomeIcon icon={faNoteSticky} className='icon-used orders'/>
            </span>
            <div className="card-content">
              <h3>Orders</h3>
              <h5>$2.4K</h5>
              <p><span>
                <FontAwesomeIcon icon={faArrowDown}/>
                2%
              </span> this month.</p>
            </div>
        </div>
        <div className="card">
            <span className='img-span'>
              <FontAwesomeIcon icon={faPiggyBank} className='icon-used balance'/>
            </span>
            <div className="card-content">
              <h3>Balance</h3>
              <h5>$2.4K</h5>
              <p><span>
                <FontAwesomeIcon icon={faArrowDown}/>
                2%
              </span> this month.</p>
            </div>
        </div>
        <div className="card">
            <span className='img-span'>
              <FontAwesomeIcon icon={faBagShopping} className='icon-used sales'/>
            </span>
            <div className="card-content">
              <h3>Total Sales</h3>
              <h5>$89K</h5>
              <p><span>
                <FontAwesomeIcon icon={faArrowUp}/>
                11%
              </span> this month.</p>
            </div>
        </div>
       </div>
       <Chart aspect={2/1} />
       <Table />
      </section>
    </>
  )
}

export default Card