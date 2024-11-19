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
// 
const populatetable = async () => {
    //a promise is made to retrieve data but until it is done function is paused and the data in transferred tabledata
    const tabledata= await getAgentData()
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
populatetable()

