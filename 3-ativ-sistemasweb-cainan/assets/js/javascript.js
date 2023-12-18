document.addEventListener("keyup", upFunction);
document.addEventListener("keydown", downFunction);

function alertSent() {
    if (confirm("Confirme o envio")) {
        var num1 = Math.floor(Math.random() * 10)
        var num2 = Math.floor(Math.random() * 10)
        var fakecapcha = prompt(`Qual o resultado de:\n ${num1} + ${num2} ?`);
        if (fakecapcha == (num1 + num2)) {
            alert(`Capcha correto`)
            return
        }
    } alert("Capcha incorreto sua mensagem não pôde ser enviada")
}

function displayFormMessage(){
    const name = document.getElementById('formname').value
    alert(`Olá ${name} sua mensagem foi enviada`)
    return 
}

function showHotKeys(){
    var txt='<h3>Pressione H->Home C->Contato S->Sobrenós [0-8] para deixar algum produto invisivel enquando botão estiver pressionado<h3>'
    document.getElementById('keymenu').innerHTML=txt
}

function hideHotKeys(){
    var txt=''
    document.getElementById('keymenu').innerHTML=txt
}

function changeBackground(){
    const img = [
        "./assets/img/header_image1.png",
        "./assets/img/header_image2.png",
        "./assets/img/header_image3.png"
    ]
    var i = 0
    setInterval(() => {
        document.getElementById('header-image').children[0].src = img[i++]
        if(i==3) i=0
    }, 2000);
    
}

function pressFunction(tag){
    document.getElementById(tag.id).style.backgroundColor = "gray"
}

function upFunction(evento){
    var letra = evento.key
    switch(letra){
        case "1":
            document.getElementById('teemo').parentElement.style.visibility = "visible"
            break;
        case "2":
            document.getElementById('coding').parentElement.style.visibility = "visible"
            break;
        case "3":
            document.getElementById('food').parentElement.style.visibility = "visible"
            break;
        case "4":
            document.getElementById('sleep').parentElement.style.visibility = "visible"
            break;
        case "5":
            document.getElementById('origami').parentElement.style.visibility = "visible"
            break;
        case "6":
            document.getElementById('late').parentElement.style.visibility = "visible"
            break;
        case "7":
            document.getElementById('eletro').parentElement.style.visibility = "visible"
            break;
        case "8":
            document.getElementById('read').parentElement.style.visibility = "visible"
            break;
    }
}

function downFunction(evento){
    var letra = evento.key
    switch(letra){
        case "1":
            document.getElementById('teemo').parentElement.style.visibility = "hidden"
            break;
        case "2":
            document.getElementById('coding').parentElement.style.visibility = "hidden"
            break;
        case "3":
            document.getElementById('food').parentElement.style.visibility = "hidden"
            break;
        case "4":
            document.getElementById('sleep').parentElement.style.visibility = "hidden"
            break;
        case "5":
            document.getElementById('origami').parentElement.style.visibility = "hidden"
            break;
        case "6":
            document.getElementById('late').parentElement.style.visibility = "hidden"
            break;
        case "7":
            document.getElementById('eletro').parentElement.style.visibility = "hidden"
            break;
        case "8":
            document.getElementById('read').parentElement.style.visibility = "hidden"
            break;
    }
}
