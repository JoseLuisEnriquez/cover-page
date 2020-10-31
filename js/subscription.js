// Sólo una prueba.
window.onload = function(){
    var form = document.getElementById("form");
        form.addEventListener("focus", function( event ) {
            event.target.style.background = "pink";
}, true);
        form.addEventListener("blur", function( event ) {
            event.target.style.background = "";
}, true);
};

//Validación en nombre.
