const income = document.getElementById("income-input");
const food = document.getElementById("food-input");
const rent = document.getElementById("rent-input");
const clothes = document.getElementById("clothes-input");

let Expense = document.getElementById("total-expense");
let balanceBeforeSaving = document.getElementById("first-balance");

const savingPar = document.getElementById("saving-amount");
const balanceAfterSaving = document.getElementById("second-balance");

// warning msg showing
var alertPlaceholder = document.getElementById("liveAlertPlaceholder");

function alert(message, type) {
  var wrapper = document.createElement("div");
  wrapper.innerHTML =
    '<div class="alert alert-' +
    type +
    ' alert-dismissible" role="alert">' +
    message +
    '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
  alertPlaceholder.append(wrapper);
}

//input field auto clear
function inputAutoClear() {
  income.value = "";
  food.value = "";
  rent.value = "";
  clothes.value = "";
  document.getElementById("savingsParentage").value = "";
  Expense.innerText = "0";
  balanceBeforeSaving.innerText = "0";
  savingPar.innerText = "0";
  balanceAfterSaving.innerText = "0";
}

// string to float conversion
function stringToFloat(number) {
  const result = parseFloat(number);
  if (result < 0) {
    setTimeout(() => {
      alert("Don't input any Negative number", "warning");
    }, 500);
    inputAutoClear();
  } else {
    return result;
  }
}

// calculation income and Expense here
function calculation() {
  const incomeCost = income.value;
  const foodCost = food.value;
  const rentCost = rent.value;
  const clothesCost = clothes.value;

  if (
    incomeCost == null ||
    incomeCost == "" ||
    foodCost == null ||
    foodCost == "" ||
    rentCost == null ||
    rentCost == "" ||
    clothesCost == null ||
    clothesCost == ""
  ) {
    setTimeout(() => {
      alert("Must fill-up Income and Expense field", "danger");
    }, 500);
    inputAutoClear();
  } else {
    let income = stringToFloat(incomeCost);
    let food = stringToFloat(foodCost);
    let rent = stringToFloat(rentCost);
    let clothes = stringToFloat(clothesCost);
    const totalExpense = food + rent + clothes;
    const remainAmount = income - totalExpense;

    if (totalExpense >= remainAmount) {
      setTimeout(() => {
        alert("Your Expense is More then income", "danger");
      }, 500);
      inputAutoClear();
    } else if (income > 0 && food > 0 && rent > 0 && clothes > 0) {
      Expense.innerText = totalExpense;
      balanceBeforeSaving.innerText = remainAmount;
      setTimeout(() => {
        alert("Calculation Done", "success");
      }, 100);
    }
  }
}

//savings calculation
function savingCalc() {
  const saving = document.getElementById("savingsParentage").value;
  const savingText = parseFloat(saving);
  let balance = balanceBeforeSaving.innerText;
  let balanceText = stringToFloat(balance);

  let savingsAmount = (balanceText / 100) * savingText;
  let finalBalance = balanceText - savingsAmount;

  if (savingsAmount <= balanceText) {
    if (savingText < 0) {
      setTimeout(() => {
        alert("Don't input any Negative number", "warning");
      }, 500);
    } else if (saving == null || saving == "") {
      setTimeout(() => {
        alert("Please fill-up Savings field", "danger");
      }, 500);
      inputAutoClear();
    } else {
      savingPar.innerText = savingsAmount;
      balanceAfterSaving.innerText = finalBalance;
    }
  } else {
    setTimeout(() => {
      alert("You don't have to savings more then Balance Amount", "danger");
    }, 500);
    inputAutoClear();
  }
}