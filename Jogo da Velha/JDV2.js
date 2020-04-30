const player1= "X";
const player2= "O";
var playtime= player1;
var gameover= false;

atualizamostrador();
inicializarespaços();

function atualizamostrador(){ 
    if(gameover) {return;}
    if(playtime==player1) {
    var player= document.querySelectorAll("div#mostrador img")[0];
    player.setAttribute("src","X jogo da velha .png")
    
 }
 else {
    var player= document.querySelectorAll("div#mostrador img")[0];
    player.setAttribute("src","Bola jogo da velha.png");}
}
}

function inicializarespaços(){
    var espaços = document.getElementsByClassName("posição");
    for (var i = 0; i < espaços.length; i++) {
       espaços[i].addEventListener("click", function(){
        if(gameover) {return;}
        if(this.getElementsByTagName("img").length==0){
            if (playtime == player1){
                this.innerHTML="<img src= 'X jogo da velha.png'>";
                this.setAttribute("onclick",player1);
                playtime = player2;
                
                           }
                           else {
                            this.innerHTML="<img src= 'Bola jogo da velha.png'>";
                            this.setAttribute("onclick",player2);
                            playtime = player1;
           
        }
        atualizamostrador();
       }
       
        
    }
}