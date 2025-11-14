import React, { useState } from "react";
import "../styles/LoginScreen.css";
import SignupScreen from "../components/SignupScreen";

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <div
          className="loginScreen__logo"
          style={{
            fontSize: "3.5rem",
            fontWeight: "normal",
            color: "#E50914",
            fontFamily: "'Bebas Neue', Arial, sans-serif",
            letterSpacing: "0.05em",
            padding: "20px",
          }}>
          NEFLIX
        </div>
        <button onClick={() => setSignIn(true)} className="logiScreen__button">
          Sign In
        </button>

        <div className="loginScreen__gradient" />

        <div className="loginScreen__body">
          {signIn ? (
            <SignupScreen />
          ) : (
            <>
              <h1>Unlimited films, TV programmes and more.</h1>
              <h2>Watch anywhere. Cancel at any time.</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>

              <div className="loginScreen__input">
                <form>
                  <input type="email" placeholder="Email Address" />
                  <button
                    onClick={() => setSignIn(true)}
                    className="loginScreen__getStarted">
                    GET STARTED
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
