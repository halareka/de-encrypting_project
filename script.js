function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' '];
const num = [  11,  12,  13,  14,  15,  16,  17,  18,  19,  20,  21,  22,  23,  24,  25,  26,  27,  28,  29,  30,  31,  32,  33,  34,  35,  36];
const spec = [ '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '<', '>', '?', '/', '|', '{', '}', '[', ']', '=', '~', '`', ':', ';'];
let word;
let textToCopy = 0;

document.getElementById("btn").onclick = function(){
    word = document.getElementById("word").value;
    start();
}
function start(){
    let key_one;
    let abc = 0;
    const result = [];
    const arr_key_one = [];
    const array_word = [];
    function division_one(word, len){
        let a = 0;
        while(a < len){
            key_one = getRandomNumber(10, 36);
            offset(word,a,key_one);
            arr_key_one.push(key_one);
            a++;
            division_two();
        }
    }
    function offset(word,a,key_one){
        array_word.push(num[(alph.indexOf(word[a]) + key_one) % alph.length]);
    }
    function division_two(){
        let index = num.indexOf(array_word[abc]);
        if(index !== -1){
            result.push(spec[index]);
            result.push(arr_key_one[abc])
        }else{
            console.log("err");         
        }
        abc++;
    }
    division_one(word, word.length);
    division_two();
    let aw = String(result);
    let av = aw.replace(/,/g, '');
    textToCopy = av;
    document.getElementById("result").innerHTML = av;
}
// 
function copyToClipboard() {
    var tempInput = document.createElement('input');
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
}
