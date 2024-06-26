import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="back-to-top">
        <p>Back to top</p>
      </div>
      <div className="footer-content">
        <div className="inner-footer-content">
          <h2>Get to Know Us</h2>
          <p>About Us</p>
          <p>Careers</p>
          <p>Press Releases</p>
          <p>Amazon Science</p>
        </div>
        <div className="inner-footer-content">
          <h2>Connect with Us</h2>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
        <div className="inner-footer-content">
          <h2>Make Money with Us</h2>
          <p>Sell on Amazon</p>
          <p>Sell under Amazon Accelerator</p>
          <p>Protect and Build Your Brand</p>
          <p>Amazon Global Selling</p>
          <p>Become an Affiliate</p>
          <p>Fulfilment by Amazon</p>
          <p>Advertise Your Products</p>
          <p>Amazon Pay on Merchants</p>
        </div>
        <div className="inner-footer-content">
          <h2>Let Us Help You</h2>
          <p>COVID-19 and Amazon</p>
          <p>Your Account</p>
          <p>100% Purchase Protection</p>
          <p>Amazon App Download</p>
          <p>Help</p>
        </div>
      </div>
      <hr />
      <div className="footer-secondary">
        <div className="inner-footer-secondary">
          <div className="icon-container">
            <img
              src="https://www.pngall.com/wp-content/uploads/15/Amazon-Logo-White-Transparent.png"
              alt=""
            />
          </div>
          <div className="language-container"></div>
        </div>
        <div className="locations-container">
          <p>Australia</p>
          <p>Brazil</p>
          <p>Canada</p>
          <p>France</p>
          <p>Germany</p>
          <p>Italy</p>
          <p>Japan</p>
          <p>Mexico</p>
          <p>Netherlands</p>
          <p>Poland</p>
          <p>Singapore</p>
          <p>Spain</p>
          <p>Turkey</p>
          <p>United Arab Emirates</p>
          <p>United Kingdom</p>
          <p>United States</p>
        </div>

      </div>
        <div className="footer-tertiary">
          <div className="footer-tertiary-grid-container">
            <div className="grid-items">
              <h6>AbeBooks</h6>
              <p>Books,art & collectibles</p>
            </div>
            <div className="grid-items">
              <h6>Amazon Web Services</h6>
              <p>Scalable Cloud Computing Services </p>
            </div>
            <div className="grid-items">
              <h6>Audible</h6>
              <p>Download
              Audio Books</p>
            </div>
            <div className="grid-items">
              <h6>Shopbop</h6>
              <p>Designer
              Fashion Brands</p>
            </div>
            <div className="grid-items">
              <h6>	IMDb</h6>
              <p>Movies, TV
              & Celebrities</p>
            </div>
            <div className="grid-items">
              <h6>Amazon Business</h6>
              <p>Everything For
              Your Business</p>
            </div>
            <div className="grid-items">
              <h6>	Prime Now</h6>
              <p>2-hour delivery on Everyday items</p>
            </div>
            <div className="grid-items">
              <h6>Amazon Prime Music</h6>
              <p>100 million songs, ad-free
              Over 15 million podcast episodes</p>
            </div>
          </div>
        </div>
    </>
  );
};

export default Footer;
