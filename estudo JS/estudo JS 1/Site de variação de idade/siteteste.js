function Verificar() {
    var data= new Date()
    var ano= data.getFullYear()
    var formulario= document.getElementById('txtano')
    var res= document.querySelector('div#res')
    if (formulario.value.length == 0 || formulario.value > ano) {
        alert('[Erro] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number (formulario.value)
        var genero = ""
        var img= document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero ='Homem'
            if (idade>=0 && idade <= 10) {
                //criança
                img.setAttribute('src','guriconvertido.png')
            } else if(idade > 11 && idade < 40){
                //jovem
                img.setAttribute('src','homemconvertido.png')
            } else{
                //idoso
                img.setAttribute('src','veioconvertido.png')
            }

        } else{fsex[1].checked = genero='Mulher'
        if (idade>=0 && idade <= 10) {
            //criança
            img.setAttribute('src','meninaconvertido.png')
        } else if(idade > 11 && idade < 40){
            //jovem
            img.setAttribute('src','moçajovemconvertido.png')
        } else{
            //idoso
            img.setAttribute('src','veiaconvertido.png')
        }
    }
        res.innerHTML=`Detectamos que é um(a)${genero} de ${idade} anos.`
        res.appendChild(img)
    }
}
  