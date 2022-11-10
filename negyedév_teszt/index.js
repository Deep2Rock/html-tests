var palindrom = document.getElementById("1");
let save = "ds";
let submit = document.getElementById("2")
let cica = '';
palindrom.addEventListener('change', function onClick(e){
    cica = e.target.value;
});

submit.addEventListener('click', function onClick(){
    save = cica;
    console.log(save)
})

function reverseString(str) {
    var splitString = str.split(save);    
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join();
    return joinArray;
}
