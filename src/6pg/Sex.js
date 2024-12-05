import React from "react";
import "./Sex.css";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Sex = () => {
  return (
    <section className="scsex">
  <div className="parent-sx">
    <h2>Our customers can't live without us</h2>
  </div>

  <div className="row">
    <div className="col-md-4 col-sm-6 col-12 parent-all frst">
      <FontAwesomeIcon icon={faQuoteLeft} />
      <div className=" ">
        Omnifood is just awesome! I just launched a startup which leaves me
        with no time for cooking, so Omnifood is a life-saver. Now that I
        got used to it, I couldn't live without my daily meals!
        <div className="parent-sex">
          <img
            src="https://omn-alpha.netlify.app/resources/img/customer-1.jpg"
            alt="s"
          />
          Alberto Duncan
        </div>
      </div>
    </div>

    <div className="col-md-4 col-sm-6 col-12 parent-all">
      <FontAwesomeIcon icon={faQuoteLeft} />
      <div className=" ">
        Inexpensive, healthy and great-tasting meals, delivered right to my home. We have lots of food delivery here in Lisbon, but no one comes even close to Omifood. Me and my family are so in love!
        <div className="parent-sex">
          <img
            src="https://omn-alpha.netlify.app/resources/img/customer-2.jpg"
            alt="s"
          />
          Alberto Duncan
        </div>
      </div>
    </div>

    <div className="col-md-4 col-sm-6 col-12 parent-all">
      <FontAwesomeIcon icon={faQuoteLeft} />
      <div className=" ">
        I was looking for a quick and easy food delivery service in San Francisco. I tried a lot of them and ended up with Omnifood. Best food delivery service in the Bay Area. Keep up the great work!
        <div className="parent-sex">
          <img
            src="https://omn-alpha.netlify.app/resources/img/customer-3.jpg"
            alt="s"
          />
          Alberto Duncan
        </div>
      </div>
    </div>
  </div>
</section>

  );
};
export default Sex;
