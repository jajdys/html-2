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
    var licz2=document.getElementById("Liczba2").value;
    var licz3=document.getElementById("Liczba3").value;
    let str='';
    if(licz2=='' || licz3==''){
        wynik2.innerHTML='Nie podano wartosci';
    }
    else if(licz2<1 || licz3<1){
        wynik2.innerHTML='Liczba jest za mala';
    }
    else if(licz2>10 || licz3>10){
        wynik2.innerHTML='liczba jest za duza';
    }
    else if(licz2>=1 && licz2<=10 && licz3>=1 && licz3<=10 && licz2>licz3){
        for(let i=licz2; i>=licz3;i--){
           str+=i;
        }
        wynik2.innerHTML=str;
    }
    else if(licz2>=1 && licz2<=10 && licz3>=1 && licz3<=10 && licz2<licz3){
        for(var i=licz2; i<=licz3;i++){
            str += i;
        }
        wynik2.innerHTML=str;
    }
    else if (licz2==licz3){
        wynik2.innerHTML='podaj rozne wartosci';
    }
}

 
