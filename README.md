# 03 JavaScript: Password Generator

Week 3 homework requirement is to modify starter code to create an application that generates random passwords based on criteria that a user has selected. This app runs in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code. It will have a clean and polished, responsive user interface that adapts to multiple screen sizes.

[GitHub Pages](https://ilavine.github.io/password-generator/)

[GitHub Repo](https://github.com/ilavine/password-generator)

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Mock-Up

The following image shows the web application's appearance and functionality:

![The Password Generator application displays a red button to "Generate Password".](./Assets/password_gen_gif.gif)

## What I have completed to meet the Acceptance Criteria

Instead of using browser prompts, I decided to implement checkboxes and a slider for better user interface. 

So, the following things have changed in the original HTML and CSS files: 

* Created checkbox types in the original HTML document and gave each box a unique ID
* Created a slider box for easier password selection 
* Applied consistent accent color for each input in CSS

The functionality of the web app has the following logic:

* When user loads the web page, the password lenght is default to 8 and all checkboxes are selected
* When user clicks the Generate Password box, a newly generated password is displayed in the text area and includes lowercase and uppercase letters, numbers and special symbols, and the password consists of 8 characters
* User is able to modify a password by unchecking boxes
* When user moves the slider, the number changes from 8 to 128. Upon clicking on the Generate Password button, user is presented with a new lengthy passoword 
* When user unchecks all the boxes, he is alerted that the password requierements need to be specified and the page reloads

