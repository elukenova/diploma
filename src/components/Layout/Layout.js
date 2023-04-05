import React from "react";
import Nav from "../Nav/Nav";
import "./Layout.css";

export default function Layout(props) {
  return (
    <div className="Layout">
      <header>
        <Nav />
      </header>

      <aside>
        <nav>NAV CATEGORIES</nav>
      </aside>

      <main>{props.children}</main>

      <footer>FOOTER</footer>
    </div>
  );
}