const blue = document.getElementById("id1");
const red = document.getElementById("id2");

console.log(blue)
blue.addEventListener('click', function onClick() {
    blue.style.backgroundColor = 'blue';
    blue.style.color = 'white';
});

red.addEventListener('click', function onClick() {
    red.style.backgroundColor = 'red';
    red.style.color = 'white';
});