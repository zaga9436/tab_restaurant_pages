const contactBoxes = [];

class Contact {
    constructor(title, description, icon) {
        this.title = title;
        this.description = description;
        this.icon = icon;
    }
}

function addContact(title, description, icon) {
    let newContact = new Contact(title, description, icon);

    contactBoxes.push(newContact);
}

export default function loadContactPage(parentContainer) {
    const contactContaner = document.createElement('div');
    contactContaner.classList.add("contactContainer");

    const title = document.createElement('h1');
    title.textContent = "Contact Us";

    const text = document.createElement("p");
    text.innerHTML = `At Bravo I'llorno, connecting with our community is just as important as the quality of our cuisine. If you have any questions, would like to make a reservation, or simply want to share your experience, we would love to hear from you!

    We are available by phone, email, or in person at our restaurant.

    <span class="highlight">We hope to see you soon at our table!</span>`;

    const contactCards = document.createElement('div');
    contactCards.classList.add("contact-cards-div");

    contactContaner.appendChild(title);
    contactContaner.appendChild(text);
    contactContaner.appendChild(contactCards);

    contactBoxes.forEach((contact) => {
        const card = createContactCard(contact);
        contactCards.appendChild(card);
    })

    parentContainer.appendChild(contactContaner);
}


function createContactCard(contact) {
    const card = document.createElement('div');
    card.classList.add('contact-card');

    const logo = document.createElement('span');
    logo.classList.add("material-icons", "contact-icon");
    logo.textContent = contact.icon;

    const title = document.createElement('h3');
    title.textContent = contact.title;

    const description = document.createElement('p');
    description.textContent = contact.description;

    card.appendChild(logo);
    card.appendChild(title);
    card.appendChild(description);

    return card;
}

addContact("Phone", "+1 (555) 123-4567", "phone");
addContact("E-mail", "contact@bravoIllHorno.com", "email");
addContact(
  "Location",
  "57 John F. Kennedy Avenue, Ensanche La Fé, Santo Domingo, Dominican Republic.",
  "location_on"
);
addContact(
  "Schedule",
  "Mon - Sat: 12:00 PM - 10:00 PM \nSunday: 12:00 PM - 11:30 PM",
  "schedule"
);