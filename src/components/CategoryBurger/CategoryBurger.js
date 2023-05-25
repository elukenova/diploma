import CategoryList from "../CategoryList/CategoryList";
import "./CategoryBurger.css";

function CategoryBurger({ open, toggle }) {
  let menuBtn = document.querySelectorAll(".CategoryList ul li a");
  let menu = document.querySelector(".CategoryBurger");
  menuBtn.forEach((el) => {
    el.addEventListener("click", function () {
      menu.classList.remove("open");
    });
  });
  const burgerClassNames = `CategoryBurger ${open ? "open" : ""}`;
  return (
    <div className={burgerClassNames}>
      <div onClick={toggle} className="backdrop"></div>
      <div className="content">
        <CategoryList/>
      </div>
    </div>
  );
}
export default CategoryBurger;