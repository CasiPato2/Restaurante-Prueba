function enviarmensaje(){
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let mensaje = document.getElementById("mensaje").value;
    
    if(!nombre || !correo || !mensaje){
        Swal.fire({
                icon: "error",
                title: "Datos faltantes",
                text: "Faltan algunos datos!"
                });
    }

    else{
        Swal.fire({
            icon: "success",
            title: "Correcto!",
            text: "Datos enviados correctamente!"
            });
    }

}

function ConfirmarReserva(){
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let fecha = document.getElementById("fecha").value;
    let hora = document.getElementById("hora").value;
    
    if(!nombre || !correo || !fecha || !hora){
        Swal.fire({
                icon: "error",
                title: "Datos faltantes",
                text: "Faltan algunos datos!"
                });
    }

    else{
        Swal.fire({
            icon: "success",
            title: "Correcto!",
            text: "Datos enviados correctamente!"
            });
    }

}
