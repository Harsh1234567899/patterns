let pattern = ''

for (let i = 5; i >= 1; i--) {
    for(let j = 1; j<=5;j++){
        pattern += i
    }
    pattern += "\n"
}
console.log(pattern);

function pattens(num){
    for (let i = 5; i >= 1; i--) {
    for(let j = 1; j<=5;j++){
        num += i
    }
    num += "\n"
}
return num
}
console.log(pattens(""))