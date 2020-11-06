// Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDescriptions = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete

function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    logTaskState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    markCompleted: function() {
      this.complete = true;
    },
    describeTask: function() {
      console.log(`${this.title} and remember to ${this.description}`)
    }
  };
  return task;
}


// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const task3 = newTask("Finish LHL bootcamp", "Just keep swimming!")


task1.logTaskState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logTaskState(); // Clean Cat Litter has been completed
task3.logTaskState()
task3.describeTask()

// console.log(newTask)

// console.log(tasks);

