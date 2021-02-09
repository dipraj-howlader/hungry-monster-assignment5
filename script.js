document.getElementById('search-btn').addEventListener('click', function () {
    const mealName = document.getElementById('input-meal').value;
    const link = 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + mealName;
    fetch(link)
        .then(res => res.json())
        .then(data => displayMeal(data));
});
const displayMeal = meals => {
    const mealDiv = document.getElementById('meal-container');
    const newMealDiv = document.createElement('div');
    newMealDiv.className = 'mealName';
    const mealInfo = `
    <img src="${meals.strMealThumb}">
    <h3>${meals.strMeal}</h3>

    `;
    newMealDiv.innerHTML = mealInfo;
    mealDiv.appendChild(newMealDiv);
}
    
