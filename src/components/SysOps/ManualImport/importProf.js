import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { query } from "../../../api";
import phone from "../../../asset/feature-stickers/Mobile.png";

const ImportProfessor = () => {
  const [professor, setProfessor] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const navigator = useNavigate();

  const saveProfessor = async () => {
    if (professor == null) return;
    setIsLoading(true);
    await query(
      `insert into professors values ((select username from users where email='${professor}'))`
    );
    return navigator("./added", { replace: true });
  };

  return (
    <div className="feature-card add-user">
      <img src={phone} alt="A hand holding a phone" />
      <div className="select-course-container">
        <p>Add Professor</p>
        <form
          className="login-register register"
          onSubmit={(e) => {
            e.preventDefault();
            saveProfessor();
          }}
        >
          <ul>
            <li>
              <label htmlFor="email">McGill Email&#42;</label>
              <input
                type="email"
                name="email"
                maxLength="100"
                autoComplete="off"
                required
                onChange={(e) => setProfessor(e.target.value)}
              />
              <span>Enter McGill email here</span>
            </li>
            <li>
              <input
                disabled={professor == null || isLoading}
                type="submit"
                value="ADD"
              />
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default ImportProfessor;
