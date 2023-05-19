import { useContext } from "react";
import { logIn, logOut } from "../../firebase";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import signin from "../../assets/login.svg";
import signout from "../../assets/logout.svg";
import "./Auth.css";


export default function Auth() {
  const { user } = useContext(AppContext);

  return (
    <div className="Auth">
      {user ? (
        <span className="orderName">
          <Link to="/orders">{user.displayName}</Link>!
          <img className="Test" src={signout} alt="signIn"   onClick={logOut}/>
        </span>
      ) : (
        <span>
          <img className="Test" src={signin} alt="signOut"  onClick={logIn}/>
        </span>
      )}
    </div>
  );
}