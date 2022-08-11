
function Tienda(){

alert("Bienvenido a 3D Locuras,una gran pagina para buscar un diseno,y que este llegue a tus manos");
const productos=[
    { 
        isbn:"776493",
        articulo:"LLaveros customisables",
        precio:450.00
    },
    {
        isbn:"449583",
        articulo:"Pastilleros",
        precio:500.00
    },
    {
        isbn:"155368",
        articulo:"Lapiceros",
        precio:650.00
    },

];

alert("De momento tenemos los siguientes articulos: ");
productos.forEach(producto=>alert(producto.articulo));
let carrito=prompt("Que articulo queres?");
const encontrado=productos.find(producto=>producto.articulo == carrito);
alert("Genial,nos encargaremos de hacer tu orden de "+(encontrado.articulo)+" de inmediato,el precio sera de "+(encontrado.precio)+"$");

}
Tienda()
