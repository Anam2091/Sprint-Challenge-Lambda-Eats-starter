import React from "react";
import { Route } from "react-router-dom"
import Form from "./Form"
import PizzaForm from "./PizzaForm"
import PizzaFormy from "./PizzaForm";

const App = () => {
  return (
    <>
    <Route exact path="/" component={Form}/>
    <Route exact path="/pizza" component={PizzaFormy}/>
      <h1>Lambda Eats</h1>
      <p></p>
    </>
  );
};
export default App;
