import "./CategoryToggle.css";

function CategoryToggle({ callback }) {
  return (
    <button onClick={callback} className="CategoryToggle">
      <div className="category-button">
        <img
          src="https://cdn.onlinewebfonts.com/svg/img_248070.png"
          alt="category"
        />
        <h2>Category</h2>
      </div>
    </button>
  );
}

export default CategoryToggle;