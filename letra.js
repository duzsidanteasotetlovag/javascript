import fs from 'fs';
import input from './input.js';


//1. feladat
console.log("1. feladat");
console.log("Adatok beolvasása:")

const szoveg = fs.readFileSync("dobasok.txt","utf-8");

const dobasok = szoveg.split(",").map(x =>Number(x.traim()));

//2. feladat
console.log("2. feladat");

let hely = 0;
let vissza = 0;
let kiir = "";

for(let i=0; i<dobasok.length; i++){
    hely = hely+dobasok[i]

    if(hely % 10 ===0){
        hely = hely -3;
        vissza++;
    }

    kiir = kiir + hely + " ";
}

console.log(kiir.trim());

//3. feladat
console.log("3. feladat");
console.log("A játék során"+ vissza + " alkalommal lépett létrára.");

//4. feladat
console.log("4. feladat");
if(hely >=45){
    console.log("A játékot befejezte.")
} else{
    Console.log("A játékot abbahagyta.")
}