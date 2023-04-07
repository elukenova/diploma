import { useMatch } from "react-router-dom"

export default function   Category(){
  const { params } = useMatch("/categories/:slug");

  const categories = [
    {id: 1, name: "Dj", slug: "dj"},
    {id: 2, name: "Drones", slug: "drones"},
    {id: 3, name: "Cameras", slug: "cameras"},
  ];

  const category = categories.find(category => category.slug === params.slug);
  return (
    <div className="Category">
    <h1>{category.name}</h1>
    </div>
  )
}