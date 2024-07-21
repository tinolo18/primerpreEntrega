//variables

let bandera = true
let productos = [" Mate Imperial", " Mate Camionero", "Mate Torpedo" ,"Bombilla de Acero","Bombilla de Rey", "Bombilla Pico de Loro"]
let metodospago = ["Mercado Pago", "Debito", "Efectivo"]
let carrito1 = []
let total = 0

//logica(funciones,ciclos,etc)

function sumarTotal (precio, nombre, cantidad = 1){
    total += precio * cantidad
    const palabraunica = nombre[0].toUpperCase() + nombre.slice(1)
    carrito1.push(palabraunica + "--->" + cantidad)
}

function compra(producto){
    let cantidad = 1
    switch (producto) {
        case "mate imperial":
            cantidad = prompt("¿Cuantos " + producto + " queres?")
            sumarTotal(30000, producto, cantidad)
            break;
        case "mate camionero":
            cantidad = prompt("¿Cuantos " + producto + " queres?")
            sumarTotal(28000, producto, cantidad)
            break
         case "mate torpedo":
            cantidad = prompt("¿Cuantos " + producto + " queres?")
            sumarTotal(25000, producto, cantidad)   
            break
        case "bombilla pico de loro":
            cantidad = prompt("¿Cuantos " + producto + " queres?")
            sumarTotal(20000, producto, cantidad)
            break            
        case "bombilla de rey":
            cantidad = prompt("¿Cuantos " + producto + " queres?")
            sumarTotal(20000, producto, cantidad)
            break        
        case "bombilla de acero":
            cantidad = prompt("¿Cuantos " + producto + " queres?")
            sumarTotal(10000, producto, cantidad)
            break    
        default:
            alert("No tenemos ese producto disponible por el momento")
            break;
    }
}

function pagoenpesos(metodo){
    if(metodo === "efectivo"){
        total = total / 1.10
    }
    alert("El Total a pagar seria " + total)
    bandera != confirm("¿Confirma su compra?")
}


function pagomp(metodo){
    if(metodo === "mercado pago"){
        total *= 1.10
    }
    alert("El Total a pagar seria " + total)
    bandera != confirm("¿Confirma su compra?")  
}

function elecpago(metodo){
    switch (metodo) {
        case "efectivo":
            pagoenpesos(metodo)
            break
        case "mercado pago":
            pagomp(metodo)
            break
        case "debito":
            pagoenpesos(metodo)
            break

        default:
            alert("El metodo de pago que elegiste no esta habilitado.")
            break;
    }
}

while(bandera){
    const valor = prompt("¿Que esta buscando? \n- " + productos.join("\n-")).toLowerCase()
    compra(valor)
    bandera = confirm("¿Desea seguir comprando?")

}
alert("El estimado de su compra es de ---> " + total)
alert("Los productos produtos que eligio/compro son \n\n-" + carrito1.join("\n"))
bandera = true


while(bandera){
    const metodopago = prompt("¿Como desea pagar?\n\n-" + metodospago.join("\n-")).toLowerCase()
    elecpago(metodopago)
    if(bandera){
        bandera != confirm("¿Quiere cancelar su compra?")

    }
}