import loadHome from './home.js';
import loadMenu from './menu.js';


const content = document.getElementById('content');
const menuBtn = document.getElementById('menu');

function clearContent() {
  content.textContent = '';
}

menuBtn.addEventListener('click', () => {
  clearContent();
  loadMenu(content);
});


const homeBtn = document.getElementById('home');
homeBtn.addEventListener('click', () => {
  clearContent();
  loadHome(content);
});




loadHome(content);