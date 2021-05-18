let sysInput = document.body.querySelector("#sys")
let diaInput = document.body.querySelector("#dia")
let pulInput = document.body.querySelector("#pul")
let inputSubmit = document.body.querySelector("#input-submit")
let bpForm = document.body.querySelector("#bp-form")
let sysNotes = document.body.querySelector("#sysNotes")
let diaNotes = document.body.querySelector("#diaNotes")
let pulNotes = document.body.querySelector("#pulNotes")
let dateNotes = document.body.querySelector("#date")
let inputCard = document.body.querySelector("#input-form-card")
let notesCard = document.body.querySelector("#notes-form-card")
let sysSubmit = document.body.querySelector("#sys-submit")
let diaSubmit = document.body.querySelector("#dia-submit")
let pulSubmit = document.body.querySelector("#pul-submit")

bpForm.onsubmit = handleForm
inputSubmit.addEventListener('click', getBP)
inputSubmit.addEventListener('click', slideOut)

function getBP() {
    d = new Date()
    sysNotes.innerText = sysInput.value
    diaNotes.innerText = diaInput.value
    pulNotes.innerText = pulInput.value
    sysSubmit.value = sysInput.value
    diaSubmit.value = diaInput.value
    pulSubmit.value = pulInput.value
    console.log(sysSubmit.value, diaSubmit.value, pulSubmit.value)
    dateNotes.innerText = `${d.getHours() % 12}:${d.getMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})} ${(d.getHours > 12 ? 'AM' : 'PM')} ${d.toLocaleString('default', { month: 'long' })} ${d.getDate()}, ${d.getFullYear()}`
}

function handleForm(e) {
    e.preventDefault()
}

function slideOut(e) {
    let display = getComputedStyle(notesCard).display
    notesCard.style.display = "inline-block"
    inputCard.classList.add('animate')
    notesCard.classList.add('animate')
    // setTimeout(function(){ inputCard.classList.add('finished') }, 500);

}
sysInput.value = 122
diaInput.value = 90
pulInput.value = 76
