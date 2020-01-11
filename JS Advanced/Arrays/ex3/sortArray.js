function solve(arr) {
    let result = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));

    return result.join("\n");
}

console.log(solve(['alpha',
    'beta',
    'gamma']));