import React from "react";
import "./seven.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck,faTimes } from "@fortawesome/free-solid-svg-icons";

const Seven = () => {
  return (
    <section className="scsvn" id="sc7">
      <h2>Start eating healthy today</h2>
      <div className="row parr">
        <div className="col-md-4 anmtion-card">
          <div className="frs">
            <h3>Premium</h3>
            <p className="plan-price">
              $399
              <span> / month</span>
            </p>
            <p>That's only 13.30$ per meal</p>
          </div>
<div className="scnd">
<ul>
    <li> 
        <FontAwesomeIcon icon={faCheck}  style={{ color: "green", fontSize: "24px" }}  size="2x"/>
    1 meal every day
    </li>
    <li> 
        <FontAwesomeIcon icon={faCheck}  style={{ color: "green", fontSize: "24px" }}  size="2x"/>
        Order 24/7
    </li>
    <li> 
        <FontAwesomeIcon icon={faCheck}  style={{ color: "green", fontSize: "24px" }}  size="2x"/>
        Access to newest creations
    </li>
    <li> 
        <FontAwesomeIcon icon={faCheck}  style={{ color: "green", fontSize: "24px" }}  size="2x"/>
        Free delivery
    </li>
</ul>
</div>
<div className="trd">
<button className="difbt">sign up now</button>
</div>
        </div>
        <div className="col-md-4">
          <div className="frs">
            <h3>pro</h3>
            <p className="plan-price">
            $149
              <span> / month</span>
            </p>
            <p>That's only 14.90$ per meal</p>
          </div>
<div className="scnd">
<ul>
    <li> 
        <FontAwesomeIcon icon={faCheck}  style={{ color: "green", fontSize: "24px" }}  size="2x"/>
        1 meal 10 days/month
    </li>
    <li> 
        <FontAwesomeIcon icon={faCheck}  style={{ color: "green", fontSize: "24px" }}  size="2x"/>
        Order 24/7
    </li>
    <li> 
        <FontAwesomeIcon icon={faCheck}  style={{ color: "green", fontSize: "24px" }}  size="2x"/>
        Access to newest creations
    </li>
    <li> 
        <FontAwesomeIcon icon={faCheck}  style={{ color: "green", fontSize: "24px" }}  size="2x"/>
        Free delivery
    </li>
</ul>
</div>
<div className="trd">
<button className="sembt">sign up now</button>
</div>
        </div>
        <div className="col-md-4">
          <div className="frs">
            <h3>starter</h3>
            <p className="plan-price">
            19$
              <span> / month</span>
            </p>
          <p></p>
          </div>
<div className="scnd">
<ul>
    <li> 
        <FontAwesomeIcon icon={faCheck}  style={{ color: "green", fontSize: "24px" }}  size="2x"/>
        1 meal
    </li>
    <li> 
        <FontAwesomeIcon icon={faCheck}  style={{ color: "green", fontSize: "24px" }}  size="2x"/>
        Order from 8 am to 12 pm
    </li>
    <li> 
        <FontAwesomeIcon icon={faTimes}  style={{ color: "green", fontSize: "24px" }}  size="2x"/>
        Access to newest creations
    </li>
    <li> 
        <FontAwesomeIcon icon={faCheck}  style={{ color: "green", fontSize: "24px" }}  size="2x"/>
        Free delivery
    </li>
</ul>
</div>
<div className="trd">
<button className="sembt">sign up now</button>
</div>
        </div>
      </div>
    </section>
  );
};
export default Seven;
