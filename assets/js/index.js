/* ------------- CLASES -------------  */
class ProductoCredito {
	constructor(id, nombre, tipo, moneda, montoMaximo, montoMinimo, plazoMaximo, plazoMinimo, interes){
		this.id = id;
		this.nombre = nombre;
		this.tipo = tipo;
		this.moneda = moneda;
		this.montoMin = montoMinimo;
		this.montoMax = montoMaximo;
		this.plazoMin = plazoMinimo;
		this.plazoMax = plazoMaximo;
		this.interes = interes;
	}
}

class Credito {
	constructor(id, monto, plazo, nombre, tipo, moneda, interes){
		this.id = id;
		this.monto = monto;
		this.plazo = plazo;
		this.nombre = nombre;
		this.tipo = tipo;
		this.moneda = moneda;
        this.interes = interes;
	}
}
/* ------------------------------------  */

//CREAMOS LOS TRES TIPOS DE PROUCTO DE CREDITO
const CreditoHipotecario = new ProductoCredito(1,"CREDITO HIPOTECARIO", "CHI","SOLES", 1000000, 20000, 120, 12,0.17);
const CreditoAgropecuario = new ProductoCredito(2,"CREDITO AGROPECUARIO", "CAG", "SOLES", 200000, 10000, 60, 6,0.15);
const CreditoPersonal = new ProductoCredito(3,"CREDITO PERSONAL", "CPE", "SOLES", 50000, 1000, 60, 6,0.20);
//ASIGNAMOS A UN ARRAY 
let productos = [CreditoHipotecario, CreditoAgropecuario, CreditoPersonal];

//CREAMOS ALGUNOS CREDITOS PARA CADA TIPO DE PRODUCTO
const creditoH1 = new Credito("12345678",54321,24,"CREDITO HIPOTECARIO","CHI","SOLES",0.17);
const creditoH2 = new Credito("54659875",250000,120,"CREDITO HIPOTECARIO","CHI","SOLES",0.17);
const creditoH3 = new Credito("78895412",100000,36,"CREDITO HIPOTECARIO","CHI","SOLES",0.17);
const creditoH4 = new Credito("12345678",750000,30,"CREDITO HIPOTECARIO","CHI","SOLES",0.17);
const creditoA1 = new Credito("12345678",150000,40,"CREDITO AGROPECUARIO","CAG","SOLES",0.15);
const creditoA2 = new Credito("78895412",75000,20,"CREDITO AGROPECUARIO","CAG","SOLES",0.15);
const creditoA3 = new Credito("36963548",30000,10,"CREDITO AGROPECUARIO","CAG","SOLES",0.15);
const creditoP1 = new Credito("12345678",50000,36,"CREDITO PERSONAL","CPE","SOLES",0.20);
const creditoP2 = new Credito("12345678",5000,12,"CREDITO PERSONAL","CPE","SOLES",0.20);
//ASIGNAMOS A UN ARRAY CREDITOS
let creditos = [creditoH1, creditoH2, creditoH3, creditoH4, creditoA1, creditoA2, creditoA3, creditoP1, creditoP2];

/*---------------FUNCIONES----------------*/
//FUNCION MOSTRAR MENU
function mostrarmenu()
{
    console.log("************************************************");
    console.log("------------ OPCIONES PARA CREDITOS ------------");
    console.log("****** Seleccione un n??mero seg??n opci??n *******");
    console.log("*| 1 - Solicitar cr??dito					   |*");
    console.log("*| 2 - Mostrar todos los cr??ditos solicitados |*");
    console.log("*| 3 - Mostrar cr??ditos de un cliente		   |*");
    console.log("*| ESC - SALIR								   |*");
    console.log("***********************************************");
}
//FUNCION MOSTRAR TIPOS DE CREDITOS
function mostrarTiposCreditos(){
	console.log("Los tipos de cr??ditos son:");
	productos.forEach(producto =>{
		console.log(producto.id + " " + producto.nombre + " - Moneda: " + producto.moneda + " - Monto m??nimo: " + producto.montoMin + " - Monto m??ximo: " + producto.montoMax+ " con plazo desde " + producto.plazoMin + " hasta "+ producto.plazoMax + " y el inter??s de: " + producto.interes);
	})
}
/*----------------------------------------*/

//MOSTRAMOS MEN?? DE OPCIONES
mostrarmenu();
//SOLICITAMOS 
let opcion = prompt("Ingrese un n??mero seg??n men?? de opciones");
let segurodesgravamen;
let itf;
while ( opcion != "ESC" && (parseInt(opcion))>0 && parseInt(opcion)<4){
	switch (opcion){
		case "1":{
            console.clear();
            let opcioncredito;
            do {
                //MOSTRAMOS CREDITOS DISPONIBLES
                console.log("OPCIONES DE CREDITOS");
			    mostrarTiposCreditos();
			    //SOLICITAMOS QUE SELECCIONE EL PRODUCTO QUE DESEE
			    opcioncredito = parseInt(prompt("seleccione un credito seg??n opciones del 1 al 3"));
            } while (opcioncredito < 1 || opcioncredito > 3);
			opcioncredito = opcioncredito - 1
            //SOLICITAMOS EL MONTO Y EL PLAZO RESPECTIVO
			let montocredito = parseFloat(prompt("Ingrese monto seg??n el rango de montos del cr??dito " + (opcioncredito + 1) ));
			let nrocuotascredito = parseInt(prompt("Ingrese n??mero de n??mero de coutas seg??n el rango de plazos del cr??dito " + (opcioncredito + 1) ));
			//RECUPERAMOS DATOS DEL PRODUCTO SELECCIONADO
			let nombrepro = productos[opcioncredito].nombre;
			let tipopro = productos[opcioncredito].tipo;
			let monedapro = productos[opcioncredito].moneda
			let montoMinpro = parseFloat(productos[opcioncredito].montoMin);
			let montoMaxpro = parseFloat(productos[opcioncredito].montoMax);
			let plazoMinpro = parseFloat(productos[opcioncredito].plazoMin);
			let plazoMaxpro = parseFloat(productos[opcioncredito].plazoMax);
			let interespro = parseFloat(productos[opcioncredito].interes);
			//INDICAMOS EL PRODUCTO SELECCIONADO
			console.log("Ud. ha seleccionado el credito " + nombrepro + " con el monto " + montocredito + " y el plazo de " + nrocuotascredito);
			//VALIDAMOS SI EL MONTO Y LOS PLAZOS SOLICITADOS EST??N EN EL RANGO DEL PRODUCTO
			if ((montocredito <= montoMaxpro && montocredito >= montoMinpro)&&(nrocuotascredito<=plazoMaxpro&&nrocuotascredito>=plazoMinpro)) {
                //SOLICITADOS DNI
				let dni = prompt("Ingrese n??mero de DNI: ");
				//REGISTRAMOS LA SOLICITUD EN NUESTRO ARRAY DE CREDITOS
				creditos.push(new Credito(dni,montocredito,nrocuotascredito,nombrepro,tipopro,monedapro,interespro));
                //CALCULAMOS LAS CUOTAS DE ACUERDO AL N??MERO DE PLAZOS
                let capital =(montocredito + montocredito*interespro)/nrocuotascredito;
                //CALCULAMOS SEGURO DESGRAVAMEN E ITF
                segurodesgravamen = 0.0009*montocredito;
                itf = 0.000005*montocredito;
                let cuotamensual = capital + segurodesgravamen +itf;
				//MOSTRAMOS CALENDARIO
                console.log("| N?? | Capital | Seguro | ITF | Cuota |")
				for (let i = 0; i < nrocuotascredito; i++) {
                    console.log("| " + (i+1) + " | " + capital + " | " + segurodesgravamen + " | " + itf + " | " + cuotamensual + " | ");
                }
                console.log("El monto total de las " + nrocuotascredito + " es: " +(cuotamensual*nrocuotascredito));
            } else {
                console.log("El monto solicitado y/o el plazo est??n fuera del rago del cr??dito solicitado");
                console.log("Ud. ha seleccionado el credito " + nombrepro + " con el monto " + montocredito + " y el plazo de " + nrocuotascredito);
                console.log("El " + nombrepro + " tiene como monto m??nimo " + montoMinpro + " y monto m??ximo " + montoMaxpro + " tiene como plazo m??nimo " + plazoMinpro + " y plazo m??ximo " + plazoMaxpro);
            }
            alert("Se ha culminado, aceptar para continuar");
		}			
		break;
        case "2":{
            console.clear();
            console.log("Todos los cr??ditos activos: ")
            console.log("|       CREDITO      | MONTO | MONEDA | PLAZOS | INTER??S |");
            creditos.forEach(credito => {
                console.log("|" + credito.nombre + " | " + credito.monto + " | " + credito.moneda + " | " + credito.plazo + " | " + credito.interes + " | ");
            });
            alert("Se ha culminado, aceptar para continuar");
        }
		break;
		case "3":{
            console.clear();
            let dni = prompt("Ingrese N??mero de DNI: ");
            console.log("El cliente con DNI N?? " + dni + " tiene los siguientes cr??ditos activos: ")
            console.log("|       CREDITO      | MONTO | MONEDA | PLAZOS | INTER??S |");
            creditos.forEach(credito => {
                if (credito.id == dni) {
                    console.log("|" + credito.nombre + " | " + credito.monto + " | " + credito.moneda + " | " + credito.plazo + " | " + credito.interes + " | ");
                }
            });
            alert("Se ha culminado, aceptar para continuar");
        }
		break;
	}
    console.clear();
    mostrarmenu();
	opcion = prompt("Ingrese un n??mero seg??n men?? de opciones");
}
