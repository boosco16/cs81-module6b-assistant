function PersonalAssistant(name) {
  this.name = name;
  this.tasks = [];
  this.mood = "neutral";
}

// adds a new task to the list
PersonalAssistant.prototype.addTask = function(task) {
  this.tasks.push(task);
};

// removes the first task in the list and logs it as completed
PersonalAssistant.prototype.completeTask = function() {
  if (this.tasks.length > 0) {
    const finished = this.tasks.shift();
    console.log("Completing task:", finished);
    console.log("Now you have " + this.tasks.length + " tasks left.");
  } else {
    console.log("No tasks to complete.");
  }
};

// prints out the assistant's current mood
PersonalAssistant.prototype.reportMood = function() {
  console.log("Mood:", this.mood);
};

// ---- SIMULATING A DAY ----
let jarvis = new PersonalAssistant("Jarvis");

jarvis.addTask("Finish CS 81 Assignments");
jarvis.addTask("Return UPS Packages");
jarvis.addTask("Do laundry");

jarvis.mood = "productive";

console.log("Hi! I'm " + jarvis.name + ", your assistant.");
console.log("You have " + jarvis.tasks.length + " tasks left.");
jarvis.reportMood();

jarvis.completeTask();

jarvis.mood = "accomplished";
jarvis.reportMood();
