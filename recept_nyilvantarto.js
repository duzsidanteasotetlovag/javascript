let receptek = {
    "Hagyományos Palacsinta": {
        kategoria: "Édesség",
        hozzavalok: ["liszt", "tojás", "tej", "szódavíz", "só"],
        elkeszites: "Csomómentesre keverjük, majd forró serpenyőben kisütjük."
    },
    "Gulyásleves": {
        kategoria: "Leves",
        hozzavalok: ["marhahús", "burgonya", "hagyma", "pirospaprika"],
        elkeszites: "Hagymát pirítunk, húst párolunk, fűszerezzük, majd felöntjük vízzel."
    }
};

function hozzaadas(nev, kategoria, hozzavalok, elkeszites) {
    if (receptek[nev]) {
        console.log("Már van ilyen recept: " + nev);
        return;
    }
    receptek[nev] = { kategoria, hozzavalok, elkeszites };
    console.log("Hozzáadva -> " + nev);
}

function modositas(nev, ujAdatok) {
    if (!receptek[nev]) {
        console.log("Nincs ilyen recept: " + nev);
        return;
    }
    Object.assign(receptek[nev], ujAdatok);
    console.log("Módosítva -> " + nev);
}

function torles(nev) {
    if (!receptek[nev]) {
        console.log("Nincs ilyen recept: " + nev);
        return;
    }
    delete receptek[nev];
    console.log("Törölve -> " + nev);
}

function listazas() {
    console.log("\nRECEPTEK:\n");

    let nevek = Object.keys(receptek);
    if (nevek.length === 0) {
        console.log("Nincs egyetlen recept sem.");
        return;
    }

    for (let nev of nevek) {
        let r = receptek[nev];
        console.log(nev + " (" + r.kategoria + ")");
        console.log("Hozzávalók: " + r.hozzavalok.join(", "));
        console.log("Elkészítés: " + r.elkeszites);
        console.log("---");
    }
}

function kereses(szo) {
    console.log("\nKERESÉS: '" + szo + "'");

    let talalatok = Object.keys(receptek)
        .filter(nev => nev.toLowerCase().includes(szo.toLowerCase()));

    if (talalatok.length === 0) {
        console.log("Nincs ilyen recept.");
        return;
    }
    talalatok.forEach(nev => console.log(" -> " + nev));
}

// Kipróbálás
listazas();

hozzaadas("Sajtos Makaróni", "Főétel",
    ["makaróni tészta", "sajt", "tejföl", "só"],
    "A tésztát kifőzzük, majd összekeverjük a tejföllel és a reszelt sajttal.");

modositas("Gulyásleves", {
    kategoria: "Főétel",
    hozzavalok: ["marhahús", "burgonya", "hagyma", "pirospaprika", "répa"]
});

torles("Hagyományos Palacsinta");

listazas();
kereses("makaróni");