var palindrom = document.getElementById("1");
let save = '';
let submit = document.getElementById("2")
let original = '';
palindrom.addEventListener('change', function onClick(e){
    original = e.target.value;
});


function isPalindrome(save) {
    const withoutSpace = save.split(' ').join('');
    const reversedString = withoutSpace.split('').reverse().join('');
    return withoutSpace === reversedString;
}


submit.addEventListener('click', function onClick(){
    save = original;
    console.log(save)
    console.log(isPalindrome(save))
})

