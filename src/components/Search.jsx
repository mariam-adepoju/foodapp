import { useEffect, useState } from "react";
import styles from "./search.module.css";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "a0bc2fd4d02e4181a1ae5d61fd8c1283";
export default function Search({ foodData, setfoodData }) {
  const [query, setQuery] = useState("pizza");
  //syntax of useEffect hook
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}&query=${query}`);
      const data = await res.json();
      //console.log(data.results);
      setfoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
}
