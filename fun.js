var avatar = document.getElementById("avatar")
var main_div_dialoge = document.getElementById("main-div-dialog")
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

function choseCharRedirect(NumPlayers){
    sessionStorage.setItem("Players", NumPlayers)

    location.replace("choseChar.html")
    
}

function chosenChar(id) {
    setTimeout(function(){
        var chosenAgents = []
        i = 1
        n = 1
        var chosenAgent1 = document.getElementById("avatar1")
        var numPlayers = sessionStorage.getItem("Players")
        var allChecked = true
        while (n <= numPlayers){
            var isCheckedVar = "checkbox" + n
            var currentChecked = document.getElementById(isCheckedVar).checked;
            if (!currentChecked){
                var allChecked = false
            }
            console.log(allChecked)
            n++
        }

        if (allChecked) {
            while (i <= numPlayers){
                var id = "AgentLook" + i
                var chosingDiv = document.getElementById(id);
                var computedStyleOfDiv = window.getComputedStyle(chosingDiv);
                var currentbackgroundImageRaw = computedStyleOfDiv.backgroundImage
                var currentbackgroundImageAlmost = currentbackgroundImageRaw.split("pictures/").pop();
                var currentbackgroundImage = currentbackgroundImageAlmost.slice(0,-2)
                
                chosenAgents.push(currentbackgroundImage)
                i++
            }
            function hasDuplicates(array) {
                return (new Set(array)).size !== array.length;
            }
            
            if (!hasDuplicates(chosenAgents)){
                n = 1
                while (n <= numPlayers) {
                    var AgentName = document.getElementById("agent" + n).value
                    sessionStorage.setItem("agentName" + n, AgentName)
                    
                    sessionStorage.setItem("specialtyAgent" + n, chosenAgents[n-1].slice(0,-4))
                    n++
                }
                location.replace("firstMision.html")
            } else {
                document.getElementById("checkbox1").checked = false;
                document.getElementById("checkbox2").checked = false;
                document.getElementById("checkbox3").checked = false;
                document.getElementById("checkbox4").checked = false;
                alert("Ihr dürft nicht mehr Mals den gleichen Agenten haben!")
                console.log("duplicate not good")
            }
        }
    }, 200)
    
}

function startLogin() {
    var inputSecCode = document.getElementById("inputSecCode").value
    //Falls du echt diesen Code gefunden hast, dann schick mal 
    //eine Email mit dem Betreff GhostKey an verifikation@ict-scouts.ch
    if (inputSecCode == 3421) {
        //main_div_dialoge.style.display = "block"
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

function popUp(){
    var anzahlSpieler = sessionStorage.getItem("Players")
    if(anzahlSpieler == "1") {
        avatar1.style.display = "block"
    } else if (anzahlSpieler == "2") {
        avatar1.style.display = "block"
        avatar2.style.display = "block"
    } else if (anzahlSpieler == "3")  {
        avatar1.style.display = "block"
        avatar2.style.display = "block"
        avatar3.style.display = "block"
    } else {
        avatar1.style.display = "block"
        avatar2.style.display = "block"
        avatar3.style.display = "block"
        avatar4.style.display = "block"
    }
    popUp_div.style.display = "none"
    fadeOut.style.display = "none"
}

const pictures = ["ICT_LOGO_schwarz_transparent.png", "ICT_web20_bg-60.png", "ICT_web20_bg-39-1.png"]

function scrollPictureRight(id){
    const chosingDiv = document.getElementById(id);
    const computedStyleOfDiv = window.getComputedStyle(chosingDiv);
    const currentbackgroundImageRaw = computedStyleOfDiv.backgroundImage
    const currentbackgroundImageAlmost = currentbackgroundImageRaw.split("pictures/").pop();
    const currentbackgroundImage = currentbackgroundImageAlmost.slice(0,-2)

    var indexList = pictures.indexOf(currentbackgroundImage)

    if (indexList == (pictures.length - 1)) {
        var newIndex = 0
    } else {
        var newIndex = indexList + 1
    }
    
    document.getElementById(id).style.backgroundImage = 'url("pictures/' + pictures[newIndex]+ '")'
    
}

function scrollPictureLeft(id){
    var test = "ICT_web20_bg-39-1.png"

    const chosingDiv = document.getElementById(id);
    const computedStyleOfDiv = window.getComputedStyle(chosingDiv);
    const currentbackgroundImageRaw = computedStyleOfDiv.backgroundImage
    const currentbackgroundImageAlmost = currentbackgroundImageRaw.split("pictures/").pop();
    const currentbackgroundImage = currentbackgroundImageAlmost.slice(0,-2)

    var indexList = pictures.indexOf(currentbackgroundImage)

    if (indexList == 0) {
        var newIndex = (pictures.length-1)
    } else {
        var newIndex = indexList - 1
    }
    document.getElementById(id).style.backgroundImage = 'url("pictures/' + pictures[newIndex]+ '")'
}