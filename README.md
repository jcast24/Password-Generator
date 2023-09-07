# Basic JavaScript Password Generator

## Variables

Created 4 variables named `result_one`, `result_two`, `result_three`, and `result_four` and set each to get the `elementById` from the `index.html`.

Also did the same thing for the button that the user clicks to generate the password. 


## Function setup:


Generate random characters: 

This function will generate random characters by using `Math.floor`, `Math.random`, and using the length of the characters to return a random character. 


Get the input length:

Return the value from the input that the user enters. If the value is empty, return a default number of 12.

Generate password: 

Initialize an empty string called `password`. Use a `for` loop based on the length that is passed in to generate the amount of random characters using `generateRandomCharacters()`. Return the newly generated character string. 

Render the password:
Create a `length` variable and set it to the function `setInputLenght()`.


## Future additions:

Add checkboxes for uppercase, lowercase, and symbols. 
