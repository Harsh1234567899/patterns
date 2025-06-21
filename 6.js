let pattern = ''
let k = 1
for (let i = 1; i <= 5; i++) {
    for(let j = 1; j<=5;j++){
        pattern += k.toString().padStart(3,' ') // .toString().padStart(3,' ') is adding spaces 
        k++
    }
    pattern += "\n"
}
console.log(pattern)
