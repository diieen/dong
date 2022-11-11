import { X } from "phosphor-react";
import { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

import registerUser from "../database/register";

import UserIcon from "../assets/images/user-icon.svg";
import GoogleIcon from "../assets/svg/GoogleIcon";
import FacebookAuthIcon from "../assets/svg/FacebookAuthIcon";
import getUsers from "../database/users";

const LoginModal = (props) => {
  const { setIsOpen, setLoginType } = props;
  const [wrongPassword, setWrongPassword] = useState(false);

  const auth = getAuth();
  const provider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

  const login = (e) => {
    e.preventDefault();
    setWrongPassword(false);

    let email = e.target.email.value;
    let password = e.target.password.value;

    getUsers.then((data) => {
      let user = data.find(
        (user) => user.email === email && user.password === password
      );
      if (user) {
        localStorage.setItem("user", user.email);
        localStorage.setItem("logged", true);
        window.location.reload();
      } else {
        setWrongPassword(true);
      }
    });
  };

  const googleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const userData = result.user;

        getUsers.then((data) => {
          let user = data.find((user) => user.email === userData.email);
          if (user) {
            localStorage.setItem("user", user.email);
            localStorage.setItem("logged", true);
            window.location.reload();
          } else {
            const data = {
                name: userData.displayName,
                email: userData.email,
                password: null,
                phone: null,
                cpf: null,
                cep: null,
                street: null,
                number: null,
                complement: null,
                district: null,
                city: null,
                state: null
            }
    
            registerUser(data).then(() => {
                localStorage.setItem("user", userData.email);
                localStorage.setItem("logged", true);
                window.location.reload();
            })
          }
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;

        console.log(errorCode, errorMessage, email);
      });
  };

  const facebookLogin = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        const userData = result.user;

        getUsers.then((data) => {
          let user = data.find((user) => user.email === userData.email);
          if (user) {
            localStorage.setItem("user", user.email);
            localStorage.setItem("logged", true);
            window.location.reload();
          } else {
            const data = {
                name: userData.displayName,
                email: userData.email,
                password: null,
                phone: null,
                cpf: null,
                cep: null,
                street: null,
                number: null,
                complement: null,
                district: null,
                city: null,
                state: null
            }
    
            registerUser(data).then(() => {
                localStorage.setItem("user", user.email);
                localStorage.setItem("logged", true);
                window.location.reload();
            })
          }
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;

        console.log(errorCode, errorMessage, email);
      });
  }

  return (
    <div className="container-modal-login">
      <div
        className="icon-x"
        onClick={() => {
          setIsOpen(false);
          setLoginType(true);
        }}
      >
        <X size={40} color="#B87932" />
      </div>
      <div className="login-content-1">
        <img src={UserIcon} alt="" />
        <span className="content-1-text">ACESSO</span>
      </div>
      <div className="login-content-2">
        <p className="content-2-text">Entrar com e-mail e senha </p>
        {wrongPassword && <span>E-mail ou senha inválidos</span>}
      </div>
      <div className="login-content-3" onSubmit={(e) => login(e)}>
        <form action="" className="form-login">
          <input
            type="email"
            name="email"
            className="input login-email"
            placeholder="Ex: teste@gmail.com"
            required
          />
          <input
            type="password"
            name="password"
            className="input login-senha"
            placeholder="Senha"
            required
          />
          <a href="" className="link-login">
            Esqueci minha senha{" "}
          </a>
          <button type="submit" className="btn-login">
            Entrar
          </button>
        </form>
      </div>
      <div
        className="login-content-4"
        onClick={() => {
          setLoginType(false);
        }}
      >
        <p>Cadastre-se</p>
      </div>
      <div className="spacer-login">
        <hr />
        <span>ou</span>
        <hr />
      </div>
      <div className="login-content-5">
        <button className="btn-login-google" onClick={googleLogin}>
          <GoogleIcon />
          <span>Entrar com Google</span>
        </button>

        <button className="btn-login-facebook" onClick={facebookLogin}>
          <FacebookAuthIcon />
          <span>Entrar com Facebook</span>
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
