/*
Project: Build a Basic To-Do List Manager
Create a To-Do List Manager where a user can:

Add a task.
Mark a task as completed.
Delete a task.
View all tasks (both pending and completed).
Requirements
Store tasks as an array of objects. Each task object should include:

A unique id (e.g., 1, 2, 3).
A description (the task text, e.g., "Complete JavaScript project").
A completed status (true or false).
Implement the following functions:

addTask(description): Adds a new task to the list.
markAsCompleted(id): Marks a task as completed by its id.
deleteTask(id): Deletes a task by its id.
viewTasks(): Displays all tasks, showing whether each task is completed or pending.
Use JavaScript functions and array methods for the implementation.

Example Workflow
javascript
Copy code
addTask("Learn JavaScript"); 
addTask("Solve problems");
viewTasks();
// Output:
// 1. Learn JavaScript - Pending
// 2. Solve problems - Pending

markAsCompleted(1);
viewTasks();
// Output:
// 1. Learn JavaScript - Completed
// 2. Solve problems - Pending

deleteTask(2);
viewTasks();
// Output:
// 1. Learn JavaScript - Completed
Bonus Challenges (Optional)
Prevent adding a task with an empty description.
Allow the user to filter tasks (e.g., show only "Completed" tasks).
*/

