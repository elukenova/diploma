import Logo from "../Logo/Logo";
import React, { useState } from "react";
import Nav from "../Nav/Nav";
import "./Layout.css";
import CategoryList from "../CategoryList/CategoryList";
import CartLink from "../CartLink/CartLink";
import Auth from "../Auth/Auth";
import Footer from "../Footer/Footer";
import NavToggle from "../NavToggle/NavToggle";
import Drawer from "../Drawer/Drawer";
import CategoryBurger from "../CategoryBurger/CategoryBurger";
import CategoryToggle from "../CategoryToggle/CategoryToggle";

export default function Layout(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  function toggleDrawer() {
    setDrawerOpen(!drawerOpen);
  }
  const [burgerOpen, setBurgerOpen] = useState(false);

  function toggleBurger() {
    setBurgerOpen(!burgerOpen);
  }
  return (
    <div className="Layout">
      <header>
        <Logo />
        <Nav />
        <NavToggle callback={toggleDrawer} />
        <Drawer open={drawerOpen} toggle={toggleDrawer} />
        <CartLink />
        <Auth />
      </header>

      <aside>
        <CategoryList />
        <CategoryBurger open={burgerOpen} toggle={toggleBurger} />
        <CategoryToggle callback={toggleBurger} />
      </aside>

      <main>{props.children}</main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
