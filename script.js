document.getElementById("formulario").addEventListener("submit",function(e){

e.preventDefault();

emailjs.sendForm(
    "TU_SERVICE_ID",
    "TU_TEMPLATE_ID",
    this
)
.then(()=>{
    alert("Formulario enviado correctamente.");
    this.reset();
})
.catch((error)=>{
    console.log(error);
    alert("Ocurrió un error.");
});

});
