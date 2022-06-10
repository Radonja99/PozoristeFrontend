import { useState, useRef } from 'react';
import { useNavigate } from 'react-router';
import classes from './AuthForm.module.css';

const AuthForm = () => {

    const emailInputRef = useRef();
    const passwordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const navigate = useNavigate();
    const navigateToSignup = () => {
        // 👇️ navigate to /signup
        navigate('/signup');
      };
  const submitHandler = (event) => {
      event.preventDefault();

     const enteredEmail = emailInputRef.current.value;
     const enteredPassword = passwordInputRef.current.value;

     fetch('http://localhost:5000/api/korisnik/login', {
        method: 'POST', 
        body: JSON.stringify({
            korisnickoIme: enteredEmail,
            lozinkaKorisnika: enteredPassword,
        }),
        headers: {
            'Content-type' : 'application/json'
        }
     }).then(res=> {
         if (res.ok){

         }
         else {
           return res.json().then(data => {
                 //error
                 console.log(data)
             });
         }
     });
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref = {emailInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref = {passwordInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Login </button>
          <button
            type='button'
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
