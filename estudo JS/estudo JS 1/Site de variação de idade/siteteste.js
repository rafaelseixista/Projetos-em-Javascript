function Verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formulario = document.getElementById('txtano')
    var res = document.querySelector('div#res')
   if(formulario.value.length == 0 || formulario.value > ano){
    alert('[Erro] Verifique os dados e tente novamente!')
   } else{
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(formulario.value)
       res.innerHTML = `Idade calculada: ${idade}`
   }
   }