document.getElementById("formulario").addEventListener("submit",function(e){

e.preventDefault();

emailjs.sendForm(
    "service_wxmoo9o",
    "template_96x4enj",
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
