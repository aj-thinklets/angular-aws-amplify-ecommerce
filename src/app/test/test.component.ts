import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';


const products = [
  { name: "Masala Wafer", categoary: "Wafer", price: 10, weight: "25gm" },
  { name: "Kela Wafer", categoary: "Wafer", price: 10, weight: "75gm" },
  { name: "Tomato Wafer", categoary: "Wafer", price: 10, weight: "65gm" },
  { name: "Masala Wafer", categoary: "Wafer", price: 5, weight: "25gm" },
  { name: "Kela Wafer", categoary: "Wafer", price: 5, weight: "55gm" },
  { name: "Tomato Wafer", categoary: "Wafer", price: 6, weight: "50gm" },
  { name: "Chevdo", categoary: "Chevdo", price: 6, weight: "25gm" },
  { name: "Khatha Metha", categoary: "Chevdo", price: 10, weight: "25gm" },
  { name: "Kurkure", categoary: "Chevod", price: 8, weight: "25gm" },
]

const ages = [21, 7, 31, 32, 33, 55, 60, 10, 15, 70, 65, 76]


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {



  constructor() {

    /*========================
    ForEACH and Standard For fn
    =========================*/

    //1--Standard For loop
    // for (let i = 0; i < products.length; i++) {
    //   console.log(products[i]); //populate array with all elements
    // }

    //1a--Using for each
    // products.forEach(function(prd) {
    //   console.log(prd);
    // })

    //1b -- using es6 arrow function
    // products.forEach(prd => console.log(prd));

    //1c --- extract values of array elements
    // products.forEach(prd => console.log(prd.name));


    /*========================
       Filters fn
   =========================*/

    //find all age above 21 that can drink 
    // let canDrink = [];
    // for ( let i =0; i<ages.length; i++) {
    //   if (ages[i] >=21 ) {
    //     canDrink.push(ages[i]);
    //   }
    // }
    // console.log(canDrink);

    // //find all age above 21 that can drink using function
    // const canDrinks = ages.filter(function(age) {
    //   if (age >= 21) {
    //     return true;
    //   }
    // })

    // console.log(canDrinks);

    //find all age above 21 that can drink  sort version
    // const canDrink3 = ages.filter(age => age >= 21);
    // console.log(canDrink3)

    //filter all wafter categories
    // const filteredPrd = products.filter(prd => prd.categoary === 'Wafer');
    // console.log(filteredPrd);

    //  //filter all wafter with price 5 
    //  const lessPrice = products.filter(prd => prd.price === 5);
    //  console.log(lessPrice);

    //  //filter all products with weight greater than 50gms
    //  const weightfilter = products.filter(prd => prd.weight >= '75')
    //  console.log(weightfilter);

    // fitler all weight between 60 and 80
    // const rangeWeight = products.filter(prd => (prd.weight >= '60' && prd.weight < '80'))
    // console.log(rangeWeight);\

    // Matching items using filter
    // const filteredItem = products.filter(prd => prd.name === 'Masala Wafer');
    // console.log(filteredItem);


    /*========================
       Map fn
   =========================*/

    // Create new product array of name and name and price as new object
    //const newProduct = products.map(function(prd) {
    // return prd.name;
    //return `${prd.name}-(${prd.price})`
    //  return {
    //   newName: prd.name,
    //   newPrice: prd.price * 2 //double price
    //  }
    //})
    //  console.log(newProduct);
    // Square root of all ages

    // const SqrtofAge = ages.map(age => Math.sqrt(age));
    // console.log(SqrtofAge);

    // const SqrtofAgeandthanMult = ages
    // .map(age => Math.sqrt(age)) //first Square
    // .map(age => age * 2); // and than multiply
    // console.log(SqrtofAgeandthanMult); //result
    /*========================
     Sort fn
    =========================*/

    // //Sort by price lowest to highest
    // const sortbyPrice = products.sort((a, b) => (a.price > b.price ? 1 : -1));
    // console.log(sortbyPrice);

    // //Sort by weight highest to lowest
    // const sortbyWeigh = products.sort((a, b) => (a.weight > b.weight ? -1 : 1))
    // console.log(sortbyWeigh);

    // //Sort ages low to hight
    // const sortages = ages.sort((a, b) => a - b);
    // console.log(sortages);
    // //Sort age hight to low
    // const sortages2 = ages.sort((a, b) => b - a);
    // console.log(sortages2);

    /*========================
       Reduce
      =========================*/

    //Sum of age using standard for 
    // let ageSum = 0;
    // for (let i = 0; i < ages.length; i++) {
    //   ageSum += ages[i]
    // }
    // console.log(ageSum);

    // //Using redunce
    // const ageSum2 = ages.reduce(function (total, age) {
    //   return total + age;
    // }, 0); //second parameter 0 (it will iterate 0 + <first age>, <first age> + < second age>.....)

    // console.log(ageSum2);

    // //sort hand
    // const ageSum3 = ages.reduce((total, age) => (total + age), 0);
    // console.log(ageSum3);

    // //Sum of product price using standard method
    // let prdSum = 0;
    // for (let i = 0; i < products.length; i++) {
    //     prdSum += products[i].price;
    // }
    // console.log('Sum using standard method', prdSum);

    // //Sum product price short hand
    // const sumPrdPrice = products.reduce((total, prc) => (total + prc.price), 0);
    // console.log(sumPrdPrice);

     /*========================
       Find function
      =========================*/
     // const findWafer = products.find(prd => prd.name === 'Masala Wafer');
     // console.log(findWafer); // Return first matched value, whereas using filter it returns all matching values

      /*========================
       Every and Some and Includes
      =========================*/

      //check if there are items in array less than 15 Rs
      //const checkItem =  products.every(prd  => prd.price <= 15);
      //console.log(checkItem);

      //check if one of the items in the array is less than 4 Rs
      // const checksome = products.some(prd => prd.price <= 4);
      // console.log(checksome);

      //Includes
      //const includesexample = ages.includes(21);
      //console.log(includesexample);

  }

  ngOnInit() {
  }







}
