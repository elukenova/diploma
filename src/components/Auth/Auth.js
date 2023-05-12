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
          <img className="Test" src="https://img.favpng.com/1/19/13/disconnect-icon-logout-sign-icon-interface-icon-u9vq3TKg_t.jpg" alt="signIn"   onClick={logOut}/>
        </span>
      ) : (
        <span>
          <img className="Test" src="https://cdn4.iconfinder.com/data/icons/contact-us-19/48/92-512.png" alt="signOut"  onClick={logIn}/>
        </span>
      )}
    </div>
  );
}