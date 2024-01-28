
const alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' '];
const num = [  11,  12,  13,  14,  15,  16,  17,  18,  19,  20,  21,  22,  23,  24,  25,  26,  27,  28,  29,  30,  31,  32,  33,  34,  35,  36];
const spec = [ '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '<', '>', '?', '/', '|', '{', '}', '[', ']', '=', '~', '`', ':', ';'];
let wordd;
let key;
let word;


document.getElementById("btn").onclick = function(){
    wordd = document.getElementById("word").value;
    word = wordd.replace(/[0-9]/g, '');
    key  = wordd.replace(/[!@#$%^&*()_+<>?/|{}[\]=~`:;]/g, '');
    start();
}
function start(){
    let array_word = [];
    let array_num = [];
    let result = [];
    let kres
    let a = 0;
    function div_arr(){
        while(a <  word.length){
            array_word.push(word[a]);
            div_arr_two(a);
            a++;
        }
    }
    function div_arr_two(a){
        array_num.push(num[spec.indexOf(array_word[a])]);
        keyy();
        offset();
    }
    function keyy(){
        kres = Number(key.substring(0, 2));
        key = key.substring(2);
    }
    function offset(){
        result.push(alph[(num.indexOf(array_num[a]) - kres + alph.length) % alph.length]);
    }    
    div_arr();
    let aw = String(result);
    let av = aw.replace(/,/g, '');
    document.getElementById("result").innerHTML = av;

}
