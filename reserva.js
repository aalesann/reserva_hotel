document.getElementById('formHotel').addEventListener('submit', guardarReserva);

function guardarReserva(e){

    let fechaEntrada = document.getElementById('fechaIngreso').value;
    let fechaSalida = document.getElementById('fechaSalida').value;
    let tipoHabitacion = document.getElementById('tipoHabitacion').value;
    let cantAdultos = document.getElementById('cantidadAdultos').value;
    let cantMenores = document.getElementById('cantidadChicos').value;
    let emailCliente = document.getElementById('emailCliente').value;
    let telefonoCliente = document.getElementById('telefono').value;



    const reserva = {
        fechaEntrada,
        fechaSalida,
        tipoHabitacion,
        cantAdultos,
        cantMenores,
        emailCliente,
        telefonoCliente
    };

    if ( localStorage.getItem('reservas') === null) {
        let reservas = [];
        reservas.push(reserva);
        localStorage.setItem('reservas',JSON.stringify(reservas));
    } else {
        let reservas = JSON.parse(localStorage.getItem('reservas'));
        reservas.push(reserva);
        localStorage.setItem('reservas', JSON.stringify(reservas));
    }



    listarReserva();
    document.getElementById('formHotel').reset();
    e.preventDefault();
};


const listarReserva = () => {

    let reservas = JSON.parse(localStorage.getItem('reservas'));
    reservas.forEach(element => { 
        console.log(`Tipo de Habitación: ${element.tipoHabitacion}`);
        console.log(`Fecha Ingreso: ${element.fechaEntrada}`);
        console.log(`Fecha Salida: ${element.fechaSalida}`);
        console.log(`Cantidad Adultos: ${element.cantAdultos}`);
        console.log(`Cantidad Niños: ${element.cantMenores}`);
        console.log('--------------------------------');
    })

}

   
    
    


