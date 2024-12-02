const fullname = document.getElementById("full-name");

const email = document.getElementById("email");

const phone = document.getElementById("phone");

const companyname = document.getElementById("company-name");

const projectname = document.getElementById("project-name");

const projectdescription = document.getElementById("project-description");

const department = document.getElementById("department");

const message = document.getElementById("message");

const attachment = document.getElementById("attachment");

const submitbutton = document.getElementById("submit-button");
//elements//

const formurl = "http://99.79.77.144:3000/api/contact";
//waiting for the button to be submitted
submitbutton.addEventListener("click", async () => {
  //made into a container
  const form = {
    fullname: fullname.value,
    email: email.value,
    phone: phone.value,
    company_name: companyname.value,
    project_name: projectname.value,
    project_desc: projectdescription.value,
    department: department.value,
    message: message.value,
    file: null,
  };
  //procedure is done 
  try {
    // a fetch request is sent to the url 
    const serverResponse = await fetch(formurl, {
     //method for said request 
      method: "POST",
      //informs the server of the type data being sent
      headers: {
        "content-Type": "application/json",
      },
      //the data it self being sent in json format 
      body: JSON.stringify(form),
    });
//data recieved back from server converting it into  usable JavaScript object or array.
    const result = await serverResponse.json();
//result is put in json string making it readable and making alert box
    alert(JSON.stringify(result));
 // catches errors,type off errors 
  } catch (error) {
   //Displays the error message in a dialog box to the user.
    alert(error);
  }
});
