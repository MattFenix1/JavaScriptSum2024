// JavaScript Document
var fname = document.querySelector(`input[id="first-name"]`)
var lname = document.querySelector(`input[id="last-name"]`)
var email = document.querySelector(`input[id="email"]`)
var cEmail = document.querySelector(`input[id="confirmEmail"]`)
var phone = document.querySelector(`input[id="phone"]`)
var submit = document.querySelector(`input[type="button"]`)
var confirmPage = document.querySelector(`p[id="info"]`)

submit.addEventListener(`click`, (e)=>{
    var counter = 0
    var regexName = /[A-Z\-]{1,}/i
    if(regexName.test(fname.value)===true){
        document.querySelector(`label[class="fname"]`).style.fontWeight = `bold`
        counter += 1
    }else{
        document.querySelector(`label[class="fname"]`).style.color = `red`
        fname.nextElementSibling.innerHTML = `Please enter a valid name`
        fname.nextElementSibling.style.color = `red`
    }
    var regexName = /[A-Z\-]{1,}/i
    if(regexName.test(lname.value)===true){
        document.querySelector(`label[class="lname"]`).style.fontWeight = `bold`
        counter += 1
    }else{
        document.querySelector(`label[class="lname"]`).style.color = `red`
        lname.nextElementSibling.innerHTML = `Please enter a valid name`
        lname.nextElementSibling.style.color = `red`
    }
    var regexEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi
    if(regexEmail.test(email.value)===true){
        document.querySelector(`label[class="email"]`).style.fontWeight = `bold`
        counter += 1
    }else{
        document.querySelector(`label[class="email"]`).style.color = `red`
        email.nextElementSibling.innerHTML = `Please enter a valid email`
        email.nextElementSibling.style.color = `red`
    }
    if(cEmail.value === email.value){
        document.querySelector(`label[class="cEmail"]`).style.fontWeight = `bold`
        counter += 1
    }else{
        document.querySelector(`label[class="cEmail"]`).style.color = `red`
        cEmail.nextElementSibling.innerHTML = `Please enter a matching email`
        cEmail.nextElementSibling.style.color = `red`
    }
    var regexPhone = /\d{10}/g
    if(regexPhone.test(phone.value)===true){
        document.querySelector(`label[class="phone"]`).style.fontWeight = `bold`
        counter += 1
    }else{
        document.querySelector(`label[class="phone"]`).style.color = `red`
        phone.nextElementSibling.innerHTML = `Please enter a valid phone number`
        phone.nextElementSibling.style.color = `red`
    }
    
    if(counter === 5){
        var person = {
        fname:fname.value,
        lname:lname.value,
        email:email.value,
        phone:phone.value
    }
        document.querySelector(`div[id="form"]`).style.display = `none`
        document.querySelector(`div[id="confirmation"]`).style.display = `block`
        confirmPage.innerHTML = `Name: ` + person.fname + ` ` + person.lname + `<br>` + `Email: ` + person.email + `<br>` + `\nPhone Number: ` + person.phone.substring(0,3)+`-`+person.phone.substring(3,6)+`-`+person.phone.substring(6,)
    }
});