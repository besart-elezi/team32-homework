
const garden1SizeInM2 = 100
const volume1InMeters = 8 * 10 *10
const house1Price = volume1InMeters * 2.5 * 1000 + garden1SizeInM2 * 300;
const house1Cost = 2500000;
if(house1Cost>house1Price){
    console.log("Peter is paying too much ")
}else{
    console.log("Peter is paying too little")
}


console.log(house1Price);


const volume2InMeters = 5 * 11 * 8 
const garden2SizeInM2 = 70
const house2Cost = 1000000;
const house2Price = volume2InMeters * 2.5 * 1000 + garden2SizeInM2 * 300;
if(house2Cost>house2Price){
    console.log("Julia is paying too much ")
}else{
    console.log("Julia is paying too little")
}
console.log(house2Price);