const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults(i) {
    newElement = document.createElement("p");
    newElement.style.fontSize = '24px'
    texto = document.createTextNode(i);
    newElement.appendChild(texto);
    container = document.getElementById('body')
    container.appendChild(newElement)
}

function kata1() {
    let output =[]
    for (let i = 1;  i<= 25; i++){
        output.push(i)
    }
    showResults(output)
}
kata1()

function kata2() {
    let output = []
    for(let i = 25; i >= 1; i--){
        output.push(i)
    }
    showResults(output)
}
kata2()

function kata3() {
    let output = []
    for(let i = -1; i >= -25; i--){
        output.push(i)
    }
    showResults(output)
}
kata3()

function kata4() {
    let output = []
    for(let i = -25; i <= -1; i++){
        output.push(i)
    }
    showResults(output)
}
kata4()

function kata5() {
    let output = []
    for(let i = -25; i <= 25; i += 2){
        output.push(i)
    }
    showResults(output)
}
kata5()

function kata6() {
    let output = []
    for(let i= 3; i<=100; i += 3 ){
        output.push(i)
    }
    showResults(output)
}
kata6()

function kata7() {
    let output = []
    for(let i= 7; i<=100; i +=7 ){
        output.push(i)
    }
    showResults(output)
}
kata7()

function kata8() {
    let output = []
    for(let i=100; i >= 1; i--) {
        if( i % 3 === 0 || i % 7 === 0){
            output.push(i)
        }
    }
    showResults(output)
}
kata8()
function kata9() {
    let output = [];
    for(let i = 0; i <= 100; i+=5){
        if (i % 2 !== 0){
            output.push(i)
        }
    }
    showResults(output)
}
kata9()
function kata10() {
    let output = []
    for(let i = 0; i <sampleArray.length; i++){
        output.push(sampleArray[i])
    }
    showResults(output)
}
kata10()

function kata11() {
    let output = []
    for(let i = 0; i <sampleArray.length; i++){
        if(sampleArray[i] % 2 === 0){
            output.push(sampleArray[i])
        }
    }
    showResults(output)
}
kata11()

function kata12() {
    let output = []
    for(let i = 0; i <sampleArray.length; i++){
        if(sampleArray[i] % 2 !== 0){
            output.push(sampleArray[i])
        }
    }
    showResults(output)
}
kata12()

function kata13() {
    let output = []
    for(let i = 0; i <sampleArray.length; i++){
        if(sampleArray[i] % 8 === 0){
            output.push(sampleArray[i])
        }
    }
    showResults(output)
}
kata13()

function kata14() {
    let output = []
    for(let i = 0; i <sampleArray.length; i++){
        output.push(sampleArray[i]**2)
    }
    showResults(output)
}
kata14()

function kata15() {
    let output = 0
    for(let i = 0; i <= 20; i++) {
        output += i
    }
    showResults(output)
}
kata15()

function kata16() {
    let output = 0
    for(let i = 0; i <sampleArray.length; i++) {
        output += sampleArray[i]
    }
    showResults(output)
}
kata16()

function kata17() {
    let output = 99999999
    for(let i = 0; i <sampleArray.length; i++) {
            if (sampleArray[i] < output){
                output = sampleArray[i]
            }
    }
    showResults(output)
}
kata17()

function kata18() {
    let output = 0
    for(let i = 0; i <sampleArray.length; i++) {
            if (sampleArray[i] > output){
                output = sampleArray[i]
            }
    }
    showResults(output)
}
kata18()

/**
 * Daqui em diante s??o os b??nus, por sua conta e risco
 */
 function CreateElement(altura, largura, cor) {
    newElement = document.createElement("div");
    newElement.style.width = largura + 'px'
    newElement.style.height = altura + 'px'
    newElement.style.margin = '5px'
    newElement.style.backgroundColor = cor
    container = document.getElementById('body')
    container.appendChild(newElement)
}
function CreateH3(texto){
    let newElement = document.createElement('h2')
    newElement.innerText = texto
    let body = document.getElementById('body')
    body.appendChild(newElement)
}
CreateH3('Kata Extra 1')
function kataBonus1() {
    for (let i = 0; i <20 ; i++) {
        CreateElement(20, 100, 'grey')
    }
}
kataBonus1()
CreateH3('Kata Extra 2')
function kataBonus2() {
    for (let altura = 105; altura <= 200; altura +=5 ){
        CreateElement(20, altura, 'grey')
    }
}
kataBonus2()
CreateH3('Kata Extra 3')
function kataBonus3() {
    for (let i = 0; i <sampleArray.length; i++){
        CreateElement(20 ,sampleArray[i],'grey')
    }
}
kataBonus3()
CreateH3('Kata Extra 4')
function kataBonus4() {
    for (let i = 0; i <sampleArray.length; i++){
        if ((i+2) % 2===0){
            CreateElement(20 ,sampleArray[i],'red')
            continue
        }
        
        CreateElement(20 ,sampleArray[i],'grey')
    }
}
kataBonus4()
CreateH3('Kata Extra 5')
function kataBonus5() {
    for (let i = 0; i <sampleArray.length; i++){
        if (sampleArray[i] % 2===0){
            CreateElement(20 ,sampleArray[i],'red')
            continue
        }
        CreateElement(20 ,sampleArray[i],'grey')
    }
}
kataBonus5()
