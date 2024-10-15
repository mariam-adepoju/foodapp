import styles from "./foodoitem.module.css";
export default function Fooditem({ food, setfoodId }) {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={food.image} alt="" />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{food.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={styles.itemButton}
          onClick={() => {
            console.log(food.id);
            setfoodId(food.id);
          }}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}
