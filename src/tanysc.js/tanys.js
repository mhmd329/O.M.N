import React from "react";
import Navv from "./navv";
import "./tanys.css";
import Content from "./content";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStopwatch, faCarrot, faShoppingCart, faInfinity } from '@fortawesome/free-solid-svg-icons';

const Tanys = () => {
  return (
    <section>
      <Navv />
      <Content />

      <div className="row secsc">
        <div className="col-md-3  ccrd">
        <FontAwesomeIcon icon={faInfinity} className="icon" />

          <h3>Up to 365 days/year</h3>
          <p>
            Never cook again! We really mean that. Our subscription plans
            include up to 365 days/year coverage. You can also choose to order
            more flexibly if that's your style.
          </p>
        </div>
        <div className="col-md-3">
        <FontAwesomeIcon icon={faStopwatch}  className="icon" />

          <h3>Up to 365 days/year</h3>
          <p>
            Never cook again! We really mean that. Our subscription plans
            include up to 365 days/year coverage. You can also choose to order
            more flexibly if that's your style.
          </p>
        </div>
        <div className="col-md-3">
        <FontAwesomeIcon icon={faCarrot}  className="icon" />

          <h3>Up to 365 days/year</h3>
          <p>
            Never cook again! We really mean that. Our subscription plans
            include up to 365 days/year coverage. You can also choose to order
            more flexibly if that's your style.
          </p>
        </div>
        <div className="col-md-3">
        <FontAwesomeIcon icon={faShoppingCart}  className="icon"/>

          <h3>Up to 365 days/year</h3>
          <p>
            Never cook again! We really mean that. Our subscription plans
            include up to 365 days/year coverage. You can also choose to order
            more flexibly if that's your style.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Tanys;
