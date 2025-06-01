function aleatortio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function eleccion(jugada){
    let resultado = ""
    if(jugada == 1){
        resultado = "Piedra"  
    } else if(jugada == 2){
        resultado ="Papel" 
    }else if(jugada == 3){
        resultado = "Tijera" 
    }else {
        resultado = "Opción no Valida" 
    }  
    return resultado
}
// 1 es piedra, 2 es papel y 3 es tigera
let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0

while(perdidas < 3 && triunfos < 3){ 
    pc = aleatortio(1, 3)
    jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera")
    //alert("Elegiste " + jugador) 
    alert("Pc elige: " + eleccion(pc))
    alert("Tu eliges: " + eleccion(jugador))
    // Combate
    if(pc == jugador){
        alert("Empate")
    }else if(jugador == 1 && pc== 3){
        alert("Ganaste")
        triunfos = triunfos + 1
    }else if(jugador == 2 && pc== 1){
        alert("Ganaste")
        triunfos = triunfos + 1
    }else if(jugador == 3 && pc== 2){
        alert("Ganaste")
        triunfos = triunfos + 1
    }else {
        alert("Perdiste")
        perdidas = perdidas + 1
    }
} 
alert("Gantaste "+ triunfos + " veces. Perdistes " + perdidas + " veces.")   
