import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyInput from "../components/UI/input/MyInput";
import { AuthContext } from "../context";
import "./Login.css";

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const login = (e) => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-2" />
        <div className="col-lg-6 col-md-8 login-box">
          <div className="col-lg-12 login-key">
            <i className="fa fa-key" aria-hidden="true" />
          </div>
          <div className="col-lg-12 login-title">ADMIN PANEL</div>
          <div className="col-lg-12 login-form">
            <div className="col-lg-12 login-form">
              <form onSubmit={login}>
                <div className="form-group">
                  <MyInput
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <MyInput
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div className="col-lg-12 loginbttm">
                  <div className="col-lg-6 login-btm login-text"></div>
                  <div className="col-lg-6 login-btm login-button">
                    <button type="submit" className="btn btn-outline-primary">
                      LOGIN
                    </button>
                    <Link to="/registor">Registor</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-3 col-md-2" />
        </div>
      </div>
    </div>
  );
};

export default Login;
