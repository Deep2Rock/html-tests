const menu = document.getElementById("menu");
const menu_items = document.getElementById("menu-items");
let number_clicks = 0;


if (number_clicks == 0) {
    menu.addEventListener('click', function onClick() {
        menu_items.style.display = 'inline';
        number_clicks ++;
        console.log(number_clicks)
    })
} else {
    menu.addEventListener('click', function onClick() {
        menu_items.style.display = 'none';
        number_clicks == 0;
        console.log(number_clicks)
    })
}