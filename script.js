const budget = document.getElementById('total-amount');
const setbudget = document.getElementById('total-amount-button')
let showBudget = document.getElementById('amount');
// expenses
const expItem = document.getElementById('product-title');
const expPrice = document.getElementById('user-amount');
const expBtn = document.getElementById('check-amount');

// Show Expenses

let calExp = document.getElementById('expenditure-value')
const balanceAmount = document.getElementById('balance-amount')

// show Saving 

const saving = document.getElementById('savingAmount');


// Reset 

const reset = document.getElementById('resetAll');


function savingChange() {
    if (balanceAmount.innerText >= 0) {
        saving.innerText = balanceAmount.innerText
        saving.style.color = "#000000";
    }
    else {
        saving.innerText = balanceAmount.innerText;
        saving.style.color = "#ff0000";
    }
}














let tempValue = 0;

setbudget.addEventListener('click', () => {
    // console.log(budget.value);
    // showBudget.innerHTML = budget.value;
    // console.log("Work");
    tempValue = budget.value;
    if (budget.value === '') {
        alert("Not Ok")
    }
    else {
        showBudget.innerHTML = tempValue;
        balanceAmount.innerText = tempValue - parseInt(calExp.innerText);
        savingChange();
        //savingLocalStorage();
    }
    budget.value = "";

})



//calculation

function calculation() {

}


// Balance Calculate

function balanceChange() {
    if (balanceAmount.innerHTML >= 0) {
        console.log("Positive");
        balanceAmount.innerText = parseInt(showBudget.innerText) - parseInt(calExp.innerText)
        savingChange()
        if (balanceAmount.innerHTML < 0) {
            console.log("Negative");
            balanceAmount.style.color = "#ff0000";
            console.log(balanceAmount.innerHTML);
            savingChange()
        }
    }
    else if (balanceAmount.innerHTML < 0) {
        console.log("negative");
        balanceAmount.innerText = parseInt(showBudget.innerText) - parseInt(calExp.innerText)
        balanceAmount.style.color = "#ff0000";
        savingChange()
    }


}




// Show Expense List 
const listBox = document.getElementById("listul")
function expensesList() {
    let li = document.createElement("li")
    li.innerHTML = ` ${(expItem.value)}  ===>  ${(expPrice.value)}`
    listBox.appendChild(li)
    console.log(expItem.value);
    console.log(li);
    let span = document.createElement("span")
    span.innerHTML = '\u00d7'//'<i class="fa-solid fa-trash"></i>' // edit and delete 
    li.appendChild(span)
    //savingLocalStorage()
}


/// Delete list

listBox.addEventListener('click', function (e) {
    console.log("pk");
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("check")
        //savingLocalStorage()

    }
    else if (e.target.tagName === "SPAN") {
        console.log("Nooo");
        e.target.parentElement.remove();
        //savingLocalStorage()

    }

}, false)


// Show Exp
let tempExValue = 0;
expBtn.addEventListener('click', () => {
    tempExValue = parseInt(expPrice.value)
    console.log(tempExValue);
    // let total = tempExValue - expPrice.innerHTML;
    // console.log(total);
    if (expItem.value === '') {

        alert("Enter the Product Name ")

    }

    else if (expPrice.value === '') {
        alert("Enter the Product cost ")
    }

    else {
        calExp.innerText = tempExValue + parseInt(calExp.innerText);
        console.log(tempExValue);
        console.log(calExp);

        balanceChange();
        expensesList();
        expItem.value = "";
        expPrice.value = "";
    }

})



//Total expense (existing + new)




// Saving Item 

function savingLocalStorage(){
    localStorage.setItem("data", listBox.innerHTML)
    //localStorage.setItem("tBudget",showBudget.innerHTML)
}

function showLocalStorage(){
    listBox.innerHTML = localStorage.getItem("data")
    //showBudget.innerHTML = localStorage.getItem("tBudget")
}

showLocalStorage()


reset.addEventListener('click',() => {
console.log("click");
location.reload()

})