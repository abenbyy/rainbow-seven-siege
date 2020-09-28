var username
var email
var password
var dropdown
var game
var amount
var agree

window.onload = function(){
    // var btn = document.getElementById("order-button")
    username = document.getElementById("username")
    email = document.getElementById("email")
    password = document.getElementById("password")
    address = document.getElementById("address")
    dropdown = document.getElementById("game-select")
    amount = document.getElementById("amount")
    agree = document.getElementById("terms")
}

function validateInput(){
    game = dropdown.options[dropdown.selectedIndex].text
    
    if(username.value === ""){
        alert("Username cannot be empty!")
        return
    }else if(username.value.length <= 5){
        alert("Username must be more than 5 characthers")
        return
    }else if(!(email.value).includes("@") || username.value === ""){
        alert("Email must be filled!")
        return
    }else if(password.value === ""){
        alert("Password must be filled!")
        return
    }else if(!(address.value).endsWith("street")){
        alert("Address must ends with 'street'")
        return
    }else if(game === "Choose here"){
        alert("Game Type must be selected!")
        return
    }else if(amount.value <= 0){
        alert("Number Of Copy must be more than 0")
        return
    }else if(!agree.checked){
        alert("You must agree to terms and agreement")
        return
    }else{
        alert("PRE ORDER SUCCESS!!")
        return
    }
}