function reveal(){

    document.getElementById("hiddenmsg").style.display="block";
}

function countDown() {
    var currentVal=document.getElementById("countdownbtn").innerHTML;
    var newVal=0;
    if (currentVal > 0) 
    {
        newVal=currentVal-1;    
    }
    document.getElementById("countdownbtn").innerHTML=newVal;
}