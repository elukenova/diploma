import { useMatch } from "react-router-dom";
import NotFound from "./NotFound";

export default function Category() {
  const { params } = useMatch("/categories/:slug");

  const categories = [
    { id: 1, name: "Dj", slug: "dj" },
    { id: 2, name: "Drones", slug: "drones" },
    { id: 3, name: "Cameras", slug: "cameras" },
    { id: 4, name: "Backpacks and cases", slug: "backpacks-and-cases" },
    { id: 5, name: "Electronic steadicams", slug: "electronic-steadicams" },
    { id: 6, name: "Underwater equipment", slug: "underwater-equipment" },
    { id: 7, name: "Photo/Video", slug: "photo-video" },
  ];

  const category = categories.find((category) => category.slug === params.slug);

  if (!category) {
    return <NotFound />;
  }

  return (
    <div className="Category">
      <h1>{category.name}</h1>
    </div>
  );
}
