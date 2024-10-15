import { useState } from "react";
import Search from "./components/Search";
import Foodlist from "./components/Foodlist";
import Nav from "./components/Nav";
import "./App.css";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodDetails from "./components/FoodDetails";

function App() {
  const [foodData, setfoodData] = useState([]);
  const [foodId, setfoodId] = useState("658615");
  return (
    <>
      <Nav />
      <Search foodData={foodData} setfoodData={setfoodData} />
      <Container>
        <InnerContainer>
          <Foodlist setfoodId={setfoodId} foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId} />
        </InnerContainer>
      </Container>
    </>
  );
}

export default App;
