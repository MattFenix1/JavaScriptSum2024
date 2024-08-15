/*--------
    Make the Options Button 
    . on click
    . show or hide the `.sides` div
---------*/
var opt = document.querySelector('.sides')
function showHide()
{
    opt.classList.toggle("hidden")
}
/*---------
    Program the two fill inputs to do the following:
    . Display the correct colors on the inputs and outputs and paddles    
    . using an `input` event
        . Change the player's fill property to the value of the input
        . Change the pad's fill property  to the player's fill property
        . Show the fill's hex code in the output div 

-----------*/
var fill = Array.from(document.querySelectorAll(`input[class="fill"]`))
var stroke = Array.from(document.querySelectorAll(`input[class="stroke"]`))
fill.forEach((i,num)=>{
    i.value =pad[num].fill
    i.nextElementSibling.innerHTML = i.value
    i.addEventListener(`input`, (e)=>{
        e.target.style.color = i.value;
        o[num].fill = i.value;
        i.nextElementSibling.innerHTML = i.value
    })
})
stroke.forEach((i,num)=>{
    i.value =pad[num].stroke
    i.nextElementSibling.innerHTML = i.value
    i.addEventListener(`input`, (e)=>{
        e.target.style.color = i.value;
        o[num].stroke = i.value;
        i.nextElementSibling.innerHTML = i.value
    })
})
/*---------
    Program the six key inputs to do the following:
    . Display the correct key names for each player   
    . using a `keydown` event
        .Display the correct key name in the input
        .Change the player's key to the value of the input
        .Show the player's key in the output div 
-----------*/
var keyu = Array.from(document.querySelectorAll(`input[class="u"]`))
var keyd = Array.from(document.querySelectorAll(`input[class="d"]`))
var keyf = Array.from(document.querySelectorAll(`input[class="s"]`))

keyu.forEach((i,num)=>{
    i.value=player[num].keys[i.classList[0]]
    i.nextElementSibling.innerHTML=i.value
    i.addEventListener('focus', (e)=>{
        currentState = `pause`
    })
    i.addEventListener(`input`, (e)=>{
        player[num].keys[e.target.classList[0]] = i.value
        i.nextElementSibling.innerHTML=i.value
    })
})
keyd.forEach((i,num)=>{
    i.value=player[num].keys[i.classList[0]]
    i.nextElementSibling.innerHTML=i.value
    i.addEventListener('focus', (e)=>{
        currentState = `pause`
    })
    i.addEventListener(`input`, (e)=>{
        player[num].keys[e.target.classList[0]] = i.value
        i.nextElementSibling.innerHTML=i.value
    })
})
keyf.forEach((i,num)=>{
    i.value=player[num].keys[i.classList[0]]
    i.nextElementSibling.innerHTML=i.value
    i.addEventListener('focus', (e)=>{
        currentState = `pause`
    })
    i.addEventListener(`input`, (e)=>{
        player[num].keys[e.target.classList[0]] = i.value
        i.nextElementSibling.innerHTML=i.value
    })
})

var bgchange = Array.from(document.querySelectorAll(`input[class="background"]`))

bgchange.forEach((i,num)=>{
    i.value=c.style.backgroundColor
    i.nextElementSibling.innerHTML=i.value
    i.addEventListener(`input`, (e)=>{
        e.target.style.color=i.value
        c.style.backgroundColor=i.value
        i.nextElementSibling.innerHTML=i.value
    })
})