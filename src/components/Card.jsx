import PropTypes from "prop-types";
import "./Card.css";

function Card(props) {
  return (
    <div className="Card">
      <img src={props.img} alt="" className="Card-Img" />
      <div className="Card-TxtBox">
        <h1 className="Card-TxtBox-Title">{props.title}</h1>
        <p className="Card-TxtBox-Para">{props.desc}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default Card;
