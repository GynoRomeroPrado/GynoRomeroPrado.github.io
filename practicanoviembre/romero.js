let boton1 = document.getElementById("iconbook");
let boton2 = document.getElementById("iconbook1");
let boton3 = document.getElementById("iconbook2");
let boton4 = document.getElementById("iconbook3");

flag1 = 0;
flag = 0;
let fecha = document.getElementById("botoncultura");


let p1 = document.getElementById("lect");
let p2 = document.getElementById("lect2");
let p3 = document.getElementById("lect3");
let p4 = document.getElementById("lect4");

document.getElementById("turismo").addEventListener("click", turismo);

let html = document.getElementById("carouselExampleIndicators").innerHTML;
let img = document.getElementById("img").innerHTML;
document.getElementById("carouselExampleIndicators").style.display = "none";

function turismo() {
    if (flag == 0) {
        document.getElementById("img").style.display = "none";
        document.getElementById("carouselExampleIndicators").style.display = "block";
        flag = 1;
    } else {
        document.getElementById("img").style.display = "block";
        document.getElementById("carouselExampleIndicators").style.display = "none";
        flag = 0;
    }
}



document.getElementById("iconbook").addEventListener('click', function() {
    boton1.onclick = Cambiar(p1);

});

document.getElementById("iconbook1").addEventListener('click', function() {
    boton2.onclick = Cambiar1(p2);
    flag1 = 1;

});

document.getElementById("iconbook2").addEventListener('click', function() {
    boton3.onclick = Cambiar3(p3);

});

document.getElementById("iconbook3").addEventListener('click', function() {
    boton4.onclick = Cambiar4(p4);

});


document.getElementById("botoncultura").addEventListener('click', function() {

    fecha.onclick = Crearfecha()
});

function Cambiar(var1) {
    if (flag == 0) {
        document.getElementById("lect").innerHTML = "Lectura completada";
        flag = 1;
    } else {
        document.getElementById("lect").innerHTML = "Lectura de 3 min";
        flag = 0;
    }
}

function Cambiar1(var2) {
    if (flag == 0) {
        document.getElementById("lect2").innerHTML = "Lectura completada";
        flag = 1;
    } else {
        document.getElementById("lect2").innerHTML = "Lectura de 3 min";
        flag = 0;
    }
}

function Cambiar3(var2) {
    if (flag == 0) {
        document.getElementById("lect3").innerHTML = "Lectura completada";
        flag = 1;
    } else {
        document.getElementById("lect3").innerHTML = "Lectura de 3 min";
        flag = 0;
    }
}

function Cambiar4(var2) {
    if (flag == 0) {
        document.getElementById("lect4").innerHTML = "Lectura completada";
        flag = 1;
    } else {
        document.getElementById("lect4").innerHTML = "Lectura de 3 min";
        flag = 0;
    }
}

function Crearpanel() {
    var capa = document.getElementById("capa");
    var h1 = document.createElement("h1");
    h1.innerHTML = "assd";
    capa.appendChild(h1);
}


flag = 0

function Crearfecha() {
    if (flag1 == 0) {
        if (flag == 0) {
            let fecha = new Date();
            var texto = " Lectura de 2 mins</p></div> <p>" + fecha + "</p>";
            p2.innerHTML = texto;
            flag = 1;
        } else {
            let fecha = new Date();
            var texto = "Lectura de 2 mins</p>";
            p2.innerHTML = texto;
            flag = 0;
        }
    } else {
        if (flag == 0) {
            let fecha = new Date();
            var texto = "Lectura finalizada</p></div> <p>" + fecha + "</p>";
            p2.innerHTML = texto;
            flag = 1;
        } else {
            let fecha = new Date();
            var texto = "Lectura finalizada</p>";
            p2.innerHTML = texto;
            flag = 0;
        }
    }




}