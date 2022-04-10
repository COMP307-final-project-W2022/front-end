import target from "../asset/feature-stickers/Target.png";

const Success = (props) => {
  return (
    <div className="feature-card">
      <img src={target} alt="Target" />
      <div className="finish-container">
        <p>Success!</p>
        <button className="button-style">{props.btn1}</button>
        <br />
        <br />
        <button className="button-style">{props.btn2}</button>
      </div>
    </div>
  );
};

export default Success;
