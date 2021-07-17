const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    console.log(name,email);
    let data = {
        name,
        email, 
    }

    let convertData = JSON.stringify(data);

    localStorage.setItem("lead", convertData);

    let agradecimento = "Obrigado! Você receberá as novidadesda da Vitrine do Mar por e-mail.";
    alert(agradecimento);      
})