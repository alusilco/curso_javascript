//JASON placeholder
const section = document.querySelector("section")
fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => renderUsers(data)) 
    .catch(err => console.log(err))

    function renderUsers(users) {
        users.forEach(user => {
            const card = document.createElement("div")
            card.innerHTML = `
            <p>Name: ${user.name} </p>
            <p>Username: ${user.username}</p>
            <p>Email: ${user.email}</p>`

            section.appendChild(card)

        });
    }