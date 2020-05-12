function carregar() {
    var msg= document.getElementById('msg')
var img= document.getElementById('imagem')
var data= new Date()
var hora= data.getHours()
msg.innerHTML=`Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    // Bom Dia!
    img.src = "manha_Easy-Resize.com_1.png"
    document.body.style.background = "#eaa758"
}
else if (hora >= 12 && hora <= 18) {
    //Boa Tarde
    img.src = "tardinha_Easy-Resize.com_1.png"
    document.body.style.background = "#fe624c"
} else {
    //Boa noite
    img.src = "fotonoite_Easy-Resize.com.png"
    document.body.style.background = "#016076"
}
}
