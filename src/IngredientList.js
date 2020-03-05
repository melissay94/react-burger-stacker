import React from 'react';

function IngredientList(props) {
    return(
        <ul>
            {props.ingredients.map((ingredient, index) => (
              <li key={index} className="ingredient-name">
                  {ingredient}
                  <button className="add-btn" onClick={e => props.addIngredientHandler(e) } value={ingredient}>Add</button>
              </li>  
            ))}
        </ul>
    );
}

export default IngredientList;