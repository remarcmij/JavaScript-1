# Class 12 - JavaScript Week 2

## Coding Examples

These coding examples are best shown using live coding. Initial versions of the files
are in the `live` folder. Final versions are in the `final` folder.

Note: the numbers below indicate line numbers in the final versions.

### 1-while-loop

Purpose: explanation of a bare-bones `while` loop

- 3: declaration and initialization (= first-time assignment)
- 5: `while` loop and loop condition
- 7: simplify to `index += 1`
- Use the VSCode debugger to step through the loop. The while loop show this very nicely.
(The for-loop doesn't show this as clearly).

### 2-for-loop

Purpose: explanation of a bare-bones `for` loop (transformed from a while loop)

- Show this file side-by-side with 1-while-loop
- Show how you can transform the `while` loop to a `for` loop
- Simplify `index = index + 1` to `index += 1` and finally to `index++`

### 3-months-while

Purpose: explain that `for` loops are often used in conjunctions with arrays (collections)

- Explain why comments were added to keep track of the month names
- 22: Explain the loop condition and the `.length` property
- Explain array indexing
- 23: Simplify to `yearLength += monthDays[index];` and explain as 'adding to'
- Simplify `index = index + 1` to `index += 1` but not to `index++`.
- 30: Explain that console.log can have multiple, comma-separated arguments.

### 4-months-for

Purpose: shows how we can associate two arrays by arranging relationship by a common index (as lead-in to objects)

- The two array are loosely related by common index. However, we still need comments to relate the month lengths to the names
- The second for-loop is a lead-in to the concept of 'filtering'

### 5-months-objects

Purpose: to introduce objects as a way to group together related information

- No longer need comments to associate information

### 6-months-properties

Purpose: to introduce dynamically accesses properties

- 20: initialize an empty array with `const`. Explain that it can be `const` because
we are not reassigning the variable although we will be modifying the array
- 22: Explain the double indexing
- 23: introduce the logical OR operator `||`; show where you can find the documentation for `includes` and `push`
- 24: introduce push

### 7-simple-functions

Purpose: Explain JS functions as derived from math functions

### 8-months-functions

Purpose: Show a more complex function and re-use

- Explain how we can solve the problems of case-sensitivity
- 91: introduce for-of loop

### 9-months-weekno

Purpose: to develop a solution in class for finding the month in which a particular week number starts

