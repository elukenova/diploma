import { useContext } from "react";
import { logIn, logOut } from "../../firebase";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import "./Auth.css";


export default function Auth() {
  const { user } = useContext(AppContext);

  return (
    <div className="Auth">
      {user ? (
        <span>
          <Link to="/orders">{user.displayName}</Link>!
          <img className="Test" src="https://www.clipartmax.com/png/middle/336-3366677_login-login-icon-white-png.png" alt="signIn"   onClick={logOut}/>
        </span>
      ) : (
        <span>
          <img className="Test" src="https://cdn4.iconfinder.com/data/icons/contact-us-19/48/92-512.png" alt="signOut"  onClick={logIn}/>
        </span>
      )}
    </div>
  );
}