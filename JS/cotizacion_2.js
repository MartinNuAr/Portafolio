let btnSubmit = document.getElementById("btnSubmit");
let numSecciones = document.getElementById("numSecciones")
let tipoWebsite = document.getElementById("tipoWebsite");
let alertTotal = document.getElementById("alertTotal")
let flag1 = false;
let flag2 = false;

tipoWebsite.addEventListener("blur", function (e) {
    if (tipoWebsite.selectedIndex == 0) {
        tipoWebsite.classList.add("is-invalid");
        flag1 = false;
    }
    else{
        tipoWebsite.classList.remove("is-invalid");
        flag1 = true;
    }
})

numSecciones.addEventListener("blur", function (e) {
    valor = parseInt(numSecciones.value);
    console.log(valor);
    if (valor < 1 || valor > 50 || isNaN(valor)) {
        numSecciones.classList.add("is-invalid");
        flag2 = false;
    }
    else{
        numSecciones.classList.remove("is-invalid")
        flag2 = true;
    }
})



btnSubmit.addEventListener("click", function (e) {
    e.preventDefault();
    let total = 0;
    if (flag1 == true && flag2 == true) {
        let checkboxesValues = document.getElementsByName("check");
        checkboxesValues.forEach(element => {
            if (element.checked) {
                total += parseFloat(element.value);
            }
        });
        total += parseFloat(tipoWebsite.value)
        total += (parseInt(numSecciones.value)) * 250;
        console.log(total);
        alertTotal.innerHTML = `<br><div class="alert alert-light" role="alert">
    Total: $${(total).toFixed(2)} MXN
  </div>`;
    }
    else{
        alertTotal.innerHTML = `<br><div class="alert alert-light" role="alert">
    Favor de rellenar todos los campos correctamente.
  </div>`;
    }
})