var avatar = document.getElementById("avatar")
var main_text_div = document.getElementById("main_text_div")
var startButton = document.getElementById("startButton")
var menu_num_players = document.getElementById("choseNumPlayers")

var popUp_div = document.getElementById("popUp_div")
var fadeOut = document.getElementById("fadeOut")
var startingUp = document.getElementById("startingUp")
var avatar1 = document.getElementById("avatar1")
var avatar2 = document.getElementById("avatar2")
var avatar3 = document.getElementById("avatar3")
var avatar4 = document.getElementById("avatar4")

function startLogin() {
    var inputSecCode = document.getElementById("inputSecCode").value
    
    if (inputSecCode == 3421) {
        avatar.style.display = "block"
        main_text_div.style.display = "block"
        menu_num_players.style.display = "block"
        startButton.style.display = "none"
        startingUp.style.display = "none"
    } else {
        startButton.style.animation = "none 0.1s"
        setTimeout(function(){
            startButton.style.animation = "wrongCode 0.5s"
        }, 10)
        
       
    }
    
}

function choseCharRedirect(NumPlayers){
    sessionStorage.setItem("Players", NumPlayers)
    location.replace("choseChar.html")
    
}

function chosenChar(id) {
    console.log(id)
    sessionStorage.setItem("avatar", id)
    location.replace("firstPage.html")
}

function popUp(){
    var anzahlSpieler = sessionStorage.getItem("Players")
    if (anzahlSpieler == "2") {
        avatar1.style.display = "block"
    }
    popUp_div.style.display = "none"
    fadeOut.style.display = "none"
}

