import { Logo, PhoneIcon, EmailIcon, LocationIcon } from "../assets";
import { IconContext } from "react-icons";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa6";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <a href="#" className="FooterLogo" aria-label="huddle">
        <img src={Logo} alt="" />
      </a>
      <div className="FooterWrapper">
        <address>
          <div className="FooterWrapper-address-box">
            <img src={LocationIcon} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className="FooterWrapper-address-box">
            <img src={PhoneIcon} alt="" />
            <p>+1-543-123-4567</p>
          </div>
          <div className="FooterWrapper-address-box">
            <img src={EmailIcon} alt="" />
            <p>example@huddle.com</p>
          </div>
        </address>
        <ul>
          <li>
            <a href="#"> about us</a>
          </li>
          <li>
            <a href="#">what we do</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">career</a>
          </li>
          <li>
            <a href="#">blog</a>
          </li>
          <li>
            <a href="#">contact us</a>
          </li>
        </ul>
        <ul className="FooterWrapper-SocialIcons">
          <li>
            <a href="#">
              <IconContext.Provider value={{ className: "socialIcon" }}>
                <div>
                  <FaFacebookF />
                </div>
              </IconContext.Provider>
            </a>
          </li>
          <li>
            <a href="#">
              <IconContext.Provider value={{ className: "socialIcon" }}>
                <div>
                  <FaTwitter />
                </div>
              </IconContext.Provider>
            </a>
          </li>
          <li>
            <a href="#">
              <IconContext.Provider value={{ className: "socialIcon" }}>
                <div>
                  <FaInstagram />
                </div>
              </IconContext.Provider>
            </a>
          </li>
        </ul>
      </div>
      <p className="Copyright-Para">
        &copy; Copyright 2023 Huddle. All rights reserved.
      </p>
    </footer>
  );
}
export default Footer;
