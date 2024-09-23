document.getElementById("btn-cash-out").addEventListener("click", function(event){
    event.preventDefault();
    const cashOutAmount = document.getElementById("input-cash-out-amount").value;
    const cashOutNumber = parseFloat(cashOutAmount);
    const pinNumber = document.getElementById("input-cash-out-pin").value;
//    validate wrong way

if(pinNumber==="1234"){
    const balance = document.getElementById("current-balance").innerText;
    const newBalance = parseFloat(balance);
    const newAmount = newBalance - cashOutNumber;
    document.getElementById("current-balance").innerText = newAmount;
}
else{
    alert("Cash out failed. Try again")
}
})
