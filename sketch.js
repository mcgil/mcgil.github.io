//2016 07 23 
//funciona con p5.js
//lienzo verde con una elipse que sigue al mouse 


//apuntes de color
// por defecto, funciona con RGB y 8 bits
//8bits implica que los valores de colores van entre 0 y 255
// 1 -> grayscale, donde 0 es negro y 255 es blanco 
// 2 -> grauscale + alpha, donde 0 es transparente y 255 es opaco 
// 3 -> RGB, donde r es red, g es green, b es blue
// 4 -> RGB + alpha 

//variable
// las variables son espacios en la memoria del computador
// donde podemos almacenar datos
// primero, tenemos que decirle al computado que la variable exise 
// esto se llama DECLARAR y solo se hace una vez
var diametro;
//luego de declararla, puedo ASIGNAERLE valores
diametro = 200;
//manera corta de hacerlo 
// var diametro = 100

// existen variables globales y variables locales
// las variables globales son aquellas 


//funciones
// las funciones se DECLARAN una vez
function nombreFunctuion() {

  //aqui va el cuerpo 

}

//declarar funcion estilo Victoriano 
function estiloVictoriano() {
  //definir ancho en px del borde de la figura
  //strokeWeight(px);
  strokeWeight(5);

  //definir el color del trazo
  //stroke(color) 
  //noStroke()
  stroke(200, 50, 66, 156)

  //Definir el color del relleno
  //fill(color);
  //noFill();
  fill(100, 2, 1)
}

//declarar funcion estilo Ruso 
function estiloRuso() {
  //definir ancho en px del borde de la figura
  //strokeWeight(px);
  //strokeWeight(5);

  //definir el color del trazo
  //stroke(color) 
  noStroke()
    //stroke(200, 50, 66, 156)

  //Definir el color del relleno
  //fill(color);
  //noFill();
  fill(253, 98, 7, 50)
}

function miElipse() {
  estiloVictoriano();

  //aquí dibujamos una elipse en las coordenadas 250, 340
  //ellipse(posX, posY, width, height);
  ellipse(mouseX, mouseY, diametro, diametro);

  // aumentar el diametro en 1 
  // diametro = diametro + 1;

}

function miTriangulo() {
  estiloRuso();

  //triangle(x1, y1, x2, y2, x3, y3)
  triangle(0, 0, 0, height, mouseX, mouseY);

}


//aqui demostratemos iteracion
function muchasElipses() {

  //iteracion 
  //for(inicio; condicion; refresco) {}
  for (var i = 0; i < 1000; i++) {

    noStroke();

    fill(random(255), random(255), random(255), random(255));

    // ellipse se dibuja en una posicion aleatoria del canvas
    ellipse(random(width), random(height), random(100), random(100));
  }

}



//setup () corre una vez al principio
function setup() {
  //creamos un lienzo 
  //createCanvas(hot, ver);
  createCanvas(windowWidth, windowHeight);

  //pintar el fondo verde 
  //backgrounf(color);
  background(0, 25, 160)

  var x = 10;

//frameRate(1);


}



//draw() corre despues de setup ()
//draw() se ejecuta 60 veces por segundo maximo 
function draw() {

  //console.log(x) imrpime en la consolo el valor de x
  console.log(diametro);

  //pintar el fondo verde 
  //backgrounf(color);
  // background(0, 2, 80)

  miElipse();

  miTriangulo();

  muchasElipses();

}