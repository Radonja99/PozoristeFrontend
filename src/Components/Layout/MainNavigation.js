import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css';

function MainNavigation() {
    return <header className={classes.header}>
        <div> </div>
        <nav>
            <ul className={classes.ul}>
                <li className={classes.li}>
                <Link to='/' className={classes.link}>Sve predstave </Link>
                </li>
                <li className={classes.li}>
                    <Link to='/nova' className={classes.link}> Nova predstava</Link>
                </li>
                <li className={classes.li}>
                    <Link to ='/auth' className={classes.link}> Login </Link>
                </li>
                <li className={classes.li}>
                    <Link to ='/signup' className={classes.link}> Sign up </Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;