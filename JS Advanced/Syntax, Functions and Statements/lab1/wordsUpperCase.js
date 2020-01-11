function solve(a){
    return a.match(/\w+/gim)
        .map(x => x.toUpperCase()).join(", ");
}

console.log(solve('Hi, how are you?'));