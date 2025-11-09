import wineImg from "./wine.png";

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

export default function loadMenu(parentContainer) {
  const container = document.createElement("div");
  container.classList.add("card-container");

  const foodContainer = document.createElement("div");
  foodContainer.id = "menu-food-section";

  const drinkContainer = document.createElement("div");
  drinkContainer.id = "menu-drink-section";

  const foodTitle = document.createElement("h2");
  foodTitle.textContent = "Food";

  const drinkTitle = document.createElement("h2");
  drinkTitle.textContent = "Beverages";

  container.appendChild(foodTitle);
  container.appendChild(foodContainer);
  container.appendChild(drinkTitle);
  container.appendChild(drinkContainer);

  menuItems.forEach((menuItem) => {
    const card = createItemCard(menuItem);

    if (menuItem.type === "food") {
      foodContainer.appendChild(card);
    } else if (menuItem.type === "beverage") {
      drinkContainer.appendChild(card);
    }
  });

  parentContainer.appendChild(container);
}

function createItemCard(item) {
  const div = document.createElement("div");

  if (item.type === "food") {
    div.classList.add("food-card");
  } else if (item.type === "beverage") {
    div.classList.add("beverage-card");
  }

  const img = document.createElement("img");
  img.src = item.img;

  const name = document.createElement("h4");
  name.textContent = item.name;

  const descripcion = document.createElement("p");
  descripcion.classList.add("description");
  descripcion.textContent = item.description;

  const price = document.createElement("p");
  price.textContent = `$${item.price}.00`;

  div.appendChild(img);
  div.appendChild(name);
  div.appendChild(descripcion);
  div.appendChild(price);

  return div;
}

/*data */
addMenuItems(
  "STELLA BRAVA",
  "Star-shaped pizza with tomato sauce, mozzarella, ricotta, pepperoni, and basil",
  575,
  "https://fornobravo.myshopify.com/cdn/shop/files/FornoBravo_Kids_031_503x.jpg?v=1736886881",
  "food"
);
addMenuItems(
  "CALZONE IL BRAVISSIMO",
  "Mozzarella, gorgonzola, ricotta, peppers, mushrooms, raw onion, and white truffle oil",
  625,
  "https://fornobravo.myshopify.com/cdn/shop/products/calzonbravissimo_503x503.webp?v=1644433345",
  "food"
);
addMenuItems(
  "FOCCACIA ROSSA",
  "Ricotta cheese, roasted tomatoes, aromatic herbs.",
  420,
  "https://fornobravo.myshopify.com/cdn/shop/products/focacciarossa_503x.webp?v=1644431985",
  "food"
);
addMenuItems(
  "FETTUCINE ALFREDO",
  "Fresh homemade fettuccine with alfredo sauce.",
  435,
  "https://fornobravo.myshopify.com/cdn/shop/files/FornoBravo_Octubre2_086_503x.jpg?v=1736888141",
  "food"
);
addMenuItems(
  "ARRABIATA BRAVA SIN CAMARONES",
  "Arrabiata sauce, peperoncini, pomodoro, and cherry tomatoes.",
  425,
  "https://fornobravo.myshopify.com/cdn/shop/files/ArrabiataBrava_503x.jpg?v=1736871701",
  "food"
);
addMenuItems(
  "RIGATONI DI MARIA",
  "shrimp, truffle cream, goat cheese, gratinated with mozzarella.",
  575,
  "https://fornobravo.myshopify.com/cdn/shop/files/IMG_7052_1_503x.jpg?v=1736871380",
  "food"
);

addMenuItems(
  "CALA ROSSA",
  "Frozen or fresh lemon and strawberry.",
  245,
  "https://fornobravo.myshopify.com/cdn/shop/files/frozenlimonyfresa_503x.jpg?v=1713984375",
  "beverage"
);
addMenuItems(
  "SAN VITO",
  "Frozen or fresh strawberry and passion fruit",
  245,
  "https://fornobravo.myshopify.com/cdn/shop/files/FrozendeChinolayGranadina_503x.jpg?v=1713984213",
  "beverage"
);
addMenuItems(
  "CAPRI",
  "Frozen or fresh lemon and mint juice.",
  245,
  "https://fornobravo.myshopify.com/cdn/shop/files/FrozendeLimonyMenta_503x.jpg?v=1713984170",
  "beverage"
);

addMenuItems(
  "VILLA S. ANDREA II PERTICATO",
  "Italian red wine",
  2.745,
  wineImg,
  "beverage"
);