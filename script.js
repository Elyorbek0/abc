let inp = document.querySelector(".inp")
let btnOne = document.querySelector(".btnOne")
let btnTwo = document.querySelector(".tnTwo")
let btnThree = document.querySelector(".btnThree")
let btnFour = document.querySelector(".btnFour")
let btnFive = document.querySelector(".btnFive")
let btnSix = document.querySelector(".btnSix")
let textInfo = document.querySelector(".text_info")


btnOne.onclick = () => {
    let inpvalue = inp.value
    textInfo.innerHTML = inpvalue.toUpperCase()
}

btnTwo.onclick = () => {
    let inpvalue = inp.value
    textInfo.innerHTML = inpvalue.toLowerCase()
}

btnThree.onclick = () => {
    let inpvalue = inp.value
    textInfo.innerHTML = `${inpvalue.charAt(0).toUpperCase()}${inpvalue.slice(1)}`
}
btnFour.onclick = () => {
    let inpvalue = inp.value
    textInfo.innerHTML = inpvalue.italics()

}
btnFive.onclick = () => {
    let inpvalue = inp.value
    textInfo.innerHTML = inpvalue.bold()
}
btnSix.onclick = () => {
    let inpvalue = inp.value
    textInfo.style.textDecoration = "underline";
    textInfo.innerHTML = inpvalue.toUpperCase()
}