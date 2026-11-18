"use strict";

const calculatorForm = document.querySelector("#calculator-form");
const firstNumberInput = document.querySelector("#first-number");
const secondNumberInput = document.querySelector("#second-number");
const resultDisplay = document.querySelector("#result");
const messageDisplay = document.querySelector("#message");
const operationButtons = document.querySelectorAll("[data-operation]");

// FRIEND'S CONTRIBUTION: Addition and subtraction.
function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

// MY CONTRIBUTION: Multiplication and division.
function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  if (b === 0) {
    throw new RangeError("You cannot divide by zero.");
  }

  return a / b;
}

function showMessage(text, isError) {
  messageDisplay.textContent = text;
  messageDisplay.classList.toggle("error", isError);
}

function calculate(operation) {
  const firstValue = firstNumberInput.value.trim();
  const secondValue = secondNumberInput.value.trim();

  if (firstValue === "" || secondValue === "") {
    resultDisplay.textContent = "—";
    showMessage("Please enter both numbers.", true);
    return;
  }

  const firstNumber = Number(firstValue);
  const secondNumber = Number(secondValue);

  if (!Number.isFinite(firstNumber) || !Number.isFinite(secondNumber)) {
    resultDisplay.textContent = "—";
    showMessage("Please enter valid, finite numbers.", true);
    return;
  }

  const operations = {
    addition,
    subtraction,
    multiplication,
    division
  };
  const selectedOperation = operations[operation];

  if (!selectedOperation) {
    resultDisplay.textContent = "—";
    showMessage("Please choose a valid operation.", true);
    return;
  }

  try {
    const result = selectedOperation(firstNumber, secondNumber);

    if (!Number.isFinite(result)) {
      resultDisplay.textContent = "—";
      showMessage("The result is too large to display.", true);
      return;
    }

    resultDisplay.textContent = String(result);
    showMessage("Calculation complete.", false);
  } catch (error) {
    if (!(error instanceof RangeError)) {
      throw error;
    }

    resultDisplay.textContent = "—";
    showMessage(error.message, true);
  }
}

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculate(button.dataset.operation);
  });
});

calculatorForm.addEventListener("reset", () => {
  resultDisplay.textContent = "—";
  showMessage("Your answer will appear here.", false);
});
