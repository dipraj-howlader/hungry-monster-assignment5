document.getElementById('search-btn').addEventListener('click', function () {
    const mealName = document.getElementById('input-meal').value;
    const link = 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + mealName;
    fetch(link)
        .then(res => res.json())
        .then(data => displayMeal(data))
        .catch(error => document.getElementById('input-meal').value = "No Result Found");
});
const displayMeal = meal => {
    const mealDiv = document.getElementById('meal-container');
    const newMealDiv = document.createElement('div');
    newMealDiv.className = 'mealName';
    const mealInfo = `
    <img src="${meal.meals[0].strMealThumb}">
    <h3>${meal.meals[0].strMeal}</h3>
    <p>Ingredients </p>
    <ul>
    <li>${meal.meals[0].strMeasure1} ${meal.meals[0].strIngredient1}</li>
    <li>${meal.meals[0].strMeasure2} ${meal.meals[0].strIngredient2}</li>
    <li>${meal.meals[0].strMeasure3} ${meal.meals[0].strIngredient3}</li>
    <li>${meal.meals[0].strMeasure4} ${meal.meals[0].strIngredient4}</li>
    <li>${meal.meals[0].strMeasure5} ${meal.meals[0].strIngredient5}</li>
    <li>${meal.meals[0].strMeasure6} ${meal.meals[0].strIngredient6}</li>
    <li>${meal.meals[0].strMeasure7} ${meal.meals[0].strIngredient7}</li>
    <li>${meal.meals[0].strMeasure8} ${meal.meals[0].strIngredient8}</li>
    <li>${meal.meals[0].strMeasure9} ${meal.meals[0].strIngredient9}</li>
    <li>${meal.meals[0].strMeasure10} ${meal.meals[0].strIngredient10}</li>
    <li>${meal.meals[0].strMeasure11} ${meal.meals[0].strIngredient11}</li>
    </ul>

    `;
    newMealDiv.innerHTML = mealInfo;
    mealDiv.appendChild(newMealDiv);
}

//second part

for (let j = 0; j < 8; j++) {
    var url = 'https://www.themealdb.com/api/json/v1/1/random.php';
    fetch(url)
        .then(res => res.json())
        .then(data => allMealList(data))
}


const allMealList = meal => {
    const listOfMeal = document.getElementById('all-meals');


    const newListDiv = document.createElement('div');
    newListDiv.className = 'mealsInfo';
    const divOfMeal = `
    <img src="${meal.meals[0].strMealThumb}">
    <p id="meal${meal.meals[0].idMeal}">${meal.meals[0].strMeal}</p>

    `
    newListDiv.innerHTML = divOfMeal;
    listOfMeal.appendChild(newListDiv);
    const clickMeal = document.getElementById(`meal${meal.meals[0].idMeal}`);
    clickMeal.addEventListener('click', function () {
        const mealName = clickMeal.innerText;
        displayMeal(meal);
    });

}

