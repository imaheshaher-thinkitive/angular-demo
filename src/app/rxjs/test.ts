import {filter, map, Observable, of, pipe} from 'rxjs'

// const nums = of(1,2,3,4)
// const squareValues = map((n:number)=>n*n)
// const squaredNumber = squareValues(nums)

// squaredNumber.subscribe(data => console.log(data))

//* Pipe

const nums = of(1,2,3,4,5)
const squareOddValues = pipe(filter((n:number)=>n%2!==0),map((val:number)=>val*val))

const squaredOddNumber = squareOddValues(nums)
squaredOddNumber.subscribe(data=>console.log(data))