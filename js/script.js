// import {Toastify} from 'toastify-js'

let inputname = document.getElementById("InputName")
let mailinput = document.getElementById("MailInput")
let telinput = document.getElementById("TelInput")
let affairinput = document.getElementById("AffairInput")
let messageinput = document.getElementById("MessageInput")
let inputbutton = document.getElementById("InputButton")

inputbutton.addEventListener('click', () => {
    event.preventDefault()
    let name = inputname.value
    let mail = mailinput.value
    let tel = telinput.value
    let affair = affairinput.value
    let message = messageinput.value
    if(mail != ''){
        if(message == ''){
            message = `Hola!. Me gustaria contactarte. \nNombre: ${name}\nNúmero telefónico: ${tel}`
        }
        if(affair == ''){
            affair = 'Solicitud de contacto'
        }      
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "lukitasm_03_@hotmail.com",
            Password : "58C3E9B3016A3931FBA891CB4DCAB1286C7A",
            To : 'gonzafrade10@gmail.com',
            From : `lukitasm_03_@hotmail.com`,
            Subject : `${affair}`,
            Body : `${message}`
        }).then(
            Toastify({
                text: "Mail enviado correctamente",
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
                }
            }).showToast()
        );
    }
    else{
        alert("Error")
    }
})
let copy = document.querySelector(".logos-Slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);