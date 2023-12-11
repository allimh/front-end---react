import React from 'react';
import './RecipePage.css';
import { useNavigate } from 'react-router-dom';

const RecipePage = (props) => {
  
  return (
    <div className="recipe-page">
      <main className="content">
        <div className="recipe-name">{props.recipeName}</div>
        <div className="ingredients">
          <div className="ingredients-title">Ingredients</div>
          {props.ingredients.map((ingredient, index) => (
            <div key={index} className="ingredient-item">
              {ingredient}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default RecipePage;
