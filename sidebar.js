//Definimos las variables constantes para apuntar a la classe que queremos.

//toggleBtn es la constante que apunta al querrySelector de .sidebar-toggle que es el boton que se usa para abrir y cerrar el menu lateral(sidebar)
const toggleBtn = document.querySelector(".sidebar-toggle")

//closeBtn es la constante que apunta al elemento que contiene la clase .close-btn que es el boton en X rojo para cerrar el sidebar
const closeBtn = document.querySelector(".close-btn")

//sidebar apunta al aside, que tiene la clase llamada .sidebar
const sidebar = document.querySelector(".sidebar")



//Metodos para hacer que al hacer click en los botones de toggleBtn y closeBtn tengan el efecto deseado mediante una funcion
/*
toggleBtn es la variable,addEventListener es el metodo, en este caso es un evento de clic que ejecuta una funcion
*/
toggleBtn.addEventListener('click', function(){
    sidebar.classList.toggle('show-sidebar')//Funcion ejecuta en la constante sidebar, que es el elemento con nombre clase(classList) .sidebar, cambie por show-sidebar
})
//Este metodo quita la clase show-sidebar del elemento con clase .sidebar
closeBtn.addEventListener('click', function(){
    sidebar.classList.remove('show-sidebar')
})



//Version extendida sin usar toggle, usando add y remove class
//toggleBtn.addEventListener('click', function(){
    //console.log(sidebar.classList);   Esta linea de codigo muestra en consola si el codigo funciona
    //if(sidebar.classList.contains('show-sidebar')){
    //    sidebar.classList.remove('show-sidebar');
    //}
    //else{
    //    sidebar.classList.add("show-sidebar");
    //}
//});
//closeBtn.addEventListener('click', function(){
    //sidebar.classList.remove('show-sidebar');
//})


//Nombre de los elementos del metodo en una sola linea
////  var  /       metod    / event /                    function                         /  /cierre del addEventListener
//toggleBtn.addEventListener('click', function(){sidebar.classList.toggle('show-sidebar');} );

//Nombre de los elementos de la funcion
// declaracion    var      class  alternar    clase
//  function()  {sidebar.classList.toggle('show-sidebar');}
