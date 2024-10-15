import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
import ItemList from "./ItemList";
export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isloading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "a0bc2fd4d02e4181a1ae5d61fd8c1283";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}> {food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt="" />
        <div className={styles.recipeDetails}>
          <span>
            <strong>🕐{food.readyInMinutes}minutes</strong>
          </span>
          <span>
            <strong>👪Serves:{food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕Vegetarian" : "🍖Non-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong> {food.vegan ? "🐄Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          <span>
            <strong>
              💲{Math.round(food.pricePerServing / 100)} Per serving
            </strong>
          </span>
        </div>
        <h2>Ingredients</h2>
        <ItemList isloading={isloading} food={food} />
        <h2>Instructions</h2>
        <div className={styles.recipeInstructions}>
          <ol>
            {isloading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
