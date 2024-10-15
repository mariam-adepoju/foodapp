import Items from "./Items";
export default function ItemList({ isloading, food }) {
  return (
    <div>
      {isloading ? (
        <p>Loading...</p>
      ) : (
        food.extendedIngredients.map((item) => <Items item={item} />)
      )}
    </div>
  );
}
