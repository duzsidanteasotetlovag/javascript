const n = 5;

//1.

console.log("Right half pyramid:")
for (let i = 1; i <= n; i++) {
    console.log("*".repeat(i));
}

//2.

console.log("Left half pyramid:")
for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "*".repeat(i));
}

//3.

console.log("Full pyramid:")

for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
}

//4.

console.log("Inverted right half pyramid:")

for (let i = n; i >= 1; i--) {
    console.log("*".repeat(i));
}

//5.

console.log("Inverted left half pyramid:")

for (let i = n; i >= 1; i--) {
    console.log(" ".repeat(n - i) + "*".repeat(i));
}