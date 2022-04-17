import { Link } from "react-router-dom";
import target from "../asset/feature-stickers/Target.png";

const Success = (props) => {
  return (
    <div className="feature-card">
      <img src={target} alt="Target" />
      <div className="finish-container">
        <p>Success!</p>
        <Link to={props.location1 ?? ""}>
          <button className="button-style">{props.btn1}</button>
        </Link>
        <br />
        <br />
        <Link to={props.location2 ?? ""}>
          <button className="button-style">{props.btn2}</button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
