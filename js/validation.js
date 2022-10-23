/*
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    AKAI Frontend Task - Javascript

    W tym zadaniu postaraj się zaimplementować metody, które sprawdzą, czy dane wprowadzone
    do formularza są poprawne. Przykładowo: czy imię i nazwisko zostało wprowadzone.
    Możesz rozwinąć walidację danych tak bardzo, jak tylko zapragniesz.

    Powodzenia!
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/
const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const email = document.getElementById('email')
const input = document.getElementById('submit')
input.disabled =true;
let nameValidation = false
let LastNameValidation = false
let EmailValidation = false
let checboxValidation = false
let imageCounter=1




function validateName() {
    let errorName = document.getElementById('errorName')
    const specialChars = /[^a-zA-Z0-9ĄąĆćĘęŁłŃńÓóŚśŹźŻż]/g;

        if (firstName.value == "") {
            errorName.innerHTML='Podaj imię';
            nameValidation=false;
        }
        else if (firstName.value.match(specialChars)) {
            errorName.innerHTML='Nie możesz używać znaków specjalnych';
            nameValidation=false;
        }
         else {
            errorName.innerHTML='';
            nameValidation=true;
      }
      validationCheck()
    }

function validateLastName() {
    let errorLastName = document.getElementById('errorLastName')
    const specialChars = /[^a-zA-Z0-9ĄąĆćĘęŁłŃńÓóŚśŹźŻż ]/g;

            if (lastName.value == "") {
                errorLastName.innerHTML='Podaj nazwisko';
                LastNameValidation = false;
            }
            else if (lastName.value.match(specialChars)) {
                errorLastName.innerHTML='Nie możesz używać znaków specjalnych';
                LastNameValidation = false;
            }
            else {
                errorLastName.innerHTML='';
                LastNameValidation = true;
        }
        validationCheck()
    }


function validateEmail()
{
    let errorEmail = document.getElementById('errorEmail')
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(email.value.match(mailformat))
    {
        errorEmail.innerHTML='';
        EmailValidation = true;
    }
    else
    {
        errorEmail.innerHTML='Podaj poprawny e-mail';
        EmailValidation = false;
    }
    validationCheck()
}


function validateCheckbox()
{
    let errorCheckbox = document.getElementById('errorCheckbox')
    var checkboxs=document.querySelectorAll('input[type=    checkbox]')    ;
    var okay=false;
    for(var i=0,l=checkboxs.length;i<l;i++)
    {
        if(checkboxs[i].checked)
        {
            okay=true;
            break;
        }
    }
    if(okay){
        errorCheckbox.innerHTML='';
            checboxValidation = true;
    }
    else {
        checboxValidation = false;
        errorCheckbox.innerHTML='Wybierz przynajmniej jedną sekcję';

    }
    validationCheck()
}


function validationCheck() {
    if ( nameValidation == true && LastNameValidation == true  && EmailValidation == true && checboxValidation == true ) {
        input.disabled =false;
    }
    else{
        input.disabled =true;
    }
}

function test (){
    alert('test')
}

function transform()
{  
    x = document.getElementById("task-frontend");
    x.style.transform = "translate3d(0px, 0px, -250px)";
    x.style.cursor="default";
}

// function changeImage() {
//     if (document.getElementById("imgClickAndChange").src == "akaiLOGO.png") 
//     {

//         document.getElementById("imgClickAndChange").src = "akaiLOGO2.png";
//     } 
//     else {
//         console.log('test')

//         document.getElementById("imgClickAndChange").src = "akaiLOGO2.png";
//     }
// }

function changeImage() {
    if(imageCounter===1) {
        document.getElementById("imgClickAndChange").src = "akaiLOGO2.png";
        imageCounter--;
    }
    else{
        document.getElementById("imgClickAndChange").src = "akaiLOGO.png";
        imageCounter ++;
    }
}



