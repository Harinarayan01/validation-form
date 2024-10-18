function myfun(){
    const user=document.getElementById('user').value;
    const id=document.getElementById('id').value;
    const idregular=/^[0-9@]{4,15}$/;
    const regular=/^[a-zA-Z .]{4,15}$/;
    console.log("hari Narayan");
    
    if(regular.test(user) && idregular.test(id)){
        document.getElementById('sms').innerHTML="";
    }
    else{
        document.getElementById('sms').innerHTML="not valid name plz try again";
        return false;
    }
}