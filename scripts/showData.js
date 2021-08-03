async function getdata(query) {
    if (query == 'random') {
        let res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
        let data = await res.json();
        return data;
    }
    else if (query == 'id') {
        let res = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772');
        let data = await res.json();
        return data;
    }
    else {
        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        let data = await res.json();
        return data;
    }

}
const appendData = ({ strArea, strCategory, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5,
    strIngredient6, strIngredient7, strIngredient8, strInstructions, strMeal, strMealThumb, strMeasure1,
    strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strTags }) => {


    let div = document.createElement('div');
    div.style.border = '1px solid black'
    div.style.margin = '20px'
    div.style.padding = '10px'

    let p = document.createElement('p');
    p.innerHTML = `Meal:${strMeal} `
    p.style.fontSize = '25px';

    let cat = document.createElement('p');
    cat.innerHTML = `Category :${strCategory} `;

    let ar = document.createElement('p');
    ar.innerHTML = `Meal:${strArea} `

    let image = document.createElement('img');
    image.src = strMealThumb;
    image.style.height = '200px'

    // instructions
    let ing = document.createElement('div');
    let ing1 = document.createElement('p');
    ing1.innerHTML = `Ingredients:`
    let ing2 = document.createElement('p');
    ing2.innerHTML = `Ingredient 1: ${strIngredient1}`;
    let ing3 = document.createElement('p');
    ing3.innerHTML = `Ingredient 2: ${strIngredient2}`;
    let ing4 = document.createElement('p');
    ing4.innerHTML = `Ingredient 3: ${strIngredient3}`;
    let ing5 = document.createElement('p');
    ing5.innerHTML = `Ingredient 4: ${strIngredient4}`;
    let ing6 = document.createElement('p');
    ing6.innerHTML = `Ingredient 5: ${strIngredient5}`;
    let ing7 = document.createElement('p');
    ing7.innerHTML = `Ingredient 6: ${strIngredient6}`;
    let ing8 = document.createElement('p');
    ing8.innerHTML = `Ingredient 7: ${strIngredient7}`;
    let ing9 = document.createElement('p');
    ing9.innerHTML = `Ingredient 8: ${strIngredient8}`;
    ing.append(ing1, ing2, ing3, ing4, ing5, ing6, ing7, ing8, ing9);
    ing.style.border = '1px solid black'
    ing.style.margin = '10px'
    ing.style.padding = '5px'


    // measures
    let mes = document.createElement('div');
    let mes1 = document.createElement('p');
    mes1.innerHTML = `Measures:`
    let mes2 = document.createElement('p');
    mes2.innerHTML = `Measure 1: ${strMeasure1}`;
    let mes3 = document.createElement('p');
    mes3.innerHTML = `Measure 2: ${strMeasure2}`;
    let mes4 = document.createElement('p');
    mes4.innerHTML = `Measure 3: ${strMeasure3}`;
    let mes5 = document.createElement('p');
    mes5.innerHTML = `Measure 4: ${strMeasure4}`;
    let mes6 = document.createElement('p');
    mes6.innerHTML = `Measure 5: ${strMeasure5}`;
    let mes7 = document.createElement('p');
    mes7.innerHTML = `Measure 6: ${strMeasure6}`;
    let mes8 = document.createElement('p');
    mes8.innerHTML = `Measure 7: ${strMeasure7}`;
    mes.append(mes1, mes2, mes3, mes4, mes5, mes6, mes7, mes8);
    mes.style.border = '1px solid black'
    mes.style.margin = '10px'
    mes.style.padding = '5px'

    let tag = document.createElement('p');
    tag.innerHTML = `Tags : ${strTags}`;
    tag.style.margin = '10px'
    tag.style.padding = '5px'

    div.append(p, cat, ar, image, ing, mes, tag);
    document.getElementById('feed').append(div);

}


async function Get(query) {
    let { meals } = await getdata(query);
    // console.log(meals);
    document.getElementById('feed').innerHTML = null;
    meals.forEach(meal => {
        appendData(meal);
    });
}

export { getdata, Get };