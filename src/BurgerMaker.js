import React, {useState} from "react";
import IngredientList from "./IngredientList.js";
import BurgerView from "./BurgerView.js";

const ingredientsList = [  
    'Kaiser Bun',
    'Sesame Bun', 
    'Gluten Free Bun',
    'Lettuce Wrap',
    'Beef Patty', 
    'Soy Patty', 
    'Black Bean Patty',
    'Chicken Patty', 
    'Lettuce', 
    'Tomato', 
    'Bacon', 
    'Onion'
];

function BurgerMaker() {

    const [ingredients, setIngredients] = useState([]);

    function addIngredient(e) {
        e.preventDefault();
        setIngredients([...ingredients, e.target.value]);
    }

    function clearIngredients() {
        setIngredients([]);
    }

    return (
        <div>
            <h1>Burger Maker!</h1>
            <div className="burger-maker">
                <IngredientList class="ingredient-list" ingredients={ingredientsList} addIngredientHandler={addIngredient}/>
                <BurgerView class="burger-view" ingredients={ingredients} clearBurgerHandler={clearIngredients}/>
            </div>
        </div>
    );
}

export default BurgerMaker;