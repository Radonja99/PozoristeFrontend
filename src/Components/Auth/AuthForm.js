import { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router";
import AuthContext from "../../Store/auth-context";
import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  var POMOCNITOKEN;

  const authCtx = useContext(AuthContext);

  const navigate = useNavigate();
  const navigateToSignup = () => {
    // 👇️ navigate to /signup
    navigate("/signup");
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // function getKorisnikID(enteredIme) {
    //   fetch(`http://localhost:5000/api/korisnik/korisnickoime/${enteredIme}`, {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }).then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(data.role);
    //     setAdmin2(data.role);
    //     console.log(admin2);
    //   })
    //   .then(() =>{
    //    });

    // }
    // .then((data) => {
    //   for (const key in data) {
    //     const korisnik = {
    //         id:key,
    //         ...data[key]
    //         ;})
    //     }}

    fetch("http://localhost:5000/api/korisnik/login", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        korisnickoIme: enteredEmail,
        lozinkaKorisnika: enteredPassword,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.text();
        } else {
          return res.text().then((data) => {
            //error
            console.log(data);
          });
        }
      })
      .then((data) => {
        fetch(
          `http://localhost:5000/api/korisnik/korisnickoime/${enteredEmail}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        ) .then((response) => {
            POMOCNITOKEN = data;
            return response.json();
          })
          .then((data) => {
            authCtx.login(POMOCNITOKEN, data.korisnikID, data.role);
          })
          .then(() => {});
      })
      .then((data) => {
       
        navigate("/");
      });
  };

  return (
    <section className={classes.auth}>
      <h1>{"Login"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="text">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>Login </button>
          <button
            type="button"
            className={classes.toggle}
            onClick={navigateToSignup}
          >
            Create new account
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
