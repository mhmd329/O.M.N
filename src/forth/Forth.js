import React from "react";
import "./Forth.css";

const Forth = () => {
  return (
    <section className="sc4" id="sc4">
      <h2>How it works — Simple as 1, 2, 3</h2>
      <div className="row">
        <div className="col-6 mobile-parent">
          <img
            src="https://omn-alpha.netlify.app/resources/img/app-iPhone.png"
            alt="s"
            className="mobile"
          />
        </div>
        <div className="col-md-6 ">
          <div className="steps">
            <div className="rakm">1</div>
            <p>
              Choose the subscription plan that best fits your needs and sign up
              today
            </p>
          </div>
          <div className="steps">
            <div className="rakm">2</div>
            <p>
            Order your delicious meal using our mobile app or website. Or you can even call us!
            </p>
          </div>
          <div className="steps">
            <div className="rakm">3</div>
            <p>
            Enjoy your meal after less than 20 minutes. See you the next time!


            </p>
            
          </div>
         
            <a href="#"  className="btn-app"> 
            <img
            src="https://omn-alpha.netlify.app/resources/img/download-app.svg"
            alt="s"
            className="first-img" 
            />
          </a>
          <a href="#" className="btn-app" > 
            <img
            src="https://omn-alpha.netlify.app/resources/img/download-app-android.png"
            alt="s" 
             className="sec-img"
            />
          </a>
          
          
        </div>
      </div>
    </section>
  );
};
export default Forth;
