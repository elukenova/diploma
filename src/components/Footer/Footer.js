import "./Footer.css";
import logo from "../../assets/logo5.png"
import { NavLink } from "react-router-dom";

export default function Footer(){
return(
  <div className="Footer">
    <div className="footer-logo" >
      <NavLink  to="/">
        <img src={logo} alt="logo" className="logo"/>
      </NavLink>
    </div>
    <div className="footer-nav">
      <ul>
        <li className="NavFooter">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="NavFooter" >
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="NavFooter">
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li className="NavFooter">
          <NavLink to="/delivery">Delivery</NavLink>
        </li>
      </ul>
    </div>
    <div className="footer-category">
      <h4>Categories</h4>
    <ul>
        <li className="footer-category">
          <NavLink to="../categories/steadicams">Stedicams</NavLink>
        </li>
        <li className="footer-category" >
          <NavLink to="../categories/underwater">Underwater</NavLink>
        </li>
        <li className="footer-category">
          <NavLink to="../categories/photo-video">Photo/Video</NavLink>
        </li>
        <li className="footer-category">
          <NavLink to="../categories/cases">Cases</NavLink>
        </li>
        <li className="footer-category">
          <NavLink to="../categories/dji">DJI</NavLink>
        </li>
        <li className="footer-category">
          <NavLink to="../categories/cameras">Cameras</NavLink>
        </li>
      </ul>
    </div>
    <div className="footer-icon">
      <h1>Network</h1>
      <div className="footer-apps">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" alt="linkedln"/>
      <img src="https://cdn0.iconfinder.com/data/icons/social-network-9/50/29-512.png" alt="GitHub"/>
      <img src="https://www.svgrepo.com/download/299513/telegram.svg" alt="Telegram"/>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/767px-WhatsApp.svg.png" alt="WhatsApp"/>
      </div>
    </div>
  </div>
)
}
