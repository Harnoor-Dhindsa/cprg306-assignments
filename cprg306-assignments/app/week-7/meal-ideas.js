"use client";

import { useState, useEffect } from "react";

// Define API fetching function outside the component
const fetchMealDetails = async (mealId) => {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
    const data = await response.json();
    return data.meals ? data.meals[0] : null;
  } catch (error) {
    console.error('Error fetching meal details:', error);
    return null;
  }
};

const fetchMealIdeas = async (ingredient) => {
  try {
    // Use template string to include the dynamic ingredient value
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error('Error fetching meal ideas:', error);
    return [];
  }
};

const MealIdeas = ({ ingredient }) => {
  // Define state variables for meal ideas and selected meal details
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  // Define load function for meal ideas
  const loadMealIdeas = async () => {
    const mealList = await fetchMealIdeas(ingredient);
    setMeals(mealList);
    setSelectedMeal(null); // Reset selectedMeal when fetching new meal ideas
  };

  // Define load function for meal details
  const loadMealDetails = async (mealId) => {
    const mealDetails = await fetchMealDetails(mealId);
    setSelectedMeal(mealDetails);
  };

  // Use the useEffect hook to call loadMealIdeas whenever the ingredient prop changes
  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  // Render the component
  return (
    <div>
      {meals.length > 0 && (
        <ul>
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              className="p-2 m-1 bg-slate-900 max-w-sm hover:bg-orange-800 cursor-pointer"
              onClick={() => loadMealDetails(meal.idMeal)}
            >
              <p>{meal.strMeal}</p>
              {selectedMeal && meal.idMeal === selectedMeal.idMeal && (
                <div className="text-xs text-gray-400 ml-2">
                  <h3>{`Ingredients for ${selectedMeal.strMeal}`}</h3>
                  <ul>
                    {Array.from({ length: 20 }, (_, i) => i + 1).map((index) => {
                      const ingredientKey = `strIngredient${index}`;
                      const measureKey = `strMeasure${index}`;
                      const ingredient = selectedMeal[ingredientKey];
                      const measure = selectedMeal[measureKey];

                      if (ingredient && ingredient.trim() !== '') {
                        return <li key={index}>{`${measure ? `${measure} ` : ''}${ingredient}`}</li>;
                      }

                      return null;
                    })}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}

      {!selectedMeal && meals.length === 0 && ingredient && (
        <p>No meal ideas found for {ingredient}</p>
      )}

    </div>
  );
};

export default MealIdeas;
