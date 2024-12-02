const fetchUrl = "http://99.79.77.144:3000/api/agents"

//async stands for asynchronous meaning the 
//function performs tasks out of order and can wait for 
//one task to be complete before moving onto the next task

//ASYNC and AWAIT work together to make a fetch request work
//You declare functions as async
//That allows you to use await in the function when sending a fetch request

//FETCH REQUEST TO GET AGENT DATA
const getAgentData = async () => {
    
    //Sending the fetch request
    const dataFromServer = await fetch(fetchUrl)

    //converting the data from the fetch to JSON
    const agentData = await dataFromServer.json()

    //Console logging to confirm the data was recieved
    console.log("AGENT DATA FROM FETCH", agentData)

    //returning the necessary data to be used in other parts of our javascript code
    return agentData
}



// A refrence to html 
const tablebody=document.getElementById("table-body")


const populatetable = async (tabledata) => {
    // A container for html data
    let tableContent = '';
    //the data is being executed each time while agent gives "for each" some thing to look out for
    tabledata.forEach(agent => {
    //same container but now can be added to more 
    tableContent += `
    <tr>
            <td>${agent. first_name}</td>
            <td>${agent.last_name}</td>
            <td>${agent.rating}</td> <!-- Add more properties as needed -->
            <td>${agent.fee}</td>
            <td>${agent.region} </td>
        </tr>

    `;
    });

    // Set the table body innerHTML to the generated content
    tablebody.innerHTML = tableContent;


} 







//===========================FIRST AND LAST NAME SORTING FUNCTIONS===========================//
const firstuparrow=document.getElementById("first-up-arrow")
const firstdownarrow=document.getElementById("first-down-arrow")
const lastuparrow=document.getElementById("last-up-arrow")
const lastdownarrow=document.getElementById("last-down-arrow")
const regionbutton=document.getElementById("region-button")
//----------------sort by first name function----------------//
async function sortbyfirstname(order){
    const allAgents = await getAgentData()

    if(order === "up"){
        //sorting all agents by the first_name
        allAgents.sort((a, b) => {
            if (a.first_name < b.first_name) return -1; // a comes before b
            if (a.first_name > b.first_name) return 1;  // b comes before a
            return 0; // a and b are equal
        })
        
    }else if (order === "down"){
        //sorting all agents by the first_name
        allAgents.sort((a, b) => {
            if (a.first_name > b.first_name) return -1; // a comes before b
            if (a.first_name < b.first_name) return 1;  // b comes before a
            return 0; // a and b are equal
        })
    }

    populatetable(allAgents)
}

//----------------sort by last name function----------------//
async function sortbylastname(order){
console.log("sort by last name:",order);
const allAgents = await getAgentData();

    if(order === "up"){
        //sorting all agents by the last_name
        allAgents.sort((a, b) => {
            if (a.last_name < b.last_name) return -1; // a comes before b
            if (a.last_name > b.last_name) return 1;  // b comes before a
            return 0; // a and b are equal
        })
        
    }else if (order === "down"){
        //sorting all agents by the last_name
        allAgents.sort((a, b) => {
            if (a.last_name > b.last_name) return -1; // a comes before b
            if (a.last_name < b.last_name) return 1;  // b comes before a
            return 0; // a and b are equal
        })
    }

    populatetable(allAgents)
}








firstuparrow.addEventListener("click",() =>{
sortbyfirstname("up")

})
firstdownarrow.addEventListener("click",() =>{
    sortbyfirstname("down")
})

lastuparrow.addEventListener("click",() =>{
    sortbylastname("up")
})

lastdownarrow.addEventListener("click",() =>{
    sortbylastname("down")
})


// listens for change to the button if so change happens 
regionbutton.addEventListener  ("change",async ()=>{
//checks what subject in button is being interacted with
console.log (regionbutton.value)
//information be is being got then given to allagents
const allAgents = await getAgentData();
//the filteredAgents is be given thr end result of the filter array 
const filteredAgents = allAgents.filter(agent => agent.region === regionbutton.value);
populatetable(filteredAgents)
})
