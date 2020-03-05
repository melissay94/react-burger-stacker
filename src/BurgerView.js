import React from 'react';

function BurgerView(props) {

    function formatIngredientStack() {
        let layers = [];
        props.ingredients.forEach((ingredient, index) => {
            layers.unshift(<div className={"ingredient " + ingredient.replace(/\s/g, "-").toLowerCase()} key={index}></div>);
        });
        return layers;
    }

    return(
        <div className="burger-stack">
            <div>{formatIngredientStack()}</div>
            <button className="clear-btn" onClick={e => props.clearBurgerHandler(e)}>Clear</button>
        </div>
    )
}

export default BurgerView;