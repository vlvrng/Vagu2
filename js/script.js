const form = document.getElementById("form")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let CPF OU EMAIL = document.getElementById("CPF OU EMAIL").value;
    let SENHA = document.getElementById("SENHA").value;
    let CPF OU EMAIL = {
        SENHA,
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem("lead", convertData)
    
    alert("Acesso efetuado com sucesso!");
})