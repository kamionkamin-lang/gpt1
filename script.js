document.getElementById("formulario").addEventListener("submit",function(e){

e.preventDefault();

emailjs.sendForm(
    "service_wxmoo9o",
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
