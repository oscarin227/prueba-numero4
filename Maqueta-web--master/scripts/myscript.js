//document.getElementById('name').innerHTML = mydata[0].nombre;;
function load() {
  var mydata = data;
  var referencia1 = document.getElementById('referencia');
  var nombre1 = document.getElementById('nombre');
  var nombre2 = document.getElementById('nombre4');
  var referencia2 = document.getElementById('referencia4');
  // var nombre3 = document.getElementById('nombre11');
  // var referencia3 = document.getElementById('referencia11');
  referencia1.innerHTML = mydata[8].referencia;
  nombre1.innerHTML = mydata[8].nombre;
  referencia2.innerHTML = mydata[4].referencia4;
  nombre2.innerHTML = mydata[4].nombre4;
  // referencia3.innerHTML = mydata[10].referencia11;
  // nombre3.innerHTML = mydata[10].nombre11;
  // for (var x in mydata) {
  //
  // }
}

// data.forEach( function(obj) {
//   var img = new Image();
//   img.src = "img/" + obj.foto;
//   img.setAttribute("class", "banner-img");
//   img.setAttribute("alt", "effy");
//   document.getElementById("img-container").appendChild(img);
//   //console.log(obj.nombre);
//   console.log(obj.foto);
// });

// var para = document.createElement("p");
// var node = document.createTextNode(mydata[0].nombre);
// para.appendChild(node);
//
// var element = document.getElementById("nombre");
// element.appendChild(para);
