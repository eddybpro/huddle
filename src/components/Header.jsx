import { MockupsIcon } from "../assets";
import Navbar from "./Navbar";
import "./Header.css";

function Header() {
  return (
    <header>
      <Navbar />
      <div className="HeaderWrapper">
        <div className="HeaderWrapper-TxtBox">
          <h1 className="HeaderWrapper-TxtBox-Title">
            Build The Community Your Fans Will Love
          </h1>
          <p className="HeaderWrapper-TxtBox-Para">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion
          </p>
          <button className="HeaderWrapper-TxtBox-Btn">
            get started for free
          </button>
        </div>
        <div className="HeaderWrapper-ImgBox">
          <img src={MockupsIcon} alt="" />
        </div>
      </div>
    </header>
  );
}
export default Header;
