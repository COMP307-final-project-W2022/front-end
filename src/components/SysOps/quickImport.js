import { Link } from "react-router-dom";
import mail from "../../asset/feature-stickers/Mail.png";

const QuickImport = () => {
  return (
    <div className="feature-card">
      <img src={mail} alt="Mail" />
      <div>
        <form className="quick-import">
          <input type="file" accept=".csv" />
          <Link to="/sysops/imported">
            <input type="submit" className="button-style" />
          </Link>
        </form>
      </div>
    </div>
  );
};

export default QuickImport;
