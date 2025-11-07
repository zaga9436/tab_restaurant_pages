export default function loadHome(parentContainer) {
    const presentation = document.createElement('div');
    presentation.classList.add('presentation');

    const title = document.createElement('div');
    const titleText = document.createElement('h1');
    titleText.textContent = "Bravo I'llorno";
    title.appendChild(titleText);

    const presentationText = document.createElement('div');
    const paragraph1 = document.createElement('p');
    paragraph1.textContent = `Bravo I'llhorno is born from the love of home cooking, inspiring a
            culinary offering dedicated to providing the best Italian food. We
            use genuinely Italian products and the freshest ingredients to
            guarantee an unmatched taste, all within a warm and familiar
            framework.\n\n`;
    const paragraph2 = document.createElement('p');
    paragraph2.textContent = `We strive to offer a moment of happiness at every gathering,
            combining a memorable dining experience with impeccable service. The
            design is modern and laid-back, visually highlighting the kitchen
            display and, as the central protagonist, our traditional wood-fired
            oven. We want you to come and share our great passion for Italy and
            its cuisine.`;
    presentationText.appendChild(paragraph1);
    presentationText.appendChild(paragraph2);

    presentation.appendChild(title);
    presentation.appendChild(presentationText);

    parentContainer.appendChild(presentation);        
}