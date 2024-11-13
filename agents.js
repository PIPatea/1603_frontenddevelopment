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


getAgentData()