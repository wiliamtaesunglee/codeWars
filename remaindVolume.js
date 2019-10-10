function tankvol(h, d, vt) {
    // your code
    let areaCilinder = Math.PI * ((d / 2) ** 2)
    let L = vt / areaCilinder
    console.log(L)
    let areaTriangular = ((d ** 2 - (d - h)) ** 1/2) * (d - h) 
    let senA = ((d ** 2 - (d - h)) ** (1 / 2)) / d
}

tankvol(40,120,3500)// should return 1021 (calculation gives about: 1021.26992027)

tankvol(60,120,3500)// should return 1750

tankvol(80,120,3500)// should return 2478 (calculation gives about: 2478.73007973)