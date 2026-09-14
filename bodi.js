let txt = "SZIASZTOKBODZANBODZANVAGYOK";

//1.

console.log(txt.slice(0, 4));

//2.
console.log(txt.slice(2, 7));

//3.
console.log(txt.slice(4));

//4.
console.log(txt.slice(4, 10));

//5.
console.log(txt.toUpperCase);

//6.
let text = " ";
for (let i = 0; i < txt.length; i++) {
  text += i % 2 === 1 ? txt[i].toUpperCase() : txt[i];
}

//7.
console.log(txt.replace("e", "E"));

//8.
const tomb = txt.split(/e/i);
console.log(tomb);
