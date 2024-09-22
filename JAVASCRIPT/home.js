document.getElementById('add-money').addEventListener('click', function(event){
    event.preventDefault();
    const amountValue = document.getElementById("input-amount").value;
    const newValue = parseFloat(amountValue);
    const pinNumber = document.getElementById("input-pin").value;
//    validate poor way
  if(pinNumber==='1234'){
    const balance = document.getElementById("current-balance").innerText;
    const newBalance = parseFloat(balance);
    const newAmount = newValue + newBalance
    document.getElementById("current-balance").innerText = newAmount;
    
  }
  else{
    alert('Failed to add money.Please try again')
  }
    
    
    
})
