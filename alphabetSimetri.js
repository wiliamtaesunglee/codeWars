function solve(arr){  
    //code

        arr.forEach(string => {
            let stringTest = [...string]
            console.log(stringTest)
            stringTest.forEach(letter => {
                console.log(letter.charCodeAt())
            })
        })
    };

    solve(["abode","ABc","xyzD"]) 
    // = [4, 3, 1]