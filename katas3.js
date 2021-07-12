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

function kata2() {
    let output = []
    for(let i = 25; i >= 1; i--){
        output.push(i)
    }
    showResults(output)
}

function kata3() {
    let output = []
    for(let i = -1; i >= -25; i--){
        output.push(i)
    }
    showResults(output)
}

function kata4() {
    let output = []
    for(let i = -25; i <= -1; i++){
        output.push(i)
    }
    showResults(output)
}

function kata5() {
    let output = []
    for(let i = -25; i <= 25; i = i+2){
        output.push(i)
    }
    showResults(output)
}

function kata6() {
    let output = []
    for(let i= 3; i<=100; i = i+3 ){
        output.push(i)
    }
    showResults(output)
}

function kata7() {
    let output = []
    for(let i= 7; i<=100; i = i+7 ){
        output.push(i)
    }
    showResults(output)
}

function kata8() {
    let output = []
    for(let i=100; i >= 1; i--) {
        if( i % 3 === 0 || i % 7 === 0){
            output.push(i)
        }
    }
    showResults(output)
}

function kata9() {
    let output = [];
    for(let i = 0; i <= 100; i = i+5){
        if (i % 2 !== 0){
            output.push(i)
        }
    }
    showResults(output)
}

function kata10() {
    let output = []
    for(let i = 0; i <sampleAr99999999ray.length; i++){
        output.push(sampleArray[i])
    }
    showResults(output)
}

function kata11() {
    let output = []
    for(let i = 0; i <sampleArray.length; i++){
        if(sampleArray[i] % 2 === 0){
            output.push(sampleArray[i])
        }
    }
    showResults(output)
}

function kata12() {
    let output = []
    for(let i = 0; i <sampleArray.length; i++){
        if(sampleArray[i] % 2 !== 0){
            output.push(sampleArray[i])
        }
    }
    showResults(output)
}

function kata13() {
    let output = []
    for(let i = 0; i <sampleArray.length; i++){
        if(sampleArray[i] % 8 === 0){
            output.push(sampleArray[i])
        }
    }
    showResults(output)
}

function kata14() {
    let output = []
    for(let i = 0; i <sampleArray.length; i++){
        output.push(sampleArray[i]**2)
    }
    showResults(output)
}

function kata15() {
    let output = 0
    for(let i = 0; i <= 20; i++) {
        output += i
    }
    showResults(output)
}

function kata16() {
    let output = 0
    for(let i = 0; i <sampleArray.length; i++) {
        output += sampleArray[i]
    }
    showResults(output)
}

function kata17() {
    let output = 99999999
    for(let i = 0; i <sampleArray.length; i++) {
            if (sampleArray[i] < output){
                output = sampleArray[i]
            }
    }
    showResults(output)
}

function kata18() {
    let output = 0
    for(let i = 0; i <sampleArray.length; i++) {
            if (sampleArray[i] > output){
                output = sampleArray[i]
            }
    }
    showResults(output)
}
/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
