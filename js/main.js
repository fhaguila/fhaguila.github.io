let icono = document.getElementById("icono-menu");
let navbar =document.getElementsByClassName("navbar")

icono.addEventListener("click", ()=>{
    navbar[0].classList.toggle("activo") //togle alterna el click   
})

window.onscroll = ()=>{
    navbar[0].classList.remove("activo")
}

 // mostrar y cerrar ventanas emergentes
function MostrarVentanaEmergente() {
    document.getElementById('VentanaEmergente').style.display = 'block';
}

function CerrarVentanaEmergente() {
    document.getElementById('VentanaEmergente').style.display = 'none';
}

function MostrarVentanaEmergenteError() {
    document.getElementById('VentanaEmergenteError').style.display = 'block';
}

function CerrarVentanaEmergenteError() {
    document.getElementById('VentanaEmergenteError').style.display = 'none';
}

// validar el  formulario
document.querySelector('.formulario').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Obtener los valores de los campos
    let nombre = document.getElementById('nombre').value.trim();
    let apellido = document.getElementById('apellido').value.trim();
    let celular = document.getElementById('celular').value.trim();
    let email = document.getElementById('email').value.trim();
    let servicio = document.getElementById('servicio').value;
    let localiza = document.getElementById('localiza').value;   

// si los campos están llenos...
    if (nombre && apellido && celular && email && servicio && localiza) {
        MostrarVentanaEmergente(); 
        formulario.reset();
    } else {
        MostrarVentanaEmergenteError(); 
    }
});

//boton de WhatsApp al hacer scroll
document.addEventListener('DOMContentLoaded', function() {
    let BotonWhatsApp = document.querySelector('.boton_WhatsApp');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 600) { 
            BotonWhatsApp.style.opacity = '1';
            BotonWhatsApp.style.pointerEvents = 'auto';
        } else {
            BotonWhatsApp.style.opacity = '0';
            BotonWhatsApp.style.pointerEvents = 'none';
        }
    });
});

//Contador de visitas
document.addEventListener('DOMContentLoaded', function() {    
    let contadorDeVisitasElement = document.getElementById('contador-de-visitas');
    let contadorDeVisitas = localStorage.getItem('contadorDeVisitas');

    if (!contadorDeVisitas) {
        contadorDeVisitas = 0; 
    }
    contadorDeVisitas++;   //incremento
    localStorage.setItem('contadorDeVisitas', contadorDeVisitas);    
    contadorDeVisitasElement.textContent = contadorDeVisitas;
});