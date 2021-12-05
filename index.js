function getPhoneNumber(){
            // Selecting the input element and get its value 
            var inputVal = 
            
            document.getElementById("phoneNumber").value;
        var walink ="https://wa.me/"+inputVal  
    document.getElementById("link").innerHTML = "https://wa.me/"+inputVal; 
  
 document.getElementById("link").setAttribute("href", "https://wa.me/"+inputVal)
}
