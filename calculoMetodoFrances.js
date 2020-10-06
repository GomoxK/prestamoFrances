// Calcula las cuotas basadas en el método francés
// couta = (capital * i) / (1 - (i + 1) ^ -n)
// i = interés
// n = períodos (en meses)

// Kevin Zamora

exports.calcularMetodoFrances = (capital, tasaInteres, plazo) => {
  let cuota = 0;
  let mes = 0;
  let interes = 0;
  let capitalDeudaPendiente;
  let tasaInteresDecimal = tasaInteres / 100;
  const cuotas = [];

  // Transformar los años en meses
  plazo = Math.round(plazo * 12);

  // Calcular la cuota
  cuota =
    (capital * tasaInteresDecimal) / (1 - (1 + tasaInteresDecimal) ** -plazo);

    cuota = cuota.toFixed(2);
    console.log(cuota);	



    while (mes != plazo) {
      // Obtener el interés por período
      interes = capital * tasaInteresDecimal;
      interes = interes.toFixed(2);
  
      // El capital que se amortiza en la cuota
      capitalAmortizar = cuota - interes;
      capitalAmortizar = capitalAmortizar.toFixed(2);
  
      // Actualizar el mes (período)
      mes++;
  
      // Actualizar la deuda
      capital -= capitalAmortizar;
      capital = capital.toFixed(2);
  
      // TODO: Verificar los cálculos con valores decimales
  
      // Almacenar los valores en el arreglo
      cuotas.push({
        mes,
        capitalAmortizar,
        interes,
        cuota,
        capital,
      });
    }
  
    return cuotas;
  };







/*
	console.log("**********************************");	
console.log(`Monto: ${capital}`);
console.log(`Tasa de interes: ${tasaInteres}%`);	

  cuota = cuota.toFixed(2);
  console.log(`Mensualidad: ${cuota}`);	
  
  console.log("**********************************");	

  function tablaMetodoFrances(){


	cuotas.length = 0;

	for (var count = 0; count < plazo; ++count)
	{ 
	var intereses = 0;
	var mensualCapital = 0;
	

		console.log(" Mes:"  + (count + 1));
		
		intereses = capital * tasaInteresDecimal;

		
		mensualCapital = cuota - intereses ;
		
		
capital = capital - mensualCapital
capital = capital.toFixed(2);
console.log(`Abono al Capital: ${cuotas[mensualCapital]= mensualCapital.toFixed(2)} `);

console.log(`Interes: ${cuotas[intereses] = intereses.toFixed(2)}`);


console.log(` Cuota: ${cuotas[cuota] = cuota}`);




console.log(`Deuda Pendiente: ${cuotas[capital] = capital}`);









console.log("--------------------------------");
	}
	
	
return cuotas;

  }

  tablaMetodoFrances();
  
*/






