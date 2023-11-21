let random = ["random sentence 1", "random sentence 2", "random sentence 3"];
let count = 0;
function extremelyRandom(random) {
    let howMany = 0; 
    for (i of random) {
        console.log(i);
        howMany += 1;
    }
    return howMany;
}
const randSentences = extremelyRandom(random);
console.log(randSentences);