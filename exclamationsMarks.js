function remove(s){
    //coding and coding....
   let wordArrS = s.split(/\W+/g)
   let newWordArrS = wordArrS.filter(a => {
     if (a.length !== 0) return a
   })


  //  console.log(newWordArrS)

   let arrResp = []
   let arrS = s.split(' ')

    console.log('arrS', arrS)
  for (i = 0; i < newWordArrS.length; i++) {
  
    //  console.log(word)
    

    let elemS = arrS.filter(item => {
    if (item.length !== 0) {
      console.log('elemS', item, i)
      
      let arrCompS = (item.split(/\w/g))
      console.log('arrCompS', arrCompS)
      let compareS = (arrCompS[0] > arrCompS[arrCompS.length - 1] ? arrCompS[arrCompS.length - 1] : arrCompS[0])
      arrResp.push(`${compareS}${newWordArrS[i]}${compareS}`)
      delete arrResp[i + 1]
    }  

    })
  
    
  }
  // let resp = []

let resp = arrResp.filter(elem => {
  if (elem.length > 0) return elem
})
  console.log(resp.join(' '))
  return resp.join(' ')
// let response = []
//   let arrRespLength = arrResp.length

//   for (i = 0; i < arrRespLength / 2; i++) {
//     response.push(arrResp[i])
//   }

//   let finalResponse = response.join(' ')

//   console.log(finalResponse)
//   return finalResponse

   

  }



remove("!!jugq!!!!!!!!! !!!!wozrtjd!!! ")
// "Hi")
// remove("!Hi! Hi!")
//  , "!Hi! Hi")
// remove("!!Hi! !Hi!!")
//  , "!Hi! !Hi!")
// remove("!!!!Hi!! !!!!Hi !Hi!!!")
//  , "!!Hi!! Hi !Hi!")


















    // let arrResp = []
    // let arrS = s.split(' ')
    // let elemS = arrS.map(item => {
    // let arrCompS = (item.split('Hi'))
    // let compareS = (arrCompS[0] > arrCompS[1] ? arrCompS[1] : arrCompS[0])
    // arrResp.push(`${compareS}Hi${compareS}`)
    // })
    // let response = arrResp.join(' ')
    // console.log(response)
    // return response 