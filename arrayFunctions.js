function getOtoslottoSzamok() {
    const szamok = new Set();
    while (szamok.size < 5) {
        szamok.add(Math.floor(Math.random() * 90) + 1);
    }
    return Array.from(szamok);
}

function getSortedNumbers(t_szamok) {
    return [...t_szamok].sort((a, b) => a - b);
}

function getTalalatok(lottoSzamok, tippek) {
    return tippek.filter(tipp => lottoSzamok.includes(tipp)).length;
}

function getHaviLottoSzamok() {
    return Array.from({ length: 4 }, getOtoslottoSzamok);
}

function getHaviKihuzottSzamok(haviLottoSzamok) {
    return [...new Set(haviLottoSzamok.flat())];
}

function getHaviStatisztika(haviLottoSzamok) {
    const osszes = haviLottoSzamok.flat();
    const stat = {};
    
    for (const szam of osszes) {
        stat[szam] = (stat[szam] || 0) + 1;
    }

    return Object.entries(stat).map(([szam, db]) => ({ [Number(szam)]: db }));
}