document.getElementById("btn-login").addEventListener("click", function(event){
    event.preventDefault();
    const phoneNumber = document.getElementById('input-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber, pinNumber);

    // wrong way to validate
    if(pinNumber==='1234' && phoneNumber==='019776655'){
        window.location.href = '/home.html'
    }
    else{
        alert("Wrong password or number")
    }
    
    
})
