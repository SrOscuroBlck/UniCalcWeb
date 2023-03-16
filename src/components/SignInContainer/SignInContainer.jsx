import { useState, useRef } from "react";
import { useAuth } from "../../context/AuthContext";
import "firebase/firestore";

import "./SignInContainer.css";

export const SignInContainer = () => {
  const { signUp } = useAuth();


  const [notification, setNotification] = useState(false);

  const [generalError, setGeneralError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const PASSWORD_REGEX = /^(?=.*?[#?!@$%^&/*-])/;

  const [isSignUp, setIsSignUp] = useState(false);

  const containerRef = useRef(null);

  function toggleSignUp() {
    setIsSignUp(!isSignUp);
    if (containerRef.current) {
      containerRef.current.classList.toggle("right-panel-active");
    }
  }

  const addRegister = async () => {

    if (!EMAIL_REGEX.test(email) && PASSWORD_REGEX.test(password)) {
      setEmailError(true);
      setTimeout(() => {
        setEmailError(false);
      }, 5000);
      return;
    } else if (!PASSWORD_REGEX.test(password) && EMAIL_REGEX.test(email)) {
      setPassError(true);
      setTimeout(() => {
        setPassError(false);
      }, 5000);
      return;
    } else if (!EMAIL_REGEX.test(email) && !PASSWORD_REGEX.test(password)) {
      setGeneralError(true);
      setTimeout(() => {
        setGeneralError(false);
      }, 5000);
      return;
    }

    try {
      await signUp(email, password);
      setNotification(true);
      setEmail("");
      setPassword("");
      setUsername("");
      setTimeout(() => {
        setNotification(false);
      }, 5000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {passError && (
        <div className="notification" id="warn-notification">
          La contraseña debe tener al menos un caracter especial. Por ejemplo: #, ?, !, @, $, %, ^, &, /, * y -
        </div>
      )}

      {emailError && (
        <div className="notification" id="warn-notification">
          El email no es válido.
        </div>
      )}

      {/* Both of them have an error */}
      {generalError && (
        <div className="notification" id="warn-notification">
          La contraseña debe tener al menos un caracter especial. Por ejemplo: #, ?, !, @, $, %, ^, &, /, * y -
          <br />
          El email no es válido.
        </div>
      )}



      {notification && (
        <div className="notification" id="success-notification">
          You have been registered successfully.
        </div>
      )}

      <div className="backRegister">
        <center>
          <div className="container" id="RegisterContainer" ref={containerRef}>
            <div
              className={`form-container ${
                isSignUp ? "sign-up-container" : "sign-in-container"
              }`}
            >
              <form action="#">
                <h1>{isSignUp ? "Crea tu Cuenta" : "Inicia Sesión"}</h1>
                <div className="social-container">
                  <a href="#" className="social">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="social">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                  <a href="#" className="social">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
                {isSignUp ? (
                  <>
                    <span>o usa tu email para registrarte</span>
                    <input
                      type="text"
                      placeholder="Nombre de Usuario"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </>
                ) : (
                  <span>o usa tu cuenta</span>
                )}
                <input
                  type="email"
                  placeholder="Correo"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {isSignUp && <button onClick={addRegister}>Registrate</button>}
                {!isSignUp && (
                  <>
                    <a href="#">Olvidaste tu Contraseña?</a>
                    <button>Iniciar Sesión</button>
                  </>
                )}
              </form>
            </div>
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <h1>Bienvenido de Vuelta!</h1>
                  <p>
                    Para ver tu contenido inicia sesión con tus datos personales
                  </p>
                  <button className="ghost" onClick={toggleSignUp} id="signIn">
                    Inicia Sesión
                  </button>
                </div>
                <div className="overlay-panel overlay-right">
                  <h1>Hola!</h1>
                  <p>Ingresa tus datos persononales para registrarte</p>
                  <button className="ghost" onClick={toggleSignUp} id="signUp">
                    Registrarme
                  </button>
                </div>
              </div>
            </div>
          </div>
        </center>
      </div>
    </>
  );
};
