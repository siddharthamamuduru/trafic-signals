function handleTrafficSignal(signal){
    const redTarfficLight=document.getElementById("red")
    redTarfficLight.style.backgroundColor=signal === "red"? "red":"white"

     document.getElementById("yellow").style.backgroundColor=signal === "yellow"? "yellow":"white"
     document.getElementById("Green").style.backgroundColor=signal==="Green"?"Green":"white"
}
 