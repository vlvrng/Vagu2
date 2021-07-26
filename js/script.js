const form = document.getElementById("form")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("e-mail").value;
    let data = {
        nome,
        email,
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem("lead", convertData)
    
    alert("Cadastro efetuado com sucesso!");
})