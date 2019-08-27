function save(sizes, hd) {
    // your code here
let hdStored = 0
let files = 0
sizes.forEach(num => {
     hdStored += num
     if (hdStored <= hd) {
         files++
     }
 })

  return files
  }

save([4,4,4,3,3], 12)
//    -> 3
// # 4+4+4 <= 12, but 4+4+4+3 > 12