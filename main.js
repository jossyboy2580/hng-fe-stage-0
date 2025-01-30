let timeSlot = document.querySelector("#timeSlot");

let current_time = new Date();
timeSlot.textContent = current_time.toISOString();
