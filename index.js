// noinspection JSUnresolvedReference

// Length
let LENGTH   = 50;
// Probability of mutation
let MUTATION = 50;
// Maximum deletion
let DELETION = 5;


//----------------------------------------------------------
// Part 1: Setup

let level_three = document.getElementById("level_three");

let level_custom = level_three.cloneNode(false);

level_custom.id = "level_custom";
level_custom.innerHTML = "Custom Level";


level_three.after(level_custom);
level_three.after(" ");

// Part 2: The hack. Getting access to a closure variable


let old_level_change = level_change;

let table;

level_change = function(){
    table = arguments[1];
}

level_three.click();

level_change = old_level_change;

// Part 3: The takeover

level_custom.addEventListener("click", function(){
    level_change($(this), table, LENGTH, MUTATION, DELETION);
})