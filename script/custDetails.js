function check_email() {
    let ele = document.querySelector("#email");
    let val = document.querySelector("#email").value;
    let msg = document.querySelector("#email_err");
    if (val.includes("@") && !val.includes("@gmail.com")) {
        ele.style.borderBottom = "2px solid blue";
        msg.innerHTML = "Only iiits.in extension allowed";
        msg.style.display = "block"
        return false
        
    } else if (val.includes("@gmail.com")) {
        ele.style.borderBottom = "2px solid green";
        msg.style.display = "none";
        return true
       
    } else {
        ele.style.borderBottom = "2px solid red";
        msg.innerHTML = "Username must contain an @ and iiits.in extension";
        msg.style.display = "block"
        return false
       
    }
}


function proceed(){
    let fname=document.getElementById("full_name");
    let email=document.getElementById("email");
    let phn=document.getElementById("roll");
    let add=document.getElementById("today");
    if(fname.value.length>0 && email.value.length>0 && phn.value.length>0 && add.value.length>0 ){
        window.location.href="payment.html";
    }
    else{
        alert("please fill the form correctly !")
        location.reload();
    }
}