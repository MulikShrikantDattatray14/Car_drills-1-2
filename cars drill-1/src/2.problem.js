import { inventory } from "./data.js";

// ==== Problem #2 ====
// The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model of the last car in the inventory is?  Log the make and model into the console in the format of:
//"Last car is a *car make goes here* *car model goes here*"

//TASK-1 :information on the last car in their inventory



// Function to get details of the last car in inventory
function logLastCarDetails() {
  // Check if inventory has cars
  if (inventory.length === 0) {
    console.log("Inventory is empty.");
    return;
  }

  // Destructure the last car's properties
  const { car_make, car_model } = inventory[inventory.length - 1];

  // Log the last car's make and model in the specified format
  console.log(`Last car is a ${car_make} ${car_model}`);
}

// Call the function
logLastCarDetails();
