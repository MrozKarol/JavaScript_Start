// setTimeout - metoda ktora wykonuje operacje po okreslonym czasie 
// setInterval - metoda ktora wykonuje operacje co interwał (co okreslony przez nas czas w nieskonczoność)

function stopWatch(wynik, liczba)
{
    wynik.innerHTML = --liczba;
    if(liczba <= 0)
    return
    // to samo tylko pomniejszone o liczbe -
    setTimeout(function()
    {
        stopWatch(wynik, liczba)
    },1000
    )
}

window.onload = function(){
    var poczatkowaWartosc = document.querySelector("#poczatkowaWartosc");
    var statStoper = document.getElementById("start");
    var zatrzymajStoper = document.getElementById("stop");
    var wynik = document.getElementById("wynik");

    

    statStoper.onclick = function(){
        var poczatkowaWartosc = document.getElementById("poczatkowaWartosc").value;
        wynik.innerHTML = poczatkowaWartosc;
        setTimeout(function()
        {
            stopWatch(wynik, poczatkowaWartosc)
        }
        ,1000);
        
    
    };
}