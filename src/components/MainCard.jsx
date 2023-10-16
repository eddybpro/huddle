import Card from "./Card";
import { data } from "../data";
import "./MainCard.css";

function MainCard() {
  return (
    <main>
      <div className="IllustrationBox">
        {data.map((el, i) => (
          <Card key={i} {...el} />
        ))}
      </div>
      <div className="CommunityBox">
        <h1 className="CommunityBox-Title">ready to build your community?</h1>
        <button className="CommunityBox-Btn">get started for free</button>
      </div>
    </main>
  );
}
export default MainCard;
