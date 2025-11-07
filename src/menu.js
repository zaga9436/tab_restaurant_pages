import wineImg from '.wine.jpg';

const menuItems = [];

class MenuItem {
    constructor(name, description, price, img, type) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.img = img;
        this.type = type;
    }
}

function addMenuItems(name, description, price, img, type) {
    let newMenuItem = new MenuItem(name, description, price, img, type);

    menuItems.push(newMenuItem);
}


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

    menuItems.forEach((menuItem) => {
        const card = createItemCard(menuItem);
        if (menuItem.type === 'food') {
            foodContainer.appendChild(card);
        } else if (menuItem.type === 'beverage') {
            drinkContainer.appendChild(card);
        }
    })

    parentContainer.appendChild(container);
} 