# JavaScript Calculator

A beginner-friendly calculator built with HTML, CSS, and vanilla JavaScript. It is designed as a collaborative Git and GitHub project for practicing teamwork, version control, and code review.

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript
- Git and GitHub

## Features

- Addition, subtraction, multiplication, and division
- Decimal and negative number support
- Validation for missing and invalid numbers
- Clear error message for division by zero
- Clear button to reset the inputs and result
- Responsive layout with accessible labels and status messages

## Project structure

```text
javascript-calculator/
├── index.html
├── style.css
├── script.js
├── README.md
└── .gitignore
```

## How to run

1. Download or clone this repository.
2. Open `index.html` in a modern web browser.
3. Enter two numbers and select an operation.
4. Select **Clear** to reset the calculator.

No package installation, server, framework, or build step is required.

## How to contribute

1. The repository owner adds a teammate as a collaborator in GitHub's repository settings.
2. Both collaborators clone the repository and create a branch for each change.
3. Make a focused change, test it in a browser, and commit it with a clear message.
4. Push the branch and open a pull request for discussion and review.
5. Merge the pull request after both teammates have reviewed the change.

Pull the latest `main` branch before starting new work to reduce merge conflicts. Do not share passwords or personal access tokens; use GitHub's sign-in flow through VS Code or Git Credential Manager.

## Team contribution division

The functions are separated in `script.js` to make responsibilities clear:

- **Planned friend's contribution:** `addition(a, b)` and `subtraction(a, b)`
- **Project owner's contribution:** `multiplication(a, b)` and `division(a, b)`
- **Shared integration:** `calculate()` connects the UI to all four operation functions and handles input validation.

All four operations are included in the initial project implementation. These labels describe the intended team division; they do not claim that the friend has already authored or committed code. The friend can contribute to the addition and subtraction functions in a reviewed commit after being added to the repository.
