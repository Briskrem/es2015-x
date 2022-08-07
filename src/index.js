import {fruits} from './foods'
import {choice, remove} from './helpers'

let fruit = choice(fruits)
console.log(fruit)

let net = remove(fruits, fruit)
console.log(net)