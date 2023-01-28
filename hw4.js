
let randomNumber = [];
let ganjil = [];
let genap = [];

let max_ganjil = - Infinity
let min_ganjil = Infinity
let min_genap =  Infinity
let max_genap = -Infinity
let jumlah_ganjil = 0;
let jumlah_genap = 0;
let rata = (jumlah_ganjil / 50)



for(let i = 0; i < 100; i++) {
  randomNumber.push(Math.ceil(Math.random() * 50)); 
  if(i % 2 == 0){
    genap.push(randomNumber[i])
  } else {
    ganjil.push(randomNumber[i])
  }
}  
for(let i = 0; i<ganjil.length; i++){
  if(ganjil[i]>max_ganjil) max_ganjil = ganjil[i]
  if(ganjil[i]<min_ganjil) min_ganjil = ganjil[i]
   
}
for(let i = 0; i<genap.length; i++){
  if(genap[i]>max_genap) max_genap = genap[i]
  if(genap[i]<min_genap) min_genap = genap[i]
}
 for(i in ganjil){
  jumlah_ganjil += ganjil[i]
 }
for( i in genap){
  jumlah_genap += genap[i]
}


console.log(randomNumber)
console.log(genap)
console.log(ganjil)
console.log(max_ganjil, min_ganjil)
console.log (max_genap, min_genap)
console.log(jumlah_ganjil)
console.log(jumlah_genap)
console.log(rata)