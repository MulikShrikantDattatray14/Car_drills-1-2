import { inventory } from "./data.js";

    // ==== Problem #4 ====
    // The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.


// task-1 : return an array from the dealer data containing only the car years
let years = [];
for (let i = 0; i < inventory.length; i++) {
  years.push(inventory[i].car_year);
}
console.log(years);
