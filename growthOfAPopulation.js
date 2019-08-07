function nbYear(p0, percent, aug, p) {
    let population = (p0 * (1 + percent) + aug)
    let comparePop = population >= p ? (population / p0)  : false
    console.log(comparePop)
}

nbYear(1500, 5, 100, 5000)
// , 15)
nbYear(1500000, 2.5, 10000, 2000000)
// , 10);
nbYear(1500000, 0.25, 1000, 2000000)
// , 94);