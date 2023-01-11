let a = document.getElementById("liczba");
let zmienna, parzysta, ilosc;


const sprawdz=()=>{
    if(a.value > 100 || a.value < 1){
        alert("Podaj liczbę z przedziału <1; 100>");
    }
    else{
        zmienna = "Dodatnia";
        
        if(a.value % 2 == 0){
            parzysta == "parzysta";
        }
        else{
            parzysta == "Nieparzysta";
        }
        ilosc = a.value.length;

        if(ilosc==1){
            wynik.innerHTML = "Liczba " + a.value + " jest " + zmienna +  ", " + parzysta + " oraz jednocyfrowa";
        }
        else if(ilosc == 2){
            wynik.innerHTML = "Liczba " + a.value + " jest " + zmienna +  ", " + parzysta + " oraz dwucyfrowa";
        }
        else{
            wynik.innerHTML = "Liczba " + a.value + " jest " + zmienna +  ", " + parzysta + " oraz trzycyfrowa";
        }
    }
}
