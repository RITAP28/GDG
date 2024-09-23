import React from "react";
import "./YourComponent.css"; // Make sure to include the CSS separately

const YourComponent = () => {
  return (
    <div className="void" id="void">
      <div className="crop">
        <ul id="card-list" style={{ "--count": 6 }}>
          <li>
            <div className="card">
              <a href="#">
                <span className="model-name">Gretel-ACTGAN</span>
                <span>
                  Model for generating highly dimensional, mostly numeric,
                  tabular data
                </span>
              </a>
            </div>
          </li>
          <li>
            <div className="card">
              <a href="#">
                <span className="model-name">Gretel-ACTGAN</span>
                <span>
                  Model for generating highly dimensional, mostly numeric,
                  tabular data
                </span>
              </a>
            </div>
          </li>
          <li>
            <div className="card">
              <a href="#">
                <span className="model-name">Gretel-ACTGAN</span>
                <span>
                  Model for generating highly dimensional, mostly numeric,
                  tabular data
                </span>
              </a>
            </div>
          </li>
          <li>
            <div className="card">
              <a href="#">
                <span className="model-name">Gretel-ACTGAN</span>
                <span>
                  Model for generating highly dimensional, mostly numeric,
                  tabular data
                </span>
              </a>
            </div>
          </li>
          <li>
            <div className="card">
              <a href="#">
                <span className="model-name">Gretel-ACTGAN</span>
                <span>
                  Model for generating highly dimensional, mostly numeric,
                  tabular data
                </span>
              </a>
            </div>
          </li>
          <li>
            <div className="card">
              <a href="#">
                <span className="model-name">Gretel-ACTGAN</span>
                <span>
                  Model for generating highly dimensional, mostly numeric,
                  tabular data
                </span>
              </a>
            </div>
          </li>
        </ul>
        <div className="last-circle"></div>
        <div className="second-circle"></div>
      </div>
      <div className="mask"></div>
      <div className="center-circle"></div>
    </div>
  );
};

export default YourComponent;
