import { NavLink } from "react-router-dom";
import "./CategoryList.css";
import { categories } from "../../firebase";
import { getDocs } from "firebase/firestore/lite";
import { useEffect, useState } from "react";

export default function CategoryList() {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getDocs(categories).then((snapshot) => {
    const newCategoryList = [];
    snapshot.docs.forEach((doc) => {
      const category = doc.data();
      category.id = doc.id;

      newCategoryList.push(category);
      })
      setCategoryList(newCategoryList);
    });
  }, []);

  // const categories = [
  //   {id: 1, name: "Dj", slug: "dj"},
  //   {id: 2, name: "Drones", slug: "drones"},
  //   {id: 3, name: "Cameras", slug: "cameras"},
  //   {id: 4, name: "Backpacks and cases", slug: "backpacks-and-cases"},
  //   {id: 5, name: "Electronic steadicams", slug: "electronic-steadicams"},
  //   {id: 6, name: "Underwater equipment", slug: "underwater-equipment"},
  //   {id: 7, name: "Photo/Video", slug: "photo-video"},
  // ]

  const output = categoryList.map((category) => (
    <li key={category.id}>
      <NavLink to={"/categories/" + category.slug}>{category.name}</NavLink>
    </li>
  ));
  return (
    <div className="CategoryList">
      <h1>Categories</h1>
      <ul>{output}</ul>
    </div>
  );
}
