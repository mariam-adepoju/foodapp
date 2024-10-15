import Fooditem from "./Fooditem";

export default function Foodlist({ foodData, setfoodId }) {
  return (
    <div>
      {foodData.map((food) => (
        <Fooditem key={food.id} food={food} setfoodId={setfoodId} />
      ))}
    </div>
  );
}
