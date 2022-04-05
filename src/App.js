import "./App.css";
import bg from "./asset/background.png";
import logo from "./asset/logo.png";

const Header = () => {
  return (
    <div className="logo-header">
      <hr />
      <img src={logo} alt="McGill SOCS Logo"></img>
    </div>
  );
};

const Information = () => {
  return (
    <div className="info">
      <h1>MCGILL TA MANAGEMENT SYSTEM</h1>
      <p>This system allows you to blah blah blah some copywritingCupidatat mollit sint fugiat commodo anim.Est ut anim anim labore deserunt adipisicing pariatur velit irure consequat voluptate id irure. Ad labore occaecat officia id dolor ut fugiat pariatur nostrud ullamco incididunt officia consectetur. Sint aliquip do tempor fugiat in ut.</p>
    </div>
  );
};

const Login = () => {
  return (
    <div className="login-card">
      <a href="#">REGISTER</a>
      <p>LOGIN</p>
      <form className="login-register">
        <ul>
          <li>
            <label for="uname">Username</label>
            <input type="text" name="uname" maxlength="100" autocomplete="off" />
            <span>Enter your username here</span>
          </li>
          <li>
            <label for="password">Password</label>
            <input type="password" name="password" maxlength="100" autocomplete="off" />
            <span>Enter your password here</span>
          </li>
          <li>
            <input type="submit" value="LOGIN" />
          </li>
        </ul>
      </form>
    </div>
  );
};

const Register = () => {
  return (
    <div className="register-card">
      <a href="#">Back to Login</a>
      <p>REGISTER</p>
      <form className="login-register register">
        <ul>
          <li>
            <label for="name">Full Name</label>
            <input type="text" name="name" maxlength="100" autocomplete="off" required/>
            <span>Enter your full name here</span>
          </li>
          <li>
            <label for="email">McGill Email</label>
            <input type="email" name="email" maxlength="100" autocomplete="off" required/>
            <span>Enter your McGill email here</span>
          </li>
          <li>
            <label for="id">Student ID</label>
            <input type="number" name="id" maxlength="9" autocomplete="off" />
            <span>Enter your student ID here</span>
          </li>
          <li>
            <label for="uname">Username</label>
            <input type="text" name="uname" maxlength="100" autocomplete="off" />
            <span>Enter your username here</span>
          </li>
          <li>
            <label for="password">Password</label>
            <input type="password" name="password" maxlength="100" autocomplete="off" />
            <span>Enter your password here</span>
          </li>
          <li>
            <input type="submit" value="NEXT" />
          </li>
        </ul>
      </form>
    </div>
  );
};

function App() {
  return (
    <div className="App" style={{ background: `url(${bg})` }}>
      <Header></Header>
      <div className="main">
        <Information></Information>
        <Register></Register>
        {/* <Login></Login> */}
      </div>
    </div>
  );
}

export default App;
