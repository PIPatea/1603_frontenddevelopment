const firstuparrow=document.getElementById("first-up-arrow")

const firstdownarrow=document.getElementById("first-down-arrow")

const lastuparrow=document.getElementById("last-up-arrow")

const lastdownarrow=document.getElementById("last-down-arrow")

function sortbyfirstname(order){
console.log("sort by first name:",order);
}

function sortbylastname(order){
console.log("sort by last name:",order);
}

firstuparrow.addEventListener("click",() =>{
sortbyfirstname("up")

}

)
lastuparrow.addEventListener("click",() =>{
    sortbylastname("up")
})


