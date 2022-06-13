import { Link, useNavigate } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import AuthContext from "../../Store/auth-context";

function MainNavigation() {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  // const Navigate = useNavigate();

  // const navigateToSvePredstaveOpera = () => {
  //   Navigate('/svepredstave', { state: { zanr: 'opera'}});
  //   window.location.reload()
  // }
  // const navigateToSvePredstaveDrama = () => {
  //   Navigate('/svepredstave', { state: { zanr: 'drama'}});
  //   window.location.reload()
  // }
  // const navigateToSvePredstaveBalet = () => {
  //   Navigate('/svepredstave', { state: { zanr: 'balet'}});
  //   window.location.reload()
  // }

  const logoutHandler = () => {
    authCtx.logout();
  };
  return (
    <header className={classes.header}>
      <div> </div>
      <nav>
        <ul className={classes.ul}>
          <li className={classes.li}>
            <Link to="/" className={classes.link}>
              Sve predstave{" "}
            </Link>
          </li>
          {authCtx.admin == "admin" && (
            <li className={classes.li}>
              <Link to="/novapredstava" className={classes.link}>
                {" "}
                Nova predstava
              </Link>
            </li>
          )}
          {/* {isLoggedIn && (
            <li className={classes.li}>
            <Link to="/signup" className={classes.link}>
            {" "}
            Sign up{" "}
            </Link>
            </li>
          )} */}
          {authCtx.admin == "admin" && (
            <li className={classes.li}>
            <Link to="/novaizvedba" className={classes.link}>
              {" "}
              Nova izvedba{" "}
            </Link>
          </li>
          )}
          <li className={classes.li}>
            <Link to="/sveizvedbe" className={classes.link}>
              Sve izvedbe{" "}
            </Link>
          </li>
          {isLoggedIn && (
            <li className={classes.li}>
              <Link to="/sverezervacije" className={classes.link}>
                Rezervacije
              </Link>
            </li>
          )}
              {!isLoggedIn && (
                <li className={classes.li}>
                  <Link to="/auth" className={classes.link}>
                    {" "}
                    Login{" "}
                  </Link>
                </li>
              )}
          {isLoggedIn && (
            <li className={classes.li}>
              <button className={classes.link} onClick={logoutHandler}>
                Logout
              </button>
            </li>
          )}
          {isLoggedIn && (
            <li className={classes.li}>
              <Link to="/myprofile" className={classes.link}>
                My profile
              </Link>
            </li>
          )}
        </ul>
      </nav>
      {/* <div>
        <button onClick={navigateToSvePredstaveBalet}>Balet</button>
        <button onClick={navigateToSvePredstaveOpera}>Opera</button>
        <button onClick={navigateToSvePredstaveDrama}>Drama</button>
      </div> */}
    </header>
  
 );
}

export default MainNavigation;
