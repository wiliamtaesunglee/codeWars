var ownedCatAndDog = function(catYears, dogYears) {
    let catCounter = 0
    while(catYears > 0){
        catYears -= 15
        console.log(catCounter, catYears)
        catCounter++
        catYears -= 9
        catCounter++
        if (catYears > 0) {
            let sumCat = Math.floor(catYears / 4)
            catCounter += sumCat 
        }
    }
    let dogCounter = 0
    while(dogYears > 0){
        dogYears -= 15
        dogCounter++
        dogYears -= 9
        dogCounter++
        if (dogYears > 0) {
            let sumDog = Math.floor(catYears / 5)
            dogCounter += sumDog 
        }
    }
    console.log( [catCounter, dogCounter])
    }
    ownedCatAndDog(56,64)//, [10,10]