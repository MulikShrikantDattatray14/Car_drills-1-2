import { inventory } from "./data.js";

// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.

const years = [];

//find cars older than the year 2000
for (let i = 0; i < inventory.length; i++) {
  if (inventory[i].car_year < 2000) {
    years.push(inventory[i].car_year);
  }
}

const number = years.length;

console.log(
  `${number} cars were made before the year 2000 and the array of older cars is [${years}]`
);
