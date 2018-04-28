## Homework Week 3

```
Topics discussed in class this week:
• Git part 2
• Advanced data types [Objects]
• Conditions
• Statements vs Expressions
• Loops (for/while)
```

## Step 1: Feedback

_Deadline Tuesday_

Please provide feedback to the homework of last week of one of your fellow students. You will be assigned to one of the cards in Trello by the class lead of this week.

## Step 2: Recap/Read

- Have a look at [The Secret Life of JavaScript Primitives](https://javascriptweblog.wordpress.com/2010/09/27/the-secret-life-of-javascript-primitives/)

- Go through the topics of the last lecture:

    - [Operators](./../../../../fundamentals/blob/master/fundamentals/operators.md)
    - [Naming conventions](./../../../../fundamentals/blob/master/fundamentals/naming_conventions.md)
    - [Advanced data types (Objects)](./../../../../fundamentals/blob/master/fundamentals/objects.md)
    - [Conditional execution](./../../../../fundamentals/blob/master/fundamentals/conditional_execution.md)
    - [Statements vs Expressions](./../../../../fundamentals/blob/master/fundamentals/statements_expressions.md)
    - [Loops (for/while)](./../../../../fundamentals/blob/master/fundamentals/loops.md)

## Step 3: Watch

1. If you haven't done already, watch: [What is programming](https://www.khanacademy.org/computing/computer-programming/programming/intro-to-programming/v/programming-intro)
Just watch the 2 min video, you do not have to do the entire JavaScript course (It could be useful later on though).

2. Please watch the following parts of the course, [Programming Foundations Fundamentals](https://www.lynda.com/Programming-Foundations-tutorials/Welcome/83603/90426-4.html) on Lynda.com (if you don't have access to Lynda yet ask Gijs):
    <br>**4. Writing Conditional Code**
    <br>**5. Modular Code** (Note: the section _Understanding variable scope is outdated_, we wil cover it in class)
    <br>**6. Iteration: Writing Loops**
    <br>**7. More About Strings**
    <br>**8. Collections**
    <br>**11. When Things Go Wrong**

## Step 4: Rover the Robot

Go and try out this cool game: [roverjs.com](http://roverjs.com), written by one of our HYF teachers, Joost Lubach. You should be able to complete at least the _Introduction_ and _Loops_ chapters. But see how far you can get!

## Step 5: Homework

_Deadline Wednesday_

### 5.1  Preparation

This week we will be enlisting the help of ESLint to check your JavaScript code for potential issues. You should already have installed the ESLint plugin in VSCode and used `npm` to install ESLint itself. If unsure, please check the section in [VSCode Tips](https://github.com/HackYourFuture/fundamentals/tree/master/VSCodeTips#installation-instructions) on that again.

Once you have confirmed that ESLint is installed, follow these step to prepare for the homework.

1. Open the folder `hyf-javascript1` in VSCode.

2. In order for ESLint to do its work, we must tell it which rules to follow. For this purpose, create a file with the following exact name directly in the `hyf-javascript1` folder: `.eslintrc.json`.

3. Now, copy the content from the (grey) code box in [Code Formatting - ESLint](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/code_formatting.md#eslint) into this file and save it. This represent the set of rules that we want ESLint to check against.

    Warnings from ESLint will show up in VSCode in your JavaScript file as green wavy underlines (note the VSCode Spell Checker extension does the same).


4. Create a `week2` folder inside `hyf-javascript1` folder. For all the following exercises, create a new `.js` file in the `week2` folder with the file name as specified in parentheses in the exercise heading. Remember to start each file with `'use strict';`.

**IMPORTANT NOTE**: In each assignment write at least two `console.log` statements to verify if your code works correctly. In other words proof that you code works as expected. If you need inspiration look at the steps defined in the assignments from last week.

### Exercise 1 - Strings! (`1-strings.js`)

Consider the following string:

```js
let myString = "hello,this,is,a,difficult,to,read,sentence";
```

1\.1 Add the string to your file and log it.<br />
1\.2 Log the length of `myString`.<br />
1\.3 The commas make that the sentence is quite hard to read. Find a way to remove the commas from the string and replace them with spaces.<br />
1\.4 Log `myString` to see if you succeeded.<br />

### Exercise 2 - Arrays! (`2-arrays.js`)

Consider the following array:

```js
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
```

2\.1 Add a statement that adds Mauro's favorite animal *'turtle'* to the existing array.<br />
2\.2 Log your new array!<br />
2\.3 Now add Jim's favorite animal to the array, it's *'meerkat'*, but make sure it will be placed after *'blowfish'* and before *'capricorn'*.<br />
2\.4 Write a `console.log` statement that explains in words _you think_ the new value of the array is.<br />
2\.5 Log your new array!<br />
2\.6 Log the length of the array, add a message: *'The array has a length of: '* (here you should show the length of the array).<br />
2\.7 Jason does not like *'giraffe'*, delete this animal from the array.<br />
2\.8 Again log your new array.<br />
2\.9 Now if unlike Jim, you don't like *'meerkat'* and you want to delete it from the array, but you don't know the position or the `index` of the item in the array, how can you find it?<br />
2\.10 Log the index of *'meerkat'*. Add a message so it says: *'The item you are looking for is at index: '* (here you should show the index of the item).<br />

### Exercise-3 Loops (`3-months.js`)

Below is the last 'loops' example we used in class.

```js
'use strict';

const months = [
  { name: 'January', days: 31 },
  { name: 'February', days: 28 },
  { name: 'March', days: 31 },
  { name: 'April', days: 30 },
  { name: 'May', days: 31 },
  { name: 'June', days: 30 },
  { name: 'July', days: 31 },
  { name: 'August', days: 31 },
  { name: 'September', days: 30 },
  { name: 'October', days: 31 },
  { name: 'November', days: 30 },
  { name: 'December', days: 31 }
];

for (let i = 0; i < months.length; i++) {
  console.log(months[i].name, 'has', months[i].days, 'days');
}
```

We want to make sure that the total number of days from the `months` array add up to 365. Copy the code above and modify it to total up the number of days. Then, check to see if the total is equal to 365. If true, print the message `'Yep, it adds up to 365.'`. If false, print the message `'Oh no! It doesn\'t add up to 365!'`.

*Hint*: to make this work, you need to add some initialization code just before the loop, modify the loop body to build up the total, and finally add some code after the loop to check the total and print your conclusion.

When you have reached a conclusion (let's say, there is no error), make some modification to the `months` array so that you can confirm that your code also works in the opposite case (if there was no error, there should now be one, or vice versa). Once you have convinced yourself that your code also works for the opposite case, restore the `months` array back to the original state.

### Excercise 4 - Maartje's work (`4-maartje.js`)

Below you see a very interesting small insight in Maartje's work (note: the durations are in minutes):

```js
const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180
  },
  {
    name: 'Some web development',
    duration: 120
  },
  {
    name: 'Fix homework for class10',
    duration: 20
  },
  {
    name: 'Talk to a lot of people',
    duration: 200
  }
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 240
  },
  {
    name: 'Some more web development',
    duration: 180
  },
  {
    name: 'Staring out the window',
    duration: 10
  },
  {
    name: 'Talk to a lot of people',
    duration: 200
  },
  {
    name: 'Look at application assignments new students',
    duration: 40
  }
];

const tasks = monday.concat(tuesday);
```

Your assignment is to compute how much Maartje has earned by completing these tasks. For some unexplained reason, Maartje only gets paid for tasks that take two hours or more. We don't know what Maartje earns per hour (she won't tell us), so just make up a reasonable number yourself (by the way, she gets paid in Euros).

When you have computed Maartje's earnings, use a `console.log` statement to print the message (replace the amount by the result of your computation):

```
Maartje has earned €123.45
```

You need to do some research on how you can format a number so that it prints with two decimal places.

In addition to writing code, compute the expected result manually. Use a spreadsheet or pen and paper to compute Maartje's earnings and check it against the result from your code.

## Step 6: **More basic freeCodeCamp challenges**

_Deadline Saturday_

Go back to _freeCodeCamp_, start where you left off and complete it until the "Shopping List" exercise (there are some topics we did not cover but you can do it).

> A reminder: The freeCodeComp exercises still require you to use the older `var` keyword to declare variables. However, in the homework that you do in the `hyf-javascript` folder you should use `const` and `let` instead.

Please make sure you REALLY understand the exercises below:
- https://www.freecodecamp.com/challenges/multiply-two-decimals-with-javascript
- https://www.freecodecamp.com/challenges/store-multiple-values-in-one-variable-using-javascript-arrays
- https://www.freecodecamp.com/challenges/build-javascript-objects
- https://www.freecodecamp.com/challenges/add-new-properties-to-a-javascript-object
- https://www.freecodecamp.com/challenges/delete-properties-from-a-javascript-object

### Hint

If you solve the FreeCodeCamp challenges and they are new concepts to you and you would like to take a look at them later on in the program, Copy your answers from FCC in a .js file and upload them to Github in a repository for future reference. In this way you build your own little documentation, if you look back at them first try to understand what it does before you run them.

## Step 7: Read before next lecture

_Deadline Sunday morning_

Please go through these chapters of _Eloquent JavaScript_ to prepare for your next class. We don't expect you to understand every detail of it on a first reading.

- [Eloquent JavaScript: Chapter 3 - Functions](http://eloquentjavascript.net/03_functions.html), up until the _Arrow Functions_ section.

- [Eloquent JavaScript: Chapter 4 - Data Structures: Objects & Arrays](http://eloquentjavascript.net/04_data.html). Unless you are really into statistics, you can skip the following sections:

    * _The Lycanthrope's Log_
    * _Computing Correlation_
    * _The final analysis_

    Skip these additional sections for now, as they will be covered in later HYF modules. (You are of course free to read them, but we will not cover them in class):

    * _Rest parameters_
    * _Destructuring_
    * _Exercises_

## How to hand in your homework

When you have completed the homework, commit your changes and push them to GitHub:

```
git add .
git commit -m "added homework week 2"
git push
```

Finally, add a link to your repo on Trello.