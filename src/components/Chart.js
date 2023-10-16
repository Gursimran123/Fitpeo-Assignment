import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Chart = ({aspect}) => {
    const data = [
      {
        name: "Jan",
        Total: 1200,
        
      },
      {
        name: "Feb",
        Total: 1000,
        
      },
      {
        name: "Mar",
        Total: 1600,
        
      },
      {
        name: "Apr",
        Total: 1400,
        
      },
      {
        name: "May",
        Total: 1500,
        
      },
      {
        name: "Jun",
        Total: 600,
        
      },
      {
        name: "Jul",
        Total: 1500,
        
      },
      {
        name: "Aug",
        Total: 1800,
        
      },
      {
        name: "Sept",
        Total: 1600,
       
      },
      {
        name: "Oct",
        Total: 1400,
        
      },
      {
        name: "Nov",
        Total: 1200,
        
      },
      {
        name: "Dec",
        Total: 1400,
       
      },
    ];

  return (
    <div>
      <section className="chart-container">
        <div className="chart1">
          <div className="chart1-content">
            <h2>Overview</h2>
            <div className="select">
              <label>Quarterly</label>
              <FontAwesomeIcon icon={faAngleDown} className="icon-arrowdown" />
            </div>
          </div>
          <p>Monthly Earning</p>
          <ResponsiveContainer width="100%" >
            <BarChart
              width={730}
              height={250}
              data={data}
              margin={{ top: 0, left: -5,bottom:10 }}
            >
              <XAxis dataKey="name" axisLine={false} stroke='#222'/>
              <Bar dataKey="Total" fill="blue" radius={8} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="chart2">
          <div className="chart2-content">
            <h2>Customers</h2>
            <p>Customers that buy products</p>
            
            <div className="featured-chart">
              <div className="custom-progress-bar">
              
                <CircularProgressbar
                  value={60}
                  text={"65%"}
                  strokeWidth={15}
                  styles={buildStyles({
                    pathColor: "purple",
                    trailColor: "#f9f9f9",
                    strokeLinecap: "butt",
                    textSize: "12px",
                    textColor: "#222",
                  })}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Chart