import React from 'react';
import style from './recipe.module.css'

const Recipe = ({title, calories, image, ingredients}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li key={ingredient.id}> {ingredient.text} </li>
                ))}
            </ol>
            <p>{calories}</p>
            <img src={image} alt={title} />
        </div>
    )
}

export default Recipe;
