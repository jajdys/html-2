function sprawdz(){
    var x=document.getElementById("Liczba").value;
 
     if(x==''){
         wynik.innerHTML='Nie podano wartosci';
     }
     else if(x<1){
         wynik.innerHTML='Liczba jest za mała';
     }
     else if(x>100){
         wynik.innerHTML='Liczba jest za duża';
     }
     else if(x%2==1 && x<10){
         wynik.innerHTML='Liczba '+ x +' jest dodatnia, nieparzysta, jednocyfrowa ';
     }
     else if(x%2==0 && x<10){
         wynik.innerHTML='Liczba '+ x +' jest dodatnia parzysta, jednocyfrowa';
     }
     else if(x%2==1 && x>=10 && x<100){
         wynik.innerHTML='Liczba '+ x +' jest dodatnia, nieparzysta, dwucyfrowa ';
     }
     else if(x%2==0 && x>=10 && x<100){
         wynik.innerHTML='Liczba '+ x +' jest dodatnia parzysta, dwucyfrowa';
     }
     else if(x%2==0 && x==100){
         wynik.innerHTML='Liczba '+ x +' jest dodatnia parzysta, trzycyfrowa';
     }
 }
 function sprawdz2(){
     var xd=document.getElementById("Liczba2").value;

     var xdd=document.getElementById("Liczba3").value;

     let string='';

     if(xd=='' || xdd==''){
         wynik1.innerHTML='Nie podano wartosci';
     }
     else if(xd<1 || xdd<1){
         wynik1.innerHTML='Liczba jest za mala';
     }
     else if(xd>10 || xdd>10){
         wynik1.innerHTML='liczba jest za duza';
     }
     else if(xd>=1 && xd<=10 && xdd>=1 && xdd<=10 && xd>xdd){
         for(let i=xd; i>=xdd;i--){
            string+=i;
         }
         wynik1.innerHTML=string;
     }
     else if(xd>=1 && xd<=10 && xdd>=1 && xdd<=10 && xd<xdd){
         for(var i=xd; i<=xdd;i++){
             string += i;
         }
         wynik1.innerHTML=string;
     }
     else if (xd==xdd){
         wynik1.innerHTML='podaj rozne wartosci';
     }
 }
 
