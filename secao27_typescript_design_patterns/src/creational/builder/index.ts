// import { MealBox } from './classes/meal-box';
// import { Beans, Beverage, Dessert, Meat, Rice } from './classes/meals';

import { MainDishBuilder } from './classes/main-dish-builder';
import { VeganDishBuilder } from './classes/vegan-dish-builder';

// const rice = new Rice('Arroz', 5);
// const meat = new Meat('Feijao', 10);
// const beans = new Beans('Carne', 20);
// const beverage = new Beverage('Arroz', 5);
// const dessert = new Dessert('Arroz', 5);

// const mealBox = new MealBox();
// mealBox.add(rice, meat, beans);

// console.log(mealBox);
// console.log(mealBox.getPrice());

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal().makeDessert();
console.log(mainDishBuilder.getMeal());
console.log(mainDishBuilder.getPrice());

mainDishBuilder.reset();
const meal2 = mainDishBuilder.makeBeverage().getMeal();
console.log(meal2);

const veganDishBuilder = new VeganDishBuilder();
const veganMeal = veganDishBuilder.makeMeal().getMeal();
console.log(veganMeal);
console.log(veganMeal.getPrice());
