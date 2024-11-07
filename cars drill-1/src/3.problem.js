import { inventory } from "./data.js";

// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.



// Function to sort car models alphabetically without mutating the original inventory
function sortAlphabetical() {
  // Create a sorted copy of inventory based on car_model
  let model_list=[]
  for(let i=0;i<inventory.length;i++){
    let model= inventory[i].car_model
    model_list.push(model)
  }
  
  // Log the sorted inventory
  model_list.sort((a, b) => a.localeCompare(b))
  console.log(model_list)
}

sortAlphabetical();

