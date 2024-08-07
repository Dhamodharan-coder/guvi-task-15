var top_nav = document.createElement("nav")
top_nav.classList.add("navbar")
top_nav.classList.add("navbar-dark")
top_nav.classList.add("bg-danger")

var title = document.createElement("span")
title.classList.add("navbar-brand")
title.classList.add("m-auto")
title.classList.add("h1")
title.innerText = "Calculator"
top_nav.appendChild(title)

var main_container = document.createElement("div")
main_container.classList.add("container-flex")
main_container.classList.add("mt-5")

var row = document.createElement("div")
row.classList.add("row")
row.style.margin = "0"

var col = document.createElement("div")
col.classList.add("col-lg-6", "col-12")
col.classList.add("offset-lg-4")
row.appendChild(col)
main_container.appendChild(row)

var row_1 = document.createElement("div")
row_1.classList.add("row")

var col_1 = document.createElement("div")
col_1.classList.add("col-12")

var tarea = document.createElement("input")
tarea.setAttribute("type", "text")
tarea.style.width="420px"
tarea.classList.add("text-right")
tarea.classList.add("mb-4")
tarea.setAttribute("id", "type-area")
tarea.setAttribute("readonly", "true")
tarea.setAttribute("placeholder", "0")
tarea.style.fontSize = "25px"
tarea.style.borderRadius = "10px"
tarea.style.padding = "20px 10px"
tarea.style.lineHeight = "28px"
tarea.style.border = "2px solid black"
col_1.append(tarea)


var col_2 = document.createElement("div")
col_2.classList.add("col-12", "mb-4")

function addText(event) {
    var targ = event.target || event.srcElement;
    document.getElementById("type-area").value += targ.textContent || targ.innerText;
}

function numberCreate(value, color, id){
    var number_ = document.createElement("div")
    if(value == "="){
        number_.classList.add("col-6")
    }else{
        number_.classList.add("col-3")
    }
    number_.style.display = "inline"
    var number = document.createElement("input")
    number.setAttribute("type", "button")
    number.setAttribute("value", value)
    number.setAttribute("id", id)
    number.innerHTML = value
    number.onclick = function() {addText(event)}
    number.classList.add("btn")
    number.classList.add(color)
    number.style.height = "80px"
    number.style.width = "80px"
    number.style.fontSize = "3vw"
    number.style.borderRadius = "50%"
    number_.appendChild(number)
    return number_;
}

let n7 = numberCreate("7", "btn-dark", "seven")
let n8 = numberCreate("8", "btn-dark", "eight")
let n9 = numberCreate("9", "btn-dark", "nine")
let n_mod = numberCreate(" % ", "btn-success", "n_mod")

col_2.append(n7, n8, n9, n_mod)

var col_3 = document.createElement("div")
col_3.classList.add("col-12", "mb-4")

let n4 = numberCreate("4", "btn-dark", "four")
let n5 = numberCreate("5", "btn-dark", "five")
let n6 = numberCreate("6", "btn-dark", "six")
let n_div = numberCreate(" / ", "btn-success", "n_div")

col_3.append(n4, n5, n6, n_div)

var col_4 = document.createElement("div")
col_4.classList.add("col-12", "mb-4")

let n1 = numberCreate("1", "btn-dark", "one")
let n2 = numberCreate("2", "btn-dark", "two")
let n3 = numberCreate("3", "btn-dark", "three")
let n_mul = numberCreate(" * ", "btn-success", "n_mul")

col_4.append(n1, n2, n3, n_mul)

var col_5 = document.createElement("div")
col_5.classList.add("col-12", "mb-4")

let n_dot = numberCreate(".", "btn-dark", "n_dot")
let n0 = numberCreate("0", "btn-dark", "zero")
let n_add = numberCreate(" + ", "btn-success", "n_add")
let n_sub = numberCreate(" - ", "btn-success", "n_sub")

col_5.append(n_dot, n0, n_add, n_sub)

var col_6 = document.createElement("div")
col_6.classList.add("col-12", "mb-4")

let n_ce = numberCreate("CE", "btn-danger", "n_ce")
let n_back = numberCreate("\u232b", "btn-warning", "n_back")
let n00 = numberCreate("00", "btn-dark", "d_zero")
let n_eval = numberCreate("=", "btn-info", "n_eval")



col_6.append(n_ce, n_back, n00, n_eval)

window.onload=function(){
    var input = document.getElementById("type-area");
    document.addEventListener("keydown", function(event) {
        if (event.keyCode === 48) {
            event.preventDefault();
            document.getElementById("zero").click();
        }
        if (event.keyCode === 49) {
            event.preventDefault();
            document.getElementById("one").click();
        }
        if (event.keyCode === 50) {
            event.preventDefault();
            document.getElementById("two").click();
        }
        if (event.keyCode === 51) {x
            event.preventDefault();
            document.getElementById("three").click();
        }
        if (event.keyCode === 52) {
            event.preventDefault();
            document.getElementById("four").click();
        }
        if (event.keyCode === 53) {
            event.preventDefault();
            document.getElementById("five").click();
        }
        if (event.keyCode === 54) {
            event.preventDefault();
            document.getElementById("six").click();
        }
        if (event.keyCode === 55) {
            event.preventDefault();
            document.getElementById("seven").click();
        }
        if(event.keyCode === 56) {
            event.preventDefault();
            document.getElementById("eight").click();   
        }
        if(event.keyCode === 57) {
            event.preventDefault();
            document.getElementById("nine").click();   
        }
        if (event.keyCode === 190) {
            event.preventDefault();
            document.getElementById("n_dot").click();
        }
        if (event.keyCode === 191) {
            event.preventDefault();
            document.getElementById("n_div").click();
        }
        if (event.keyCode === 106) {
            event.preventDefault();
            document.getElementById("n_mul").click();
        }
        if (event.keyCode === 187) {
            event.preventDefault();
            document.getElementById("n_add").click();
        }
        if (event.keyCode === 189) {
            event.preventDefault();
            document.getElementById("n_sub").click();
        }
        if (event.keyCode === 8) {
            event.preventDefault();
            document.getElementById("n_back").click();
        }
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("n_eval").click();
        }

    });
    let backspace = document.getElementById("n_back")
    let evaluation = document.getElementById("n_eval")
    let clear = document.getElementById("n_ce")
    let typeArea = document.getElementById("type-area")

    backspace.onclick = function() {
        if (typeArea.value[typeArea.value.length - 1] != " ") {
            typeArea.value = typeArea.value.substring(0, typeArea.value.length - 1);
        }else{
            typeArea.value = typeArea.value.substring(0, typeArea.value.length - 2);
        }
    }
    evaluation.onclick = function() {
        if (typeArea.value){
            typeArea.value = typeArea.value.substring(typeArea.value.lastIndexOf("=") + 1)
            typeArea.value = typeArea.value + " = " + eval(typeArea.value)
        }
    }
    clear.onclick = function() {
        typeArea.value = ""
    }
}

col.append(row_1)
row_1.append(col_1, col_2, col_3, col_4, col_5, col_6)
document.body.append(top_nav, main_container)