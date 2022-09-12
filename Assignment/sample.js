function DisplayMenu() {
    var n = 1
    document.write("MENU<br>");
    products = ["Espresso", "Cappucino", "Latte"];
    Addons = ["Milk", "Cream", "Latte"];
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            document.write("<br>");
            document.write(n, ") ", products[i], " with ", Addons[j]);
            n++;

        }
    }
}
DisplayMenu();

var cafe = [];
var items = [];
var Add = [];
var n = 0;
var total_cost = [];
var Bill_amount = 0;

function getInputCoffee() {
    var coffee = document.getElementsByName("Coffee")[0].value;
    cafe.push(coffee);
    console.log(cafe);
    getInputAddOn();
}


function getInputAddOn() {
    var Addon = prompt("Enter your preferred Add-On\n('Milk' or 'Cream' or 'Latte')");
    Add.push(Addon);
    next();
    console.log(Add);
}


function next() {
    var item = cafe[n] + " with " + Add[n];
    items.push(item);
    var choice = prompt("You ordered " + items + "\n You want another Coffee? \n (Yes/No)");
    if (choice === "Yes") {
        alert("Use the same input box");
    }
    else if (choice === "No") {
        confirm();
    }
    n++;
}
Menu = {
    "Espresso with Milk": 60,
    "Espresso with Cream": 75,
    "Espresso with Latte": 100,
    "Cappucino with Milk": 80,
    "Cappucino with Cream": 90,
    "Cappucino with Latte": 125,
    "Latte with Milk": 100,
    "Latte with Cream": 125,
    "Latte with Latte": 150,
}
function createBill() {

    for (var i = 0; i < items.length; i++) {
        var cost = Menu[items[i]];
        total_cost.push(cost);
        Bill_amount += cost;
    }
}

function ShowBill() {
    for (var i = 0; i < items.length; i++) {
        alert(items[i], "   ", total_cost[i]);
    }
    alert("Total amount : ", Bill_amount);

}


function confirm() {
    var choice = prompt("Are you sure to buy these?\n" + items + "(Yes/No)");
    if (choice === "Yes") {
        createBill();
        alert("Order Confirmed! Thank you");
    }
    else {
        document.write("Refresh the page to order again");
    }
}

