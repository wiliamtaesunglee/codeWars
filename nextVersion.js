function nextVersion(version){
    //TODO : find the next version

    let arrVersion = version.split('.')

    for (i = arrVersion.length - 1; i >= 0; i --) {
        if (arrVersion[i] == 9 && i !== 0) {
            arrVersion[i] = 0
            arrVersion[i - 1] + 1
            
        }else {
            arrVersion[i]++
            break
        }
    }
    // let response = (Number(arrVersion.join('')) + 1).toString().split('').join('.') 
    console.log(arrVersion.join('.'))
    return arrVersion.join('.')
  }

  nextVersion("1.2.3")// === "1.2.4";
nextVersion("0.9.9") //=== "1.0.0";
nextVersion("1")// === "2";
nextVersion("1.2.3.4.5.6.7.8")// === "1.2.3.4.5.6.7.9";
nextVersion("9.9")// === "10.0";