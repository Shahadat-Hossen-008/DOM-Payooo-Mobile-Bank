// cash out toggle

document.getElementById("cash-out-form-btn").addEventListener("click", function(){
    document.getElementById("form-of-cash-out").classList.remove("hidden");
    document.getElementById("add-amount-form").classList.add("hidden");
    
})


// add money button toggle

document.getElementById("add-money-btn-form").addEventListener("click", function(){
    document.getElementById("add-amount-form").classList.remove("hidden");
    document.getElementById("form-of-cash-out").classList.add("hidden");
    
})


