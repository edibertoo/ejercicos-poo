print("Ingresa el radio del circulo: ");
var radio = Number(readline());

print("Ingresa el valor de la coordenada X: ");
var x = Number(readline());

print("Ingresa el valor de la coordenada Y: ");
var y = Number(readline());

radio = radio *2;
print("El diametro es de: " + radio);

var h = ((x*x) + (y*y));
h = Math.sqrt(h);
print("La hipotenusa es de: "+ h);

if(h > radio){
   print("El punto esta fuera del circulo);
 }
 
  else{
     if(h < radio){
     print("El punto esa adentro del circulo");
 } 
}
 if(h === radio){
    print("El punto esta sobre la circunferencia");
   }
