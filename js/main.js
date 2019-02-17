const floatField = document.getElementById('floatField1');
const floatContainer = document.getElementById('floatContainer');
const floatField2 = document.getElementById('floatField2');
const floatContainer2 = document.getElementById('floatContainer2');

floatField.addEventListener('focus', function() {
    floatContainer.classList.add('onfocus-1');
});

floatField.addEventListener('blur', function() {

    if (floatField.value.length == 0) {
        floatContainer.classList.remove('onfocus-1');
        floatField.style.borderBottomColor='gray';
    }
    else{
        var email = floatField.value;
        var track = 0;
        var firstL='';
        var lastL='';
        if(email.length>3){
            firstL=email[0];
            lastL=email[email.length-1];
            for (let index = 0; index < email.length; index++) {
                if(email[index]=="@"){
                    track++;
                }
                
            }

            if(track==1 && firstL!=''&& lastL!='' && firstL!='@'&& lastL!='@'){
                floatField.style.borderBottomColor='gray';
              
            }
            else{
                floatField.style.borderBottomColor='red';
             
            }
        }
        else {
            floatField.style.borderBottomColor='red';
         
        }
}
   

});

floatField2.addEventListener('focus', function() {
    floatContainer2.classList.add('onfocus-1');
});

floatField2.addEventListener('blur', function() {

    if (floatField2.value.length == 0) {
        floatContainer2.classList.remove('onfocus-1');
        floatField2.style.borderBottomColor='red';
    }
});