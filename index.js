
function submitData(userName, userEmail) {
    const formData = {
        name: userName, 
        email: userEmail,
    }
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(formData),
    }
    return fetch("http://localhost:3000/users", configurationObject)
        .then(rsp => rsp.json())
        .then(object => renderUser(object))
        .catch(error => {
            alert("Unauthorized Access")
            renderError(error.message)
        })  
}


function renderUser (userObject) {
    let body = document.querySelector('body')
    body.innerHTML = userObject.id
}

function renderError (errorMessage) {
    let body = document.querySelector('body')
    body.innerHTML = errorMessage
}

submitData("Steve", "steve@steve.com") 

submitData("Sam", "sam@sam.com")

submitData("Jim", "jim@jim.com")