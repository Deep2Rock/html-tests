const menu = document.getElementById("reveal-menu");
const menu_items = document.getElementById("menu");
let number_clicks = 0;

menu.addEventListener('click', function onClick() {

if (number_clicks == 0) {
    menu_items.style.display = 'inline';
    number_clicks += 1;
} else if (number_clicks >= 1){
    menu_items.style.display = 'none';
    number_clicks = 0;
}
})