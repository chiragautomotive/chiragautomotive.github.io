function getPhoneNumber(){
            // Selecting the input element and get its value 
            var inputVal = document.getElementById("phoneNumber").value;
          
    document.getElementById("link").innerHTML = "https://wa.me/"+inputVal; 
  
  a.setAttribute('href', "https://wa.me/"+inputVal);
}
