export default function loadHome(parentContainer) {
    const container = document.createElement('div');
    container.classList.add('card-container');

    const foodContainer = document.createElement('div');
    foodContainer.id = 'menu-food-cention';

    const drinkContainer = document.createElement('div');
    drinkContainer.id = 'menu-drink-section';

    const foodTitle = document.createElement('h2');
    foodTitle.textContent = 'Food Menu';

    const drinkTitle = document.createElement('h2');
    drinkTitle.textContent = 'Drink Menu';

    container.appendChild(foodTitle);
    container.appendChild(foodContainer);
    container.appendChild(drinkTitle);
    container.appendChild(drinkContainer);
} 